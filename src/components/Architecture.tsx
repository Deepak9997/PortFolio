import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';
import { architectureFlow, supportingTech } from '@/data/portfolio';
import { ArrowDown } from 'lucide-react';

export default function Architecture() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />

      <div ref={ref} className={`relative max-w-4xl mx-auto px-6 reveal ${visible ? 'visible' : ''}`}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm text-[var(--text-muted)] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            How I Build
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Architecture</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            A visual flow of how I architect full-stack MERN applications — from user interaction to database.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="flex flex-col items-center gap-2">
          {architectureFlow.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="w-full flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group w-full max-w-md glass rounded-2xl p-5 flex items-center gap-4 hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-base">{step.label}</div>
                    <div className="text-sm text-[var(--text-muted)]">{step.description}</div>
                  </div>
                  <div className="ml-auto text-xs font-mono text-accent/40 hidden sm:block">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </motion.div>
                {index < architectureFlow.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
                  >
                    <ArrowDown className="w-6 h-6 text-accent/40 my-1 animate-pulse" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Supporting tech */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <div className="text-center text-sm text-[var(--text-muted)] uppercase tracking-wider mb-5">
            Supporting Technologies
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {supportingTech.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-[var(--text-muted)]">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
