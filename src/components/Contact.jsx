import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin, Github } from 'lucide-react'

const socials = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com', color: '#E1306C' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: '#0A66C2' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/devselvakumar', color: '#181717' },
]

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'tempselvakumar@gmail.com', href: 'mailto:tempselvakumar@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 7092284340', href: 'tel:+917092284340' },
  { icon: MapPin, label: 'Location', value: 'Coimbatore, Tamilnadu', href: null },
]

const WHATSAPP_NUMBER = '917092284340'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Selvakumar, I'd like to discuss a project with you!")

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, '_blank')
  }

  return (
    <section id="contact" ref={ref} className="py-20 md:py-28 bg-[#F7F7FA]">
      <div className="section-padding max-w-screen-xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <span className="tag mb-3 inline-block">Get In Touch</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="section-title">
              Let's Work<br />
              <span className="text-gradient">Together</span>
            </h2>
            <p className="font-body text-base text-gray-500 max-w-sm mb-2 leading-relaxed">
              Have a project in mind? Let's discuss it and bring your ideas to life.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: contact info + socials */}
          <div className="flex flex-col gap-8">
            {/* Contact cards */}
            <motion.div
              className="flex flex-col gap-4"
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 group">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        className="font-body text-sm font-medium text-gray-700 hover:text-accent transition-colors break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="font-body text-sm font-medium text-gray-700 break-all">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex gap-3 flex-wrap">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md font-body text-xs sm:text-sm font-medium text-gray-600 transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Icon size={15} style={{ color }} />
                    {label}
                  </motion.a>
                ))}
              </div>
            </motion.div>


          </div>

          {/* Right: WhatsApp CTA + Quote */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6"
          >
            {/* WhatsApp card */}
            <div className="w-full bg-white rounded-2xl border border-gray-100 p-10 shadow-sm flex flex-col items-center text-center gap-6">
              {/* WhatsApp icon */}
              <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: '#25D366' }}>
                <MessageCircle size={36} color="white" fill="white" />
              </div>

              <div>
                <h3 className="font-sans font-bold text-2xl text-gray-900 mb-2">Chat on WhatsApp</h3>
                <p className="font-body text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">
                  Ready to start your project? Send me a message on WhatsApp and I'll get back to you quickly.
                </p>
              </div>

              <motion.button
                onClick={openWhatsApp}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-sans font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ background: '#25D366', boxShadow: '0 0 0 0 rgba(37,211,102,0.4)' }}
                whileHover={{ scale: 1.06, boxShadow: '0 0 24px 6px rgba(37,211,102,0.35)' }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle size={20} />
                Message Me on WhatsApp
              </motion.button>

              <p className="font-body text-xs text-gray-300">Typically responds within a few hours</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
