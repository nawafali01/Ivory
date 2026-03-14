import React, { useEffect, useRef, useState } from 'react'

const AnimatedNumber = ({ value, suffix = '', duration = 1000, className = '' }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const frame = useRef(null)
  const startTime = useRef(null)

  useEffect(() => {
    const start = () => {
      startTime.current = null
      const animate = (timestamp) => {
        if (!startTime.current) startTime.current = timestamp
        const progress = Math.min((timestamp - startTime.current) / duration, 1)
        setDisplayValue(Math.round(value * progress))
        if (progress < 1) {
          frame.current = requestAnimationFrame(animate)
        }
      }
      frame.current = requestAnimationFrame(animate)
    }
    start()
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [value, duration])

  return <span className={className}>{displayValue.toLocaleString()}{suffix}</span>
}

const StatCard = ({ value, suffix, label }) => (
  <div className="flex flex-col items-center gap-2 py-6 px-4">
    <p className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
      <AnimatedNumber value={value} suffix={suffix} duration={2000} />
    </p>
    <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">
      {label}
    </p>
  </div>
)

const StatsSection = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-5xl mx-auto py-10 overflow-hidden">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Impactful Numbers</h2>
          <p className="text-gray-500 mt-2 text-base md:text-lg">A quick snapshot of what we've delivered so far.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="border-b border-black/15 md:border-b-0 md:border-r border-black/15">
            <StatCard value={5} suffix="+" label="Years of Experience" />
          </div>
          <div className="border-b border-black/15 md:border-b-0 md:border-r border-black/15">
            <StatCard value={500} suffix="+" label="Projects Completed" />
          </div>
          <div>
            <StatCard value={100} suffix="%" label="Satisfaction" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsSection;