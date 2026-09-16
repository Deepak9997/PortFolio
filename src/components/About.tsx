import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';
import { profile } from '@/data/portfolio';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Responsive frontend development',
  'React component architecture',
  'REST API integration with Axios',
  'Authentication and authorization (JWT)',
  'MongoDB database management with Mongoose',
  'Backend development using Node.js and Express',
  'File uploads with Multer',
  'CRUD operations and API integration',
  'Git/GitHub version control',
  'Deployment and debugging',
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div ref={ref} className={`relative max-w-6xl mx-auto px-6 reveal ${visible ? 'visible' : ''}`}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square max-w-md mx-auto"
            >
              {/* Code window mockup */}
              <div className="absolute inset-0 glass rounded-3xl p-6 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <div className="w-3 h-3 rounded-full bg-green-400/70" />
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div className="text-[var(--text-muted)]">
                    <span className="text-accent">const</span> developer = {'{'}
                  </div>
                  <div className="pl-4 text-[var(--text-muted)]">
                    name: <span className="text-emerald-400">'Deepak Sharma'</span>,
                  </div>
                  <div className="pl-4 text-[var(--text-muted)]">
                    stack: <span className="text-emerald-400">'MERN'</span>,
                  </div>
                  <div className="pl-4 text-[var(--text-muted)]">
                    focus: <span className="text-emerald-400">'Full-Stack'</span>,
                  </div>
                  <div className="pl-4 text-[var(--text-muted)]">
                    passion: <span className="text-emerald-400">'Clean Code'</span>,
                  </div>
                  <div className="pl-4 text-[var(--text-muted)]">
                    location: <span className="text-emerald-400">'India'</span>,
                  </div>
                  <div className="text-[var(--text-muted)]">
                    {'}'};
                  </div>
                  <div className="pt-2 text-[var(--text-muted)]">
                    <span className="text-accent">developer</span>.build(){' '}
                    <span className="inline-block w-2 h-4 bg-accent animate-blink align-middle" />
                  </div>
                </div>
              </div>

              {/* Floating accent shapes */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/20 to-emerald-500/10 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/15 to-accent/10 blur-xl" />
            </motion.div>
          </div>

          {/* Right: content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm text-[var(--text-muted)] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              About Me
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Turning ideas into <span className="gradient-text">production-ready</span> web apps
            </h2>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
              {profile.summary}
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--text-muted)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
