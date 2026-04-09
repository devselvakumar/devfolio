import { motion } from 'framer-motion'
import { ArrowUp, Instagram, Linkedin, Github, Mail } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Tools', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/devselvakumar', label: 'GitHub' },
  { icon: Mail, href: 'mailto:tempselvakumar@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0A0A0F] text-white">
      {/* Big CTA section */}
      <div className="section-padding max-w-screen-xl mx-auto pt-24 pb-16 border-b border-white/5">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">Open for work</p>
            <h2
              className="font-sans font-bold leading-[1.05] tracking-tighter text-white"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Let's build something
              <br />
              <span style={{ color: '#60A5FA' }}>extraordinary</span>
              <span className="text-accent">.</span>
            </h2>
          </div>
          <motion.button
            onClick={() => scrollTo('#contact')}
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full font-sans font-semibold text-sm hover:bg-white hover:text-gray-900 transition-all duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Start a Project
            <ArrowUp className="rotate-45" size={14} />
          </motion.button>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="section-padding max-w-screen-xl mx-auto py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo + copy */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-white font-sans font-bold text-xs">S</span>
              </div>
              <span className="font-sans font-bold text-base tracking-tight">
                Selvakumar<span className="text-accent">.</span>
              </span>
            </div>
            <p className="font-body text-xs text-gray-500 max-w-xs leading-relaxed">
              Building modern digital experiences.
            </p>
            <p className="font-mono text-[10px] text-gray-600 mt-3">
              &copy; {new Date().getFullYear()} Selvakumar M — All rights reserved.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="font-body text-sm text-gray-500 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Socials + Back to top */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
            <motion.button
              onClick={scrollTop}
              className="ml-2 w-9 h-9 rounded-full bg-accent flex items-center justify-center hover:bg-accent-light transition-colors hover:shadow-lg hover:shadow-blue-900/50"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Back to top"
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
