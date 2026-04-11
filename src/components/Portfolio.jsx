import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Globe, Code2, ShoppingCart } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'Desi Trails',
    category: 'Web Development',
    tag: 'Travel',
    desc: 'Modern responsive travel website for exploring tour packages and contacting for bookings. Built with clean layouts and intuitive navigation.',
    link: 'https://devselvakumar.github.io/desi-trails/',
    icon: Globe,
    color: 'bg-blue-600',
    accent: '#2563EB',
    light: '#EFF6FF',
    year: '2024',
    tech: ['HTML', 'CSS', 'JavaScript'],
    status: 'Live',
    image: 'https://image.thum.io/get/width/800/crop/600/https://devselvakumar.github.io/desi-trails/',
  },
  {
    id: 2,
    name: 'UrbanEats',
    category: 'UI/UX Design',
    tag: 'Food & Delivery',
    desc: 'A food delivery platform UI with smooth ordering flow, real-time tracking interface, and a bold visual system designed for conversion.',
    link: '#',
    icon: ShoppingCart,
    color: 'bg-orange-500',
    accent: '#F97316',
    light: '#FFF7ED',
    year: '2024',
    tech: ['React', 'Tailwind', 'Figma'],
    status: 'In Progress',
  },
  {
    id: 3,
    name: 'DevMetrics',
    category: 'Web Development',
    tag: 'SaaS Dashboard',
    desc: 'Developer analytics dashboard with clean data visualization, dark/light mode toggle, and real-time metric tracking for modern dev teams.',
    link: '#',
    icon: Code2,
    color: 'bg-violet-600',
    accent: '#7C3AED',
    light: '#F5F3FF',
    year: '2024',
    tech: ['React', 'Node.js', 'MongoDB'],
    status: 'Coming Soon',
  },
]

const categories = ['All', 'Web Development', 'UI/UX Design']

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="portfolio" ref={ref} className="py-28 md:py-36 bg-white">
      <div className="section-padding max-w-screen-xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <span className="tag mb-3 inline-block">Selected Work</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="section-title">
              Featured<br />
              <span className="text-gradient">Projects</span>
            </h2>
            {/* Filter tabs */}
            <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap no-scrollbar pb-1 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-[11px] sm:text-xs font-mono font-medium transition-all duration-200 flex-shrink-0 ${
                    filter === cat
                      ? 'bg-accent text-white shadow-md shadow-blue-200'
                      : 'bg-gray-100 text-gray-500 hover:bg-blue-50 hover:text-accent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.id}
                  className="group relative rounded-2xl border border-gray-100 overflow-hidden bg-white card-hover"
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  {/* Card header / visual */}
                  <div
                    className="relative h-48 flex items-center justify-center overflow-hidden"
                    style={{ background: project.image ? '#000' : project.light }}
                  >
                    {project.image ? (
                      <>
                        <img 
                          src={project.image} 
                          alt={`${project.name} preview`} 
                          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent pointer-events-none" />
                      </>
                    ) : (
                      <>
                        {/* Grid pattern */}
                        <div
                          className="absolute inset-0 opacity-40"
                          style={{
                            backgroundImage: `linear-gradient(${project.accent}15 1px, transparent 1px),
                              linear-gradient(90deg, ${project.accent}15 1px, transparent 1px)`,
                            backgroundSize: '24px 24px',
                          }}
                        />
                        {/* Floating icon */}
                        <motion.div
                          className={`w-20 h-20 ${project.color} rounded-2xl shadow-xl flex items-center justify-center`}
                          animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <Icon size={32} className="text-white" />
                        </motion.div>
                      </>
                    )}

                    {/* Status badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium
                        ${project.status === 'Live'
                          ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                          : project.status === 'In Progress'
                          ? 'bg-amber-50 text-amber-600 border border-amber-200'
                          : 'bg-gray-50 text-gray-400 border border-gray-200'
                        }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          project.status === 'Live' ? 'bg-emerald-400 animate-pulse' :
                          project.status === 'In Progress' ? 'bg-amber-400' : 'bg-gray-300'
                        }`} />
                        {project.status}
                      </span>
                    </div>

                    {/* Year */}
                    <div className="absolute top-4 left-4">
                      <span className="font-mono text-xs text-gray-400">{project.year}</span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: project.accent }}>
                          {project.tag}
                        </span>
                        <h3 className="font-sans font-bold text-xl text-gray-900 mt-0.5">{project.name}</h3>
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent hover:bg-blue-50 transition-all duration-200 flex-shrink-0"
                        aria-label={`Visit ${project.name}`}
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    </div>

                    <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">
                      {project.desc}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-100 text-[11px] font-mono text-gray-500">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
                  />
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="font-body text-sm text-gray-400 mb-4">
            More projects coming soon — actively building
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-secondary inline-flex"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Start a Project Together
            <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
