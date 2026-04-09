import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react'

const achievements = [
  {
    title: 'Legacy Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2026',
    desc: 'Mastered HTML5 semantics, CSS layouts, flexbox, grid, and accessibility standards for building fully responsive, cross-device websites.',
    skills: ['HTML5', 'CSS3', 'Responsive Design', 'Accessibility'],
    link: 'https://www.freecodecamp.org/certification/selvakumarm/responsive-web-design',
    color: 'from-blue-50 to-indigo-50',
    border: 'border-blue-100',
  },
  {
    title: 'HubSpot Academy SEO',
    issuer: 'HubSpot Academy',
    year: '2024',
    desc: 'Learned the fundamentals of search engine optimization including keyword research, on-page SEO, link building, and content strategy.',
    skills: ['SEO Strategy', 'Keyword Research', 'Content Marketing', 'Analytics'],
    link: 'https://academy.hubspot.com',
    color: 'from-amber-50 to-yellow-50',
    border: 'border-amber-100',
  },
  {
    title: 'Figma UI/UX',
    issuer: 'Self-paced Learning',
    year: '2025',
    desc: 'Developed comprehensive UI/UX design skills using Figma — creating wireframes, prototypes, design systems, and user-centered interfaces.',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems'],
    link: '#',
    color: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-100',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" ref={ref} className="py-28 md:py-36 bg-[#F7F7FA]">
      <div className="section-padding max-w-screen-xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <span className="tag mb-3 inline-block">Recognition</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="section-title">
              Achievements<span className="text-accent">.</span>
            </h2>
            <p className="font-body text-base text-gray-500 max-w-sm mb-2 leading-relaxed md:text-center">
              Certifications and milestones earned through dedicated learning and practice.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map(({ title, issuer, year, desc, skills, link, color, border }, i) => (
            <motion.div
              key={title}
              className={`card-hover relative rounded-2xl bg-gradient-to-br ${color} border ${border} p-7 overflow-hidden group`}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {/* Big decorative award icon */}
              <div className="absolute top-4 right-4 opacity-[0.07] pointer-events-none">
                <Award size={80} />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                  <Award size={18} className="text-accent" />
                </div>

                {/* Year badge */}
                <span className="font-mono text-xs text-gray-400 tracking-wider uppercase">{year}</span>

                <h3 className="font-sans font-bold text-lg text-gray-900 mt-1.5 mb-1 leading-snug">
                  {title}
                </h3>

                <p className="font-body text-xs font-medium text-accent mb-4">{issuer}</p>

                <p className="font-body text-sm text-gray-500 leading-relaxed mb-5">{desc}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {skills.map((s) => (
                    <span key={s} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/70 border border-white text-xs font-mono text-gray-600">
                      <CheckCircle2 size={9} className="text-emerald-400" />
                      {s}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-accent hover:underline underline-offset-2"
                >
                  View Credential
                  <ExternalLink size={11} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee strip */}
        <motion.div
          className="mt-16 overflow-hidden border-y border-gray-200 py-4"
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, idx) => (
              <span key={idx} className="flex items-center gap-8 mr-8">
                {['Responsive Design', 'JavaScript', 'React.js', 'Node.js', 'MongoDB', 'SEO', 'UI/UX', 'Clean Code', 'Performance'].map((item) => (
                  <span key={item} className="font-mono text-sm text-gray-300 uppercase tracking-widest flex items-center gap-4">
                    {item}
                    <span className="text-accent/40 text-lg">·</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
