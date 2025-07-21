import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    const supabase = createClient()

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    // Get user profile
    const { data: profile } = await supabase.from("profiles").select("*").eq("id", data.user.id).single()
    const token = jwt.sign({
      userId: data.user.id,
      email: data.user.email,
    }, process.env.NEXT_PUBLIC_JWT_SECRET as string, {
      expiresIn: "1d",
    })

    return NextResponse.json({
      message: "Login successful",
      token: token,
      profile:profile,
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
