import Link from 'next/link';
import { ArrowRight, Cable, CheckCircle2, CircleAlert, FileWarning, Printer, ShieldCheck, Wifi } from 'lucide-react';

const errorCodes = [
  {
    code: '0x0000011b',
    title: 'Windows printer connection error',
    text: 'Check the shared printer connection, confirm the host computer is reachable, and reinstall the correct manufacturer driver if the error continues.',
    icon: Printer,
  },
  {
    code: 'E-01',
    title: 'Printer startup error',
    text: 'Turn the printer off, disconnect the power for one minute, then reconnect it. Remove any paper obstruction before starting it again.',
    icon: CircleAlert,
  },
  {
    code: 'W-02',
    title: 'Wireless connection error',
    text: 'Reconnect the printer to the same Wi-Fi network as your computer. Avoid guest networks and verify the printer has a valid network address.',
    icon: Wifi,
  },
  {
    code: 'Driver unavailable',
    title: 'Missing or incompatible driver',
    text: 'Remove the old printer entry and download the latest driver for your exact model and operating system from the official manufacturer support page.',
    icon: ShieldCheck,
  },
  {
    code: 'Offline',
    title: 'Printer is not communicating',
    text: 'Make sure the printer is powered on and connected to the same network as your computer. Clear paused jobs, then remove and re-add the printer if it stays offline.',
    icon: Wifi,
  },
  {
    code: 'Paper Jam',
    title: 'Paper path is blocked',
    text: 'Cancel the print job, switch the printer off, and remove paper gently in the direction of the paper path. Check the rear access door and tray before restarting.',
    icon: FileWarning,
  },
  {
    code: 'Ink Low',
    title: 'Ink or toner supply is low',
    text: 'Check the displayed cartridge or toner level and print a test page before replacing anything. A low warning may appear before the supply is completely empty.',
    icon: Printer,
  },
  {
    code: 'Cartridge Error',
    title: 'Cartridge is not recognized',
    text: 'Remove and reseat the cartridge, then inspect the contacts for dust or packaging residue. Confirm that the cartridge series matches the exact printer model.',
    icon: CircleAlert,
  },
  {
    code: 'Epson 0x97',
    title: 'Epson hardware or communication warning',
    text: 'Power the printer down, disconnect USB and network cables, and restart it after one minute. If the code returns, use Epson support for model-specific service steps.',
    icon: CircleAlert,
  },
  {
    code: 'Canon 5100',
    title: 'Canon carriage movement error',
    text: 'Turn the printer off and check the carriage path for paper, tape, or another obstruction. Do not force the carriage; contact Canon support if it cannot move freely.',
    icon: Cable,
  },
  {
    code: 'Brother Drum',
    title: 'Drum unit needs attention',
    text: 'Remove and reseat the toner and drum assembly, then clean the corona wire using the printer’s slider if your model has one. Replace the drum only when its life has ended.',
    icon: Printer,
  },
  {
    code: 'Spooler',
    title: 'Windows print queue is stuck',
    text: 'Cancel pending jobs and restart the Windows Print Spooler service. Reinstall the official driver if the queue freezes again after a clean restart.',
    icon: CheckCircle2,
  },
];

export const metadata = {
  title: 'Printer Error Codes and Fixes | PrintCare Hub',
  description: 'Understand common printer error codes and follow practical steps to restore printing.',
};

export default function ErrorCodesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-800 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#1963ff]/15 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mt-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1963ff]/30 bg-[#1963ff]/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-400">
              <CircleAlert className="h-4 w-4" />
              Printer error-code library
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Understand the error. Get back to printing.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              A printer error code is a short message from the printer or computer that points to a blocked process, connection problem, supply issue, or hardware condition. Use the code to choose the right first check instead of guessing.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 sm:py-16">
        <div className="grid gap-5 rounded-3xl border border-blue-100 bg-blue-50/70 p-6 sm:grid-cols-3 sm:p-8">
          <div className="sm:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">How to read an error</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Start with the message, then check the simplest cause.</h2>
          </div>
          {[
            ['01', 'Record the exact code', 'Write down every letter, number, and symbol shown on the printer or computer.'],
            ['02', 'Identify the category', 'Decide whether it points to paper, ink, connection, driver, or hardware.'],
            ['03', 'Test after each change', 'Run a test page after one fix so you know which change solved the problem.'],
          ].map(([number, title, text]) => (
            <div key={number} className="border-t border-blue-200 pt-4">
              <span className="text-xs font-bold text-blue-700">{number}</span>
              <h3 className="mt-2 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Common messages</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Find the message closest to yours</h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
            Codes can differ by manufacturer and model. These entries explain the usual meaning and the safest first action; always use the manufacturer page for exact model instructions.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {errorCodes.map(({ code, title, text, icon: Icon }) => (
            <article key={code} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)] sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">{code}</span>
              </div>
              <h2 className="mt-5 text-xl font-bold tracking-tight">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4 border-t border-slate-200 pt-8">
          <Link href="/blog/fix-printer-offline" className="inline-flex items-center gap-2 rounded-xl bg-[#1963ff] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1554db]">
            Fix printer offline issues
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/blog" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
            Browse troubleshooting blogs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
