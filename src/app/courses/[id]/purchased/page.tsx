'use client';

import React, { useState } from "react";
import { CheckCircle, CirclePlay } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

const chapters = [
  {
    id: 1,
    title: "Introduction",
    videoUrl: "https://www.example.com/video1.mp4",
    description: "Welcome to the course! This chapter gives you a complete overview and mindset preparation for what lies ahead.",
    attachment: "intro.pdf",
  },
  {
    id: 2,
    title: "Deep Dive",
    videoUrl: "https://www.example.com/video2.mp4",
    description: "Explore deep React concepts like hooks, context, and advanced patterns.",
    attachment: "deep-dive.pdf",
  },
  {
    id: 3,
    title: "Exploring the Basics",
    videoUrl: "https://www.example.com/video3.mp4",
    description: "Here you’ll reinforce fundamental concepts like JSX, component trees, and rendering cycles.",
    attachment: "basics.pdf",
  },
  {
    id: 4,
    title: "Outro",
    videoUrl: "https://www.example.com/video4.mp4",
    description: "A wrap-up to help solidify learnings and next steps in your journey.",
    attachment: "outro.pdf",
  },
];

export default function CourseDetailPage() {
  const [currentChapter, setCurrentChapter] = useState(chapters[0]);
  const [completedChapters, setCompletedChapters] = useState<number[]>([]);
  const [feedback, setFeedback] = useState("");

  const handleMarkComplete = () => {
    if (!completedChapters.includes(currentChapter.id)) {
      setCompletedChapters([...completedChapters, currentChapter.id]);
    }
  };

  const progress = (completedChapters.length / chapters.length) * 100;

  return (
    <div className="flex min-h-screen bg-black text-slate-100">
      {/* Sidebar */}
      <aside className="w-72 bg-gradient-to-b from-[#1f2937] to-[#111827] p-6 border-r border-slate-800 shadow-md">
        <h1 className="text-2xl font-bold text-indigo-400 mb-4">🎓 ML for Beginners</h1>
        <ProgressBar value={progress} />
        <p className="text-sm text-cyan-300 mt-2 mb-6">{Math.round(progress)}% Complete</p>
        <div className="space-y-2">
          {chapters.map((chapter) => {
            const isCompleted = completedChapters.includes(chapter.id);
            const isActive = currentChapter.id === chapter.id;
            return (
              <div
                key={chapter.id}
                onClick={() => setCurrentChapter(chapter)}
                className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all ${isActive ? "bg-indigo-800/50 ring-1 ring-indigo-400" : "hover:bg-slate-700"
                  }`}
              >
                {isCompleted ? (
                  <CheckCircle className="text-emerald-400 w-4 h-4" />
                ) : (
                  <CirclePlay className="w-4 h-4 text-slate-400" />
                )}
                <span className="text-sm font-medium">{chapter.title}</span>
              </div>
            );
          })}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto bg-black">
        <Card className="bg-slate-900/60 backdrop-blur-md border border-slate-700 rounded-xl shadow-lg mb-8 overflow-hidden">
          <CardContent className="p-0">
            <video
              key={currentChapter.videoUrl}
              src={currentChapter.videoUrl}
              controls
              className="w-full h-96 object-cover rounded-t-xl"
            />
          </CardContent>
        </Card>

        <div className="mb-8 space-y-2">
          <h2 className="text-3xl font-semibold text-indigo-300">{currentChapter.title}</h2>
          <p className="text-slate-300 leading-relaxed">{currentChapter.description}</p>
          {currentChapter.attachment && (
            <a
              href={`/${currentChapter.attachment}`}
              download
              className="text-cyan-400 underline hover:text-cyan-300"
            >
              📄 Download Attachment
            </a>
          )}
          <Button
            onClick={handleMarkComplete}
            variant="outline"
            className={`
    mt-4 ml-10
    bg-gradient-to-br from-green-400/30 to-emerald-500/20
    backdrop-blur-md
    border border-green-400/30
    text-green-100
    hover:from-green-400/40 hover:to-emerald-500/30
    transition-all duration-300
    shadow-md
  `}
            disabled={completedChapters.includes(currentChapter.id)}
          >
            {completedChapters.includes(currentChapter.id) ? (
              <>
                Completed <CheckCircle className="ml-2 w-4 h-4 text-emerald-400" />
              </>
            ) : (
              <>
                Mark as Complete <CheckCircle className="ml-2 w-4 h-4 text-green-300" />
              </>
            )}
          </Button>

        </div>

        {/* 📘 Course Description */}
        <section className="rounded-xl p-6 mb-8 border border-indigo-500/30 shadow-md bg-gradient-to-br from-[#3b0764]/30 via-[#1e40af]/20 to-transparent backdrop-blur-md">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">📘 Course Description</h3>
          <p className="text-sm text-slate-200 leading-relaxed max-w-4xl">
            Learn foundational and advanced concepts in machine learning. This course walks you through core algorithms, implementation in real-world projects, and critical thinking around model deployment and ethics.
          </p>
        </section>

        {/* 📝 Feedback */}
        <section className="rounded-xl p-6 border border-cyan-400/20 bg-gradient-to-tr from-[#164e63]/30 via-[#0e7490]/20 to-transparent backdrop-blur-md shadow-md">
          <h3 className="text-lg font-semibold text-cyan-300 mb-2">📝 Leave Feedback</h3>
          <Textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your thoughts about this chapter..."
            className="bg-black/30 border border-slate-600 text-white placeholder-slate-400 backdrop-blur-sm"
          />
        </section>
      </main>
    </div>
  );
}
