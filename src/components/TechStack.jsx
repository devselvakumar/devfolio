import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stack = [
  {
    name: 'HTML5',
    color: '#E34F26',
    bg: '#FFF4F0',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M5 3l2.5 24 8.5 2.5 8.5-2.5L27 3H5z" fill="#E34F26"/>
        <path d="M16 27.6V5H27l-2.1 20.5L16 27.6z" fill="#EF652A"/>
        <path d="M16 13.5H10.5l-.4-4H16V5.5H6.5l1 11.5H16v-3.5zM16 23.5l-4.8-1.3-.3-3.7H7.4l.6 6.5 8 2.3V23.5z" fill="white"/>
        <path d="M16 13.5v3.5h4.7l-.5 5-4.2 1.2V27l8-2.3.1-.7 1-11H16z" fill="#EBEBEB"/>
      </svg>
    ),
  },
  {
    name: 'CSS3',
    color: '#1572B6',
    bg: '#F0F7FF',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M5 3l2.5 24 8.5 2.5 8.5-2.5L27 3H5z" fill="#1572B6"/>
        <path d="M16 27.6V5H27l-2.1 20.5L16 27.6z" fill="#33A9DC"/>
        <path d="M16 13.5H10.5l.4 4H16v3.5H11.7l.3 3.7 4 1.1V27l-8-2.3-.6-6.5h3.6l.3 3.7 4.7 1.3V23.5M16 13.5v-3.5H6.5l.4 4H16v-0.5z" fill="white"/>
        <path d="M16 13.5h5.3l-.5 5.5-4.8 1.2v3.4l4.8-1.3.1-.7 1-11H16v3z" fill="#EBEBEB"/>
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    bg: '#FFFDE7',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
        <path d="M18.8 23.8c.5.8 1.1 1.4 2.3 1.4 1 0 1.6-.5 1.6-1.1 0-.8-.6-1-1.7-1.5l-.6-.2c-1.7-.7-2.8-1.6-2.8-3.5 0-1.7 1.3-3 3.4-3 1.5 0 2.5.5 3.2 1.8l-1.8 1.1c-.4-.7-.8-.9-1.4-.9-.6 0-1 .4-1 .9 0 .6.4.9 1.3 1.3l.6.2c2 .9 3.1 1.7 3.1 3.7 0 2.1-1.6 3.2-3.8 3.2-2.1 0-3.5-1-4.2-2.3l1.8-1.1zM10.6 24c.4.7.7 1.2 1.5 1.2.8 0 1.2-.3 1.2-1.5v-8h2.2v8.1c0 2.5-1.5 3.7-3.6 3.7-1.9 0-3-1-3.6-2.2L10.6 24z" fill="#323330"/>
      </svg>
    ),
  },
  {
    name: 'React',
    color: '#61DAFB',
    bg: '#F0FDFF',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="16" cy="16" r="3" fill="#61DAFB"/>
        <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
        <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
        <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    color: '#339933',
    bg: '#F0FDF4',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M16 3L4 9.5v13L16 29l12-6.5v-13L16 3z" fill="#339933"/>
        <path d="M16 7.5L8 12v8l8 4.5 8-4.5v-8L16 7.5z" fill="#6CC644"/>
        <text x="10" y="20" fill="white" fontSize="8" fontWeight="bold" fontFamily="monospace">JS</text>
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    color: '#47A248',
    bg: '#F0FDF4',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M16 3C12 3 8 8.5 8 14c0 4.5 2.5 8 6 9.5V29h4v-5.5C21.5 22 24 18.5 24 14c0-5.5-4-11-8-11z" fill="#47A248"/>
        <path d="M15 22v7h2v-7c-0.3.1-.7.1-1 .1-.4 0-.7 0-1-.1z" fill="#B8C4BB"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    color: '#181717',
    bg: '#F6F8FA',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path fillRule="evenodd" clipRule="evenodd" d="M16 3C9 3 3 9 3 16.2c0 5.8 3.8 10.8 9 12.5.7.1.9-.3.9-.6V26c-3.8.8-4.6-1.8-4.6-1.8-.6-1.6-1.5-2-1.5-2-1.2-.8.1-.8.1-.8 1.4.1 2.1 1.4 2.1 1.4 1.2 2.1 3.2 1.5 4 1.1.1-.9.5-1.5.9-1.8-3.1-.3-6.3-1.5-6.3-6.8 0-1.5.5-2.7 1.4-3.7-.1-.4-.6-1.7.1-3.6 0 0 1.1-.4 3.7 1.4 1.1-.3 2.2-.4 3.4-.4 1.1 0 2.3.2 3.4.4 2.6-1.8 3.7-1.4 3.7-1.4.7 1.9.3 3.2.1 3.6.9 1 1.4 2.2 1.4 3.7 0 5.3-3.2 6.5-6.3 6.8.5.4.9 1.2.9 2.5v3.7c0 .3.2.7.9.6 5.2-1.7 9-6.7 9-12.5C29 9 23 3 16 3z" fill="#181717"/>
      </svg>
    ),
  },
  {
    name: 'Figma',
    color: '#F24E1E',
    bg: '#FFF4F1',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect x="8" y="3" width="8" height="8" rx="4" fill="#F24E1E"/>
        <rect x="16" y="3" width="8" height="8" rx="4" fill="#FF7262"/>
        <rect x="8" y="11" width="8" height="8" rx="4" fill="#A259FF"/>
        <rect x="8" y="19" width="8" height="8" rx="4" fill="#0ACF83"/>
        <circle cx="20" cy="16" r="4" fill="#1ABCFE"/>
      </svg>
    ),
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="stack" ref={ref} className="py-28 md:py-36 bg-white">
      <div className="section-padding max-w-screen-xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <span className="tag mb-3 inline-block">Technologies</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="section-title">
              Tools &amp;<br />
              <span className="text-gradient">Technologies</span>
            </h2>
            <p className="font-body text-base text-gray-500 max-w-sm mb-2 leading-relaxed">
              Tools and technologies I use to build modern digital products from design to deployment.
            </p>
          </div>
        </motion.div>

        {/* Icon grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {stack.map(({ name, color, bg, svg }, i) => (
            <motion.div
              key={name}
              data-hover
              className="group card-hover flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl border border-gray-100 bg-white hover:border-transparent cursor-none"
              style={{ '--tech-color': color }}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ scale: 1.04 }}
            >
              {/* Icon container */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                style={{ background: bg }}
              >
                {svg}
              </div>

              {/* Name */}
              <span className="font-sans font-bold text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                {name}
              </span>

              {/* Accent underline */}
              <div
                className="h-0.5 w-0 group-hover:w-8 transition-all duration-300 rounded-full"
                style={{ background: color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Currently learning strip */}
        <motion.div
          className="mt-10 p-5 rounded-2xl bg-[#F7F7FA] border border-gray-100 flex flex-col sm:flex-row sm:items-center gap-3"
          variants={fadeUp}
          custom={9}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <span className="font-mono text-xs text-gray-400 uppercase tracking-widest flex-shrink-0">
            Currently Learning
          </span>
          <div className="flex flex-wrap gap-2">
            {['TypeScript', 'Next.js', 'Tailwind CSS', 'PostgreSQL'].map((item) => (
              <span key={item} className="tag">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mr-1.5 animate-pulse" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
