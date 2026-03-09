import React from 'react'
import { Link } from 'react-router-dom'

const NotFound404 = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex items-center justify-center px-6">
      <div className="relative max-w-xl w-full text-center">
        <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.45),_transparent_55%)] blur-3xl" />
        <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.35),_transparent_60%)] blur-3xl" />

        <div className="relative rounded-3xl border border-white/10 bg-white/5 px-10 py-14 shadow-xl backdrop-blur-xl">
          <h1 className="text-7xl font-extrabold tracking-tighter sm:text-8xl">404</h1>
          <p className="mt-4 text-xl font-semibold text-white/80">We couldn’t find that page.</p>
          <p className="mt-2 max-w-md mx-auto text-sm leading-relaxed text-white/60">
            It looks like the link is broken or the page has been moved. Let’s get you back on track.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-white/10 backdrop-blur transition hover:bg-white/15 hover:shadow-lg"
            >
              Go Home
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFound404
