'use client';

import React, { useState } from 'react';
import { Terminal, ShieldCheck } from 'lucide-react';

export default function DriverInstallationGuide() {
  const [activeTab, setActiveTab] = useState<'windows' | 'mac'>('windows');

  return (
    <section id="how-to-install" className="py-20 bg-[#1963ff] text-white border-b border-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white border border-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Terminal className="w-4 h-4" />
            <span>Step-by-Step Configuration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How to Install Printer Drivers Correctly
          </h2>
          <p className="text-base text-blue-100 leading-relaxed">
            Follow this standard manual to ensure your driver package installs cleanly without missing background utilities or port configuration errors.
          </p>
        </div>

        {/* OS Platform Switcher Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex bg-blue-900/40 p-1.5 rounded-2xl border border-white/15 backdrop-blur-md shadow-lg">
            <button
              type="button"
              onClick={() => setActiveTab('windows')}
              className={`px-6 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                activeTab === 'windows'
                  ? 'bg-white text-[#1963ff] shadow-md'
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              Windows (11 / 10)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('mac')}
              className={`px-6 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                activeTab === 'mac'
                  ? 'bg-white text-[#1963ff] shadow-md'
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              macOS Setup
            </button>
          </div>
        </div>

        {/* Step Guide Grid / Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {activeTab === 'windows' ? (
            <>
              {/* Windows Step 1 */}
              <div className="bg-blue-950/40 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl">
                <div className="w-10 h-10 rounded-2xl bg-white/10 text-white flex items-center justify-center font-extrabold text-sm border border-white/20">
                  01
                </div>
                <h3 className="text-lg font-bold text-white">Download & Unpack</h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Use our lookup console above to find your exact printer model. Download the official recommended OEM installer executable (.exe) to your Downloads folder.
                </p>
              </div>

              {/* Windows Step 2 */}
              <div className="bg-blue-950/40 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl">
                <div className="w-10 h-10 rounded-2xl bg-white/10 text-white flex items-center justify-center font-extrabold text-sm border border-white/20">
                  02
                </div>
                <h3 className="text-lg font-bold text-white">Disconnect USB Cable</h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Most modern installers require you to keep the USB cable unplugged until the setup wizard explicitly prompts you to connect your printer hardware.
                </p>
              </div>

              {/* Windows Step 3 */}
              <div className="bg-blue-950/40 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl">
                <div className="w-10 h-10 rounded-2xl bg-white/10 text-white flex items-center justify-center font-extrabold text-sm border border-white/20">
                  03
                </div>
                <h3 className="text-lg font-bold text-white">Complete Wizard & Test</h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Run the installer as Administrator, follow the on-screen prompts to match your Wi-Fi or USB port, and print a test page to verify successful configuration.
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Mac Step 1 */}
              <div className="bg-blue-950/40 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl">
                <div className="w-10 h-10 rounded-2xl bg-white/10 text-white flex items-center justify-center font-extrabold text-sm border border-white/20">
                  01
                </div>
                <h3 className="text-lg font-bold text-white">Apple Software Update</h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  On macOS, most certified printer software packages are managed directly via built-in system software updates or AirPrint drivers without complex executables.
                </p>
              </div>

              {/* Mac Step 2 */}
              <div className="bg-blue-950/40 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl">
                <div className="w-10 h-10 rounded-2xl bg-white/10 text-white flex items-center justify-center font-extrabold text-sm border border-white/20">
                  02
                </div>
                <h3 className="text-lg font-bold text-white">Add Printer in Settings</h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Navigate to <strong className="text-white">System Settings &gt; Printers & Scanners</strong>, click "Add Printer or Scanner", and select your local network device.
                </p>
              </div>

              {/* Mac Step 3 */}
              <div className="bg-blue-950/40 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl">
                <div className="w-10 h-10 rounded-2xl bg-white/10 text-white flex items-center justify-center font-extrabold text-sm border border-white/20">
                  03
                </div>
                <h3 className="text-lg font-bold text-white">Use AirPrint or Driver</h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Ensure the "Use" dropdown defaults to AirPrint or the specific manufacturer driver package downloaded from our verified portal index.
                </p>
              </div>
            </>
          )}

        </div>

      </div>
    </section>
  );
}