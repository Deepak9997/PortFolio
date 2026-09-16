import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';
import { services } from '@/data/portfolio';

export default function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[130px]" />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-6 reveal ${visible ? 'visible' : ''}`}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm text-[var(--text-muted)] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            What I Offer
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            From responsive frontends to full-stack MERN applications, I provide end-to-end web development services.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group glass rounded-2xl p-6 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 cursor-default"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-bg" strokeWidth={2.5} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-accent-bright transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
