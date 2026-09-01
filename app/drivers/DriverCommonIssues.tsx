'use client';

import React, { useState } from 'react';
import { AlertCircle, ChevronDown, Wrench, RefreshCw, HelpCircle } from 'lucide-react';

export default function DriverCommonIssues() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const issues = [
    {
      question: "Printer showing 'Offline' status constantly",
      answer: "This is usually caused by a dropped Wi-Fi connection or a paused print queue. Go to your Bluetooth & devices settings, remove the printer, clear the Windows Print Spooler service, and reinstall using our official driver package."
    },
    {
      question: "Print job stuck in queue and won't delete",
      answer: "Open the Command Prompt as Administrator, type 'net stop spooler', clear files inside 'C:\\Windows\\System32\\spool\\PRINTERS', and then type 'net start spooler' to reset the print subsystem."
    },
    {
      question: "Missing advanced options (like Duplex or High-Res)",
      answer: "If your computer installed a generic fallback driver automatically, features like double-sided printing or ink level tracking will disappear. Download the full-feature OEM driver package from your manufacturer."
    },
    {
      question: "Error code 0x80070002 during installation",
      answer: "This typically indicates missing Windows updates or a corrupted temporary extraction folder. Restart your computer, ensure your OS is fully updated to the latest build, and run the installer as Administrator."
    }
  ];

  return (
    <section id="troubleshooting" className="py-20 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1963ff]/10 text-[#1963ff] border border-[#1963ff]/20 text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-4 h-4" />
            <span>Troubleshooting & Errors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Common Driver Issues & Solutions
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Encountering printer errors, offline loops, or stalled queues? Review quick fixes for the most frequent driver-related problems.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {issues.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:bg-slate-100/60 transition-colors"
                >
                  <span className="text-sm sm:text-base flex items-center gap-3">
                    <Wrench className="w-4 h-4 text-[#1963ff] shrink-0" />
                    {item.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#1963ff]' : ''}`} />
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}