"use client";

import { useState } from 'react';
import type { FormEvent } from "react";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  //  const [expandedFaq, setExpandedFaq] = useState(null);
   const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
 

  const handleInputChange = (e:  unknown) => {
    
    const target = (e as { target: HTMLInputElement }).target;
    const { name, value } = target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
   
     e.preventDefault();
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        priority: 'medium'
      });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };
  

  const toggleFaq = (index:  number) => {
    // setExpandedFaq(expandedFaq === index ? null : index);
    setExpandedFaq((prev) => (prev === index ? null : index));
  };

  const faqData = [
    {
      question: "How do I reset my learning progress?",
      answer: "You can reset your learning progress by going to Settings > Learning Progress > Reset Progress. This action cannot be undone."
    },
    {
      question: "Can I download my certificates offline?",
      answer: "Yes, all certificates can be downloaded as PDF files from your Dashboard > Certificates section."
    },
    {
      question: "How do I change my subscription plan?",
      answer: "Navigate to Account Settings > Subscription to view and modify your current plan. Changes take effect immediately."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Currently, we offer a responsive web application. A dedicated mobile app is in development and will be available soon."
    },
    {
      question: "How can I track my learning analytics?",
      answer: "Your learning analytics are available in the Dashboard > Analytics section, showing detailed progress, time spent, and performance metrics."
    }
  ];

  const contactMethods = [
    {
      title: "Email Support",
      description: "Get help via email within 24 hours",
      contact: "support@ailearn.com",
      icon: "📧",
      available: "24/7"
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Start Chat",
      icon: "💬",
      available: "9 AM - 6 PM EST"
    },
    {
      title: "Phone Support",
      description: "Speak directly with a support specialist",
      contact: "+1 (555) 123-4567",
      icon: "📞",
      available: "Mon-Fri 9 AM - 6 PM EST"
    },
    {
      title: "Community Forum",
      description: "Connect with other learners and experts",
      contact: "Visit Forum",
      icon: "👥",
      available: "24/7"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white overflow-y-auto">
      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.3);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #3b82f6, #1d4ed8);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #2563eb, #1e40af);
        }
      `}</style>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Contact Support
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We are here to help you succeed in your AI learning journey. Reach out to us anytime.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8 shadow-2xl">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-2xl">📝</span>
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Priority Level
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="low" className="bg-slate-800">Low</option>
                      <option value="medium" className="bg-slate-800">Medium</option>
                      <option value="high" className="bg-slate-800">High</option>
                      <option value="urgent" className="bg-slate-800">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Describe your question or issue in detail..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold py-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="text-lg">🚀</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-green-300 text-center">
                    ✅ Message sent successfully! We will get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-xl">🤝</span>
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{method.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-medium text-white group-hover:text-blue-300 transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-sm text-slate-400 mb-2">
                          {method.description}
                        </p>
                        <p className="text-sm font-medium text-blue-400">
                          {method.contact}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          {method.available}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-xl">📊</span>
                Support Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Avg. Response Time</span>
                  <span className="text-green-400 font-semibold"> 2 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Resolution Rate</span>
                  <span className="text-blue-400 font-semibold">98.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Satisfaction Score</span>
                  <span className="text-purple-400 font-semibold">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8 shadow-2xl">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <span className="text-2xl">❓</span>
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-lg border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left hover:bg-white/5 transition-all duration-200 flex items-center justify-between"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <span className={`text-xl transition-transform duration-200 ${
                    expandedFaq === index ? 'rotate-180' : ''
                  }`}>
                    ⌄
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4 text-slate-300 border-t border-white/10">
                    <div className="pt-4">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
            <h3 className="text-lg font-semibold mb-2">Still need help?</h3>
            <p className="text-slate-300 mb-4">
              Our support team is available 24/7 to assist you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105">
                💬 Start Live Chat
              </button>
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105">
                📞 Request Callback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}