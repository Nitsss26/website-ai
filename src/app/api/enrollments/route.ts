import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET() {
  try {
    const supabase = createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data, error } = await supabase
      .from("enrollments")
      .select(`
        *,
        courses (
          id,
          title,
          description,
          thumbnail_url,
          instructor,
          duration_weeks
        )
      `)
      .eq("user_id", user.id)
      .order("enrollment_date", { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Enrollments fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { course_id } = await request.json()

    // Check if already enrolled
    const { data: existing } = await supabase
      .from("enrollments")
      .select("id")
      .eq("user_id", user.id)
      .eq("course_id", course_id)
      .single()

    if (existing) {
      return NextResponse.json({ error: "Already enrolled in this course" }, { status: 400 })
    }

    const { data, error } = await supabase
      .from("enrollments")
      .insert({
        user_id: user.id,
        course_id,
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    // Update course enrollment count
    await supabase.rpc("increment_course_enrollment", { course_id })

    return NextResponse.json(data)
  } catch (error) {
    console.error("Enrollment error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
