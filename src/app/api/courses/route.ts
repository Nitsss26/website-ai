/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const supabase = createClient();

    const { searchParams } = new URL(request.url);
    const all = searchParams.get("all") === "true";
    const page = Number.parseInt(searchParams.get("page") || "1");
    const limit = Number.parseInt(searchParams.get("limit") || "10");
    const category = searchParams.get("category");
    const difficulty = searchParams.get("difficulty");

    let query = supabase
      .from("courses")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false });

    if (category) query = query.eq("category", category);
    if (difficulty) query = query.eq("difficulty", difficulty);

    // If not requesting all, apply pagination
    if (!all) {
      const from = (page - 1) * limit;
      const to = from + limit - 1;
      query = query.range(from, to);
    }

    const { data, error, count } = await query;

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    const response: any = {
      courses: data,
    };

    if (!all) {
      response.pagination = {
        page,
        limit,
        total: count,
        totalPages: Math.ceil((count || 0) / limit),
      };
    } else {
      response.total = count ?? 0;
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error("Unhandled error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient();
    const body = await request.json();

    if (!Array.isArray(body) || body.length === 0) {
      return NextResponse.json(
        { error: "Request body must be a non-empty array of courses" },
        { status: 400 }
      );
    }

    const requiredFields = ["title", "description"];

    for (const [index, course] of body.entries()) {
      for (const field of requiredFields) {
        if (!course[field]) {
          return NextResponse.json(
            { error: `Course at index ${index} is missing required field: ${field}` },
            { status: 400 }
          );
        }
      }
    }

    const { data, error } = await supabase
      .from("courses")
      .insert(body)
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ inserted: data });
  } catch (error) {
    console.error("Unhandled error while inserting courses:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
