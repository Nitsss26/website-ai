'use client';
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';

const formPlaceholders = {
  'We Value Your Feedback': 'Share your feedback...',
  'Feature Suggestions': 'Suggest a new feature...',
  'Recent Comment': 'Share your comment...',
};

export default function FeedbackDashboard() {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (title: string) => {
    setSelectedCard(title);
    setOpen(true);
  };

  return (
    <div className="min-h-screen  p-8 text-white">
      <h1 className="text-4xl font-bold mb-10 text-emerald-300">💬 Feedback Dashboard</h1>

      <div className="flex flex-col gap-6">
        <FeedbackCard
          title="We Value Your Feedback"
          description="Tell us what you think and help us improve."
          onClick={handleCardClick}
          color="from-purple-700 to-indigo-700"
        />
        <FeedbackCard
          title="Recent Comment"
          description="“Thanks for adding the offline mode!” – User123"
          onClick={handleCardClick}
          color="from-emerald-700 to-cyan-700"
        />
        <FeedbackCard
          title="Feature Suggestions"
          description="Suggest new features you’d love to see in the app."
          onClick={handleCardClick}
          color="from-pink-700 to-rose-700"
        />
      </div>

      {/* Modal Form */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-2xl bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#0f172a] p-6 shadow-xl border border-white/10 backdrop-blur-md">
            <Dialog.Title className="text-xl font-bold mb-4 text-emerald-300">
              {selectedCard}
            </Dialog.Title>
            <form className="space-y-4">
              <div>
                <label htmlFor="message" className="block mb-1 text-sm text-white/80">
                  {selectedCard === 'Feature Suggestions' ? 'Your Suggestion' : 'Your Message'}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400 backdrop-blur-lg"
                  placeholder={formPlaceholders[selectedCard as keyof typeof formPlaceholders]}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-lg transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}

const FeedbackCard = ({
  title,
  description,
  onClick,
  color,
}: {
  title: string;
  description: string;
  onClick: (title: string) => void;
  color: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className={`cursor-pointer rounded-2xl mt-6 p-6 bg-gradient-to-br ${color} bg-opacity-30 shadow-lg border border-white/10 backdrop-blur-md transition-all`}
    onClick={() => onClick(title)}
  >
    <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
    <p className="text-white/80">{description}</p>
  </motion.div>
);
