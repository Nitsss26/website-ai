/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number.parseInt(searchParams.get("page") || "1");
    const limit = Number.parseInt(searchParams.get("limit") || "10");
    const category = searchParams.get("category");
    const all = searchParams.get("all") === "true";

    const supabase = createClient();

    let query = supabase
      .from("blogs")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false });

    if (category) {
      query = query.eq("category", category);
    }

    if (!all) {
      query = query.range((page - 1) * limit, page * limit - 1);
    }

    const { data, error, count } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    const responseData: any = {
      blogs: data,
    };

    if (!all) {
      responseData.pagination = {
        page,
        limit,
        total: count,
        totalPages: Math.ceil((count || 0) / limit),
      };
    }

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Blogs fetch error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}


// export async function POST(request: NextRequest) {
//   try {
//     const supabase = createClient()

//     // Check if user is admin
//     const {
//       data: { user },
//     } = await supabase.auth.getUser()
//     if (!user) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
//     }

//     const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()

//     if (profile?.role !== "admin") {
//       return NextResponse.json({ error: "Forbidden" }, { status: 403 })
//     }

//     const blogData = await request.json()

//     const { data, error } = await supabase
//       .from("blogs")
//       .insert({
//         ...blogData,
//         author_id: user.id,
//         slug: blogData.title
//           .toLowerCase()
//           .replace(/\s+/g, "-")
//           .replace(/[^\w-]+/g, ""),
//       })
//       .select()
//       .single()

//     if (error) {
//       return NextResponse.json({ error: error.message }, { status: 400 })
//     }

//     return NextResponse.json(data)
//   } catch (error) {
//     console.error("Blog creation error:", error)
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient();
    const body = await request.json();

    // Validate: expect an array of blog objects
    if (!Array.isArray(body)) {
      return NextResponse.json(
        { error: "Request body must be an array of blog objects" },
        { status: 400 }
      );
    }

    // Optional: Basic validation for required fields
    for (const [index, blog] of body.entries()) {
      if (!blog.title || !blog.category) {
        return NextResponse.json(
          { error: `Missing required fields in blog at index ${index}` },
          { status: 400 }
        );
      }
    }

    const { data, error } = await supabase
      .from("blogs")
      .insert(body)
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ blogs: data });
  } catch (error) {
    console.error("Unhandled error while inserting blogs:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}