'use client';
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';

const settingsData = [
  { label: 'Email Notifications', value: 'Enabled' },
  { label: 'Language', value: 'English (US)' },
  { label: 'Theme', value: 'Dark' },
  { label: 'Two-Factor Auth', value: 'Enabled' },
];

export default function SettingsDashboard() {
  const [open, setOpen] = useState(false);
  const [selectedSetting, setSelectedSetting] = useState<{ label: string; value: string } | null>(null);

  const handleCardClick = (setting: { label: string; value: string }) => {
    setSelectedSetting(setting);
    setOpen(true);
  };

  return (
    <div className="min-h-screen  p-8 text-white">
      <h1 className="text-4xl font-bold mb-10 text-violet-300">⚙️ Settings</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {settingsData.map((item, idx) => (
          <SettingItem key={idx} {...item} onClick={handleCardClick} />
        ))}
      </div>

      {/* Modal */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-2xl bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#0f172a] p-6 shadow-xl border border-white/10 backdrop-blur-md">
            <Dialog.Title className="text-xl font-bold mb-4 text-violet-300">
              Update {selectedSetting?.label}
            </Dialog.Title>
            <form className="space-y-4">
              <div>
                <label htmlFor="settingInput" className="block mb-1 text-sm text-white/80">
                  {selectedSetting?.label}
                </label>
                <input
                  id="settingInput"
                  type="text"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-400 backdrop-blur-lg"
                  defaultValue={selectedSetting?.value}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="bg-violet-500 hover:bg-violet-600 text-white font-medium py-2 px-4 rounded-lg transition"
                >
                  Save
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}

const SettingItem = ({
  label,
  value,
  onClick,
}: {
  label: string;
  value: string;
  onClick: (setting: { label: string; value: string }) => void;
}) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="cursor-pointer rounded-xl p-5 mt-4 bg-gradient-to-br from-violet-700 to-indigo-700 bg-opacity-30 border border-white/10 backdrop-blur-md shadow-md transition"
    onClick={() => onClick({ label, value })}
  >
    <div className="flex justify-between items-center">
      <span className="text-sm text-white/70">{label}</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  </motion.div>
);
