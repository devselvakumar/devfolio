import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Monitor, Palette, Search, Layers, ArrowRight, Check } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    shortDesc: 'Full-stack websites built for speed.',
    desc: 'From landing pages to full-stack web applications — I build fast, scalable, and maintainable websites using modern technologies.',
    features: ['Responsive design', 'Performance optimized', 'SEO-ready structure', 'Clean codebase'],
    accentColor: '#2563EB',
    bgLight: '#EFF6FF',
    num: '01',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    shortDesc: 'Interfaces users love to use.',
    desc: 'Designing intuitive, visually refined interfaces that align with your brand and guide users toward meaningful interactions.',
    features: ['Wireframing & prototyping', 'Design systems', 'User-first approach', 'Figma deliverables'],
    accentColor: '#7C3AED',
    bgLight: '#F5F3FF',
    num: '02',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    shortDesc: 'Rank higher, grow organically.',
    desc: 'Strategic on-page and technical SEO implementation to boost your search visibility and drive consistent organic traffic.',
    features: ['On-page SEO', 'Performance audits', 'Schema markup', 'Core Web Vitals'],
    accentColor: '#059669',
    bgLight: '#ECFDF5',
    num: '03',
  },
  {
    icon: Layers,
    title: 'Website Redesign',
    shortDesc: 'Transform your existing site.',
    desc: 'Complete website redesign services — breathing new life into outdated websites with modern design, improved UX, and better performance.',
    features: ['Modern UI refresh', 'Improved user experience', 'Performance optimization', 'SEO-friendly structure'],
    accentColor: '#D97706',
    bgLight: '#FFFBEB',
    num: '04',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={ref} className="py-28 md:py-36 bg-[#F7F7FA]">
      <div className="section-padding max-w-screen-xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <span className="tag mb-3 inline-block">What I Offer</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="section-title">
              Services<br />
              <span className="text-gradient">& Solutions</span>
            </h2>
            <p className="font-body text-base text-gray-500 max-w-sm mb-2 leading-relaxed">
              Tailored digital services that help businesses grow and establish a strong online presence.
            </p>
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, shortDesc, desc, features, accentColor, bgLight, num }, i) => (
            <motion.div
              key={title}
              className="group card-hover p-8 rounded-2xl bg-white border border-gray-100 relative overflow-hidden hover:border-transparent"
              style={{ '--accent': accentColor }}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {/* Subtle glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 0% 0%, ${accentColor}08, transparent 60%)` }}
              />

              {/* Number */}
              <div
                className="absolute top-6 right-8 font-sans font-bold text-5xl leading-none pointer-events-none select-none opacity-[0.06]"
                style={{ color: accentColor }}
              >
                {num}
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ background: bgLight }}
                >
                  <Icon size={20} style={{ color: accentColor }} />
                </div>

                <h3 className="font-sans font-bold text-xl text-gray-900 mb-1">{title}</h3>
                <p className="font-mono text-xs mb-3" style={{ color: accentColor }}>{shortDesc}</p>
                <p className="font-body text-sm text-gray-500 leading-relaxed mb-5">{desc}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 font-body text-sm text-gray-600">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: bgLight }}
                      >
                        <Check size={9} style={{ color: accentColor }} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA link */}
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-1.5 text-xs font-body font-semibold group/link"
                  style={{ color: accentColor }}
                  whileHover={{ x: 3 }}
                >
                  Get Started
                  <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          className="mt-12 p-8 rounded-2xl bg-accent text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />
          <div className="relative">
            <h3 className="font-sans font-bold text-2xl mb-1">Ready to start your project?</h3>
            <p className="font-body text-sm text-blue-100">
              Let's discuss your requirements and build something great together.
            </p>
          </div>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative flex-shrink-0 px-6 py-3 bg-white text-accent font-sans font-bold text-sm rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Talk
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
