import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Code2, Globe, Layers } from 'lucide-react'

const floatingShapes = [
  { icon: Code2, x: '8%', y: '20%', delay: 0, size: 20, opacity: 0.12 },
  { icon: Globe, x: '88%', y: '15%', delay: 1.2, size: 24, opacity: 0.1 },
  { icon: Layers, x: '5%', y: '70%', delay: 0.5, size: 18, opacity: 0.12 },
  { icon: Code2, x: '92%', y: '65%', delay: 1.8, size: 16, opacity: 0.08 },
  { icon: Sparkles, x: '78%', y: '80%', delay: 0.8, size: 20, opacity: 0.1 },
  { icon: Globe, x: '18%', y: '85%', delay: 2, size: 18, opacity: 0.08 },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[100svh] md:min-h-screen flex flex-col justify-start md:justify-center overflow-hidden bg-[#FAFAFA]">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Floating icons */}
      {floatingShapes.map(({ icon: Icon, x, y, delay, size, opacity }, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 5 + i * 0.8,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon size={size} style={{ opacity }} className="text-accent" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="section-padding max-w-screen-xl mx-auto w-full pt-[3.5rem] md:pt-28 pb-6 md:pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-4 md:mb-6">
            <span className="tag">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" />
              Available for freelance work
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-sans font-bold leading-[1.05] tracking-tighter mb-4 md:mb-6 mt-0"
            style={{ fontSize: 'clamp(2rem, 8vw, 6.5rem)' }}
          >
            <span className="text-gray-900">Crafting</span>
            <br />
            <span className="text-gradient">Digital</span>
            <br />
            <span className="text-gray-900">Experiences</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="font-body text-lg md:text-xl text-gray-500 max-w-xl mb-3 leading-relaxed"
          >
            Hi, I'm{' '}
            <span className="font-semibold text-gray-800">Selvakumar M</span> — a Web
            Developer helping startups and brands build their online presence.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="font-body text-base text-gray-400 max-w-lg mb-6 md:mb-10 leading-relaxed"
          >
            Focused on performance, usability, and clean code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <motion.button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              View Works
              <ArrowDown size={14} className="rotate-[-45deg]" />
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Hire Me
            </motion.button>
          </motion.div>


        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-gray-400 hover:text-accent transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} />
      </motion.button>

      {/* Decorative right column */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[35%] pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(37,99,235,0.03) 50%, transparent 100%)',
          }}
        />
        {/* Vertical text */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 -rotate-90 flex items-center gap-4 opacity-20">
          <span className="font-mono text-xs tracking-[0.4em] text-gray-500 uppercase">
            Web Developer — Coimbatore
          </span>
        </div>
        {/* Circle decoration */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-dashed border-accent/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border border-accent/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-accent/5 flex items-center justify-center">
          <Code2 size={28} className="text-accent/40" />
        </div>
      </div>
    </section>
  )
}
