'use client';

import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, LifeBuoy, Lightbulb, PhoneCall, MapPin, Clock, HelpCircle } from 'lucide-react';

export default function SupportPage() {
  const [formType, setFormType] = useState<'support' | 'suggest'>('support');
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [topicCategory, setTopicCategory] = useState('driver-issue');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 sm:py-24 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="relative overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.25)] sm:p-12">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#1963ff]/15 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1963ff]/30 bg-[#1963ff]/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-400">
                <LifeBuoy className="w-4 h-4" />
                <span>Help Center & Customer Support</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                We are here to help with your printer setup.
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-slate-300">
                Whether you are stuck on a missing driver installation, facing offline loop errors, or want to suggest a new manufacturer tutorial, our team is ready to assist.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-700 bg-slate-800/90 p-6 shadow-2xl backdrop-blur-md">
              <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-400">Need help fast?</div>
              <div className="mt-4 space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-400" />
                  <span>Quick driver guidance for HP, Canon, Epson, and Brother.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-400" />
                  <span>Step-by-step fixes for offline, setup, and connection problems.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-400" />
                  <span>Response support for installation and troubleshooting questions.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid: Info Side & Form Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details, Hours & FAQ Highlights */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-extrabold text-slate-900">Get in Touch Directly</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Have urgent installation questions? Review our support contact channels or drop us a direct line through the portal form.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#1963ff]/10 text-[#1963ff] flex items-center justify-center shrink-0 font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Support</div>
                    <div className="text-sm font-bold text-slate-900">support@printerdriverhub.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#1963ff]/10 text-[#1963ff] flex items-center justify-center shrink-0 font-bold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Response Hours</div>
                    <div className="text-sm font-bold text-slate-900">Mon - Fri: 9:00 AM - 6:00 PM (EST)</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#1963ff]/10 text-[#1963ff] flex items-center justify-center shrink-0 font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Index Headquarters</div>
                    <div className="text-sm font-bold text-slate-900">Tech Portal Tower, Suite 400, San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Helper Box */}
            <div className="bg-blue-900 text-white rounded-3xl p-8 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Quick Tip</span>
              </div>
              <h4 className="text-lg font-bold">Looking for instant driver downloads?</h4>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Before submitting a request, try using our Master Lookup Console on the homepage to instantly grab verified OEM packages for HP, Canon, Epson, and Brother devices.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Support & Suggestion Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6">
              
              {/* Mode Switcher Tabs */}
              <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => { setFormType('support'); setSubmitted(false); }}
                  className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                    formType === 'support'
                      ? 'bg-[#1963ff] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Support</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setFormType('suggest'); setSubmitted(false); }}
                  className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                    formType === 'suggest'
                      ? 'bg-[#1963ff] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Lightbulb className="w-4 h-4" />
                  <span>Suggest a Topic</span>
                </button>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    {formType === 'support' ? 'Message Sent Successfully!' : 'Topic Suggestion Received!'}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    {formType === 'support'
                      ? "Thank you for reaching out. Our support team will review your inquiry and reply via email within 24 hours."
                      : "Thanks for helping us improve our knowledge base! Our editorial team will review your requested guide topic."}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 text-xs font-bold text-[#1963ff] bg-[#1963ff]/10 hover:bg-[#1963ff]/20 rounded-xl transition-all"
                  >
                    Send Another Response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {formType === 'suggest' && (
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Suggestion Category
                      </label>
                      <select
                        value={topicCategory}
                        onChange={(e) => setTopicCategory(e.target.value)}
                        className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#1963ff] transition-all"
                      >
                        <option value="driver-issue">New Printer Driver Guide</option>
                        <option value="error-fix">Error Code Solution Request</option>
                        <option value="mac-setup">macOS / AirPrint Manual</option>
                        <option value="other">General Feedback / Other</option>
                      </select>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., John Smith"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1963ff] transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g., john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1963ff] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      {formType === 'support' ? 'Describe Your Printer Issue' : 'Suggest Topic Details & Printer Model'}
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder={
                        formType === 'support'
                          ? "Include your printer model (e.g., HP LaserJet M404n), operating system, and the error code you are experiencing..."
                          : "Let us know which printer model or troubleshooting tutorial you would like us to publish next..."
                      }
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1963ff] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-sm font-bold text-white bg-[#1963ff] hover:bg-[#1554db] rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{formType === 'support' ? 'Submit Support Request' : 'Submit Topic Suggestion'}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}