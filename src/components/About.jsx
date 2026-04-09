import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Monitor, Palette, Search, ArrowRight } from 'lucide-react'

const skills = [
  { icon: Monitor, title: 'Web Development', desc: 'Frontend & Backend — from pixel-perfect UIs to robust server-side logic.' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Clean, intuitive designs that convert visitors into customers.' },
  { icon: Search, title: 'SEO Optimization', desc: 'Visibility strategies that drive organic growth and traffic.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-28 md:py-36 bg-white">
      <div className="section-padding max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <span className="tag mb-3 inline-block">About Me</span>
            <h2 className="section-title">
              Developer{' '}
              <span className="text-gradient">with</span>
              <br />
              Purpose
            </h2>
          </motion.div>

          <motion.p
            className="font-body text-base text-gray-500 max-w-md leading-relaxed md:text-right"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            Passionate web developer focused on building modern, responsive, and user-friendly
            websites. Focused on performance, usability, and clean code.
          </motion.p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left: illustration / identity block */}
          <motion.div
            className="relative"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100 p-10 border border-gray-100">
              {/* Large name initial */}
              <div
                className="absolute top-0 right-0 font-sans font-bold text-[140px] leading-none text-blue-100 select-none pointer-events-none"
                style={{ lineHeight: 1, top: '-10px', right: '-10px' }}
              >
                S
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                  <span className="font-sans font-bold text-white text-2xl">SM</span>
                </div>
                <h3 className="font-sans font-bold text-2xl text-gray-900 mb-2">Selvakumar M</h3>
                <p className="font-body text-sm text-gray-500 mb-6">Web Developer — Coimbatore, Tamilnadu</p>

                <div className="flex flex-col gap-3">
                  {[
                    { label: 'Experience', value: '1+ Year Hands-on' },
                    { label: 'Focus', value: 'Modern Web Apps' },
                    { label: 'Status', value: 'Open to Projects' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
                      <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">{item.label}</span>
                      <span className="font-body text-sm font-medium text-gray-800">{item.value}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-6 flex items-center gap-2 text-accent font-body font-semibold text-sm group"
                  whileHover={{ x: 4 }}
                >
                  Let's build together
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right: description */}
          <div>
            <motion.p
              className="font-body text-lg text-gray-600 leading-relaxed mb-8"
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              I'm a self-driven web developer with a{' '}
              <span className="font-semibold text-gray-900">growing client base</span> and an
              eye for clean, purposeful design. My work bridges the gap between beautiful
              aesthetics and technical execution.
            </motion.p>

            <motion.p
              className="font-body text-base text-gray-500 leading-relaxed mb-10"
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              With over a year of dedicated learning and hands-on practice, I've built
              responsive websites, optimized sites for search engines, and designed intuitive
              UI/UX experiences — always keeping the end user in mind.
            </motion.p>

            {/* Progress bars */}
            {[
              { label: 'Frontend Development', pct: 85 },
              { label: 'UI/UX Design', pct: 75 },
              { label: 'SEO Optimization', pct: 70 },
            ].map((skill, i) => (
              <motion.div
                key={skill.label}
                className="mb-5"
                variants={fadeUp}
                custom={4 + i}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                <div className="flex justify-between mb-1.5">
                  <span className="font-body text-sm font-medium text-gray-700">{skill.label}</span>
                  <span className="font-mono text-xs text-gray-400">{skill.pct}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent to-accent-glow rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.pct}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="card-hover p-7 rounded-2xl border border-gray-100 bg-white hover:border-blue-100 group"
              variants={fadeUp}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
                <Icon size={18} className="text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-sans font-bold text-base text-gray-900 mb-2">{title}</h3>
              <p className="font-body text-sm text-gray-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
