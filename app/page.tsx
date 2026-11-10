export default function Home() {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL || "Not configured (dummy fallback)";
  const hasServiceRoleKey = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-12 text-slate-100 flex items-center justify-center">
      <div className="w-full max-w-3xl space-y-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-10 shadow-2xl backdrop-blur-xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Deployment Flow Active
            </div>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              CanteenX Test Deploy
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Next.js 16 • Tailwind CSS • Supabase Env Verification
            </p>
          </div>
          <div className="rounded-xl bg-slate-800/80 p-3 text-center border border-slate-700">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
              Platform
            </span>
            <span className="text-base font-bold text-white">Vercel Ready</span>
          </div>
        </div>

        {/* Verification Checklist */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">Verification Status</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4">
              <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 font-bold">✓</div>
              <div>
                <p className="text-sm font-semibold text-slate-200">Next.js App Router</p>
                <p className="text-xs text-slate-400">Initialized & Turbo configured</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4">
              <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 font-bold">✓</div>
              <div>
                <p className="text-sm font-semibold text-slate-200">Tailwind CSS</p>
                <p className="text-xs text-slate-400">Styling responsive on all devices</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4">
              <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 font-bold">✓</div>
              <div>
                <p className="text-sm font-semibold text-slate-200">Git Repository</p>
                <p className="text-xs text-slate-400">Main branch ready for remote</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4">
              <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 font-bold">✓</div>
              <div>
                <p className="text-sm font-semibold text-slate-200">Env Configuration</p>
                <p className="text-xs text-slate-400">.env.example template configured</p>
              </div>
            </div>
          </div>
        </div>

        {/* Environment Variables Card */}
        <div className="rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-indigo-300">
              Supabase Environment Variables Check
            </h3>
            <span className="rounded bg-indigo-500/20 px-2 py-0.5 text-xs text-indigo-300 font-mono">
              Runtime
            </span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 rounded-lg bg-slate-950/70 p-3 border border-slate-800">
              <span className="text-slate-400">NEXT_PUBLIC_SUPABASE_URL</span>
              <span className="text-emerald-400 break-all">{supabaseUrl}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 rounded-lg bg-slate-950/70 p-3 border border-slate-800">
              <span className="text-slate-400">SUPABASE_SERVICE_ROLE_KEY</span>
              <span className={hasServiceRoleKey ? "text-emerald-400" : "text-amber-400"}>
                {hasServiceRoleKey ? "Configured (Hidden for Security)" : "Not Detected in Env"}
              </span>
            </div>
          </div>
        </div>

        {/* Next Steps Guide */}
        <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-5 space-y-2">
          <p className="text-sm font-medium text-slate-300">
            Agar aap mobile ya browser par yeh screen dekh rahe hain to aapka Vercel deployment 100% verified hai!
          </p>
          <p className="text-xs text-slate-500">
            Actual hackathon build day par bas real Supabase URL aur keys update karni hongi.
          </p>
        </div>
      </div>
    </main>
  );
}
