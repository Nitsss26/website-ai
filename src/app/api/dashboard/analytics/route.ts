import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const supabase = createClient()

    // Check if user is admin
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()

    if (profile?.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    // Get today's analytics
    const { data: todayAnalytics } = await supabase
      .from("analytics")
      .select("*")
      .eq("date", new Date().toISOString().split("T")[0])
      .single()

    // Get yesterday's analytics for comparison
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const { data: yesterdayAnalytics } = await supabase
      .from("analytics")
      .select("*")
      .eq("date", yesterday.toISOString().split("T")[0])
      .single()

    // Get last 7 days for charts
    const { data: weeklyData } = await supabase
      .from("analytics")
      .select("*")
      .gte("date", new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0])
      .order("date", { ascending: true })

    // Calculate percentage changes
    const calculateChange = (today: number, yesterday: number) => {
      if (yesterday === 0) return today > 0 ? 100 : 0
      return Math.round(((today - yesterday) / yesterday) * 100)
    }

    const analytics = {
      today: {
        pageViews: todayAnalytics?.page_views || 0,
        newAccounts: todayAnalytics?.new_accounts || 0,
        revenue: todayAnalytics?.revenue || 0,
        blogReads: todayAnalytics?.blog_reads || 0,
        totalUsers: todayAnalytics?.total_users || 0,
      },
      changes: {
        pageViews: calculateChange(todayAnalytics?.page_views || 0, yesterdayAnalytics?.page_views || 0),
        newAccounts: calculateChange(todayAnalytics?.new_accounts || 0, yesterdayAnalytics?.new_accounts || 0),
        revenue: calculateChange(todayAnalytics?.revenue || 0, yesterdayAnalytics?.revenue || 0),
        blogReads: calculateChange(todayAnalytics?.blog_reads || 0, yesterdayAnalytics?.blog_reads || 0),
      },
      weeklyData: weeklyData || [],
    }

    return NextResponse.json(analytics)
  } catch (error) {
    console.error("Analytics fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
