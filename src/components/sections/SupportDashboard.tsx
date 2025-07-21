'use client';
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';

const formPlaceholders = {
  'Submit a Ticket': 'Describe the issue you’re facing...',
  'Live Chat': 'Tell us how we can help in the chat...',
  'FAQs': 'Search your question or ask something...',
};

export default function SupportDashboard() {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (title: string) => {
    setSelectedCard(title);
    setOpen(true);
  };

  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-bold mb-10 text-indigo-300">🛠 Support Center</h1>

      <div className="flex flex-col gap-6">
        <SupportCard
          title="Submit a Ticket"
          description="Our support team is available 24/7 to help with any issues you may have."
          onClick={handleCardClick}
          color="from-indigo-700 to-purple-700"
        />
        <SupportCard
          title="Live Chat"
          description="Chat with a support agent in real-time."
          onClick={handleCardClick}
          color="from-cyan-700 to-sky-700"
        />
        <SupportCard
          title="FAQs"
          description="Find quick answers to common questions."
          onClick={handleCardClick}
          color="from-pink-700 to-rose-700"
        />
      </div>

      {/* Modal Form */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-2xl bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#0f172a] p-6 shadow-xl border border-white/10 backdrop-blur-md">
            <Dialog.Title className="text-xl font-bold mb-4 text-indigo-300">
              {selectedCard}
            </Dialog.Title>
            <form className="space-y-4">
              <div>
                <label htmlFor="message" className="block mb-1 text-sm text-white/80">
                  {selectedCard === 'FAQs' ? 'Your Question' : 'Your Message'}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 backdrop-blur-lg"
                  placeholder={formPlaceholders[selectedCard as keyof typeof formPlaceholders]}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition"
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

const SupportCard = ({
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
