"use client"

// import { createClient } from "@/lib/supabase/client"
import { useEffect, useState } from "react"

export function useCourses(filters?: {
  category?: string
  difficulty?: string
  search?: string
}) {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  // const supabase = createClient()

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true)
        const params = new URLSearchParams()

        if (filters?.category) params.append("category", filters.category)
        if (filters?.difficulty) params.append("difficulty", filters.difficulty)
        if (filters?.search) params.append("search", filters.search)

        const response = await fetch(`/api/courses?${params}`)
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch courses")
        }

        setCourses(data.courses)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [filters])

  const enrollInCourse = async (courseId: string) => {
    try {
      const response = await fetch("/api/enrollments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ course_id: courseId }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to enroll")
      }

      return { success: true, enrollment: data.enrollment }
    } catch (err) {
      return {
        success: false,
        error: err instanceof Error ? err.message : "An error occurred",
      }
    }
  }

  return {
    courses,
    loading,
    error,
    enrollInCourse,
  }
}
