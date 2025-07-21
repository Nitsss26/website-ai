import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const {title} = await request.json()
    
    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 })
    }

    const supabase = createClient()

    const { data, error } = await supabase
      .from("courses")
      .select(`
        *`)
      .eq("title", title)
      // .eq("is_published", true)
      .single()

    if (error || !data) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Course fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
