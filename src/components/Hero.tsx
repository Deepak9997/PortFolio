import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Code2, Server, Database, Layers } from 'lucide-react';
import { profile, techBadges } from '@/data/portfolio';
import resumePdf from '@/assets/Deepak_Sharma_Resume_.pdf';

const roles = profile.roles;

export default function Hero() {
  const [displayedRole, setDisplayedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayedRole(current.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayedRole(current.slice(0, charIndex));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setCharIndex(0);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[100px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/0 via-bg/0 to-bg" />

      {/* Floating icons */}
      <div className="absolute top-[20%] right-[10%] hidden lg:block animate-float" style={{ animationDelay: '0s' }}>
        <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center">
          <Code2 className="w-7 h-7 text-accent" />
        </div>
      </div>
      <div className="absolute top-[35%] left-[8%] hidden lg:block animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center">
          <Server className="w-7 h-7 text-emerald-400" />
        </div>
      </div>
      <div className="absolute bottom-[25%] right-[12%] hidden lg:block animate-float" style={{ animationDelay: '3s' }}>
        <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center">
          <Database className="w-7 h-7 text-cyan-400" />
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-medium text-[var(--text-muted)]">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={item} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          <span className="block text-[var(--text)]">Hi, I'm {profile.name}</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div variants={item} className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-6 h-[1.2em]">
          <span className="gradient-text">{displayedRole}</span>
          <span className="inline-block w-1 h-[0.8em] bg-accent ml-1 animate-blink align-middle" />
        </motion.div>

        {/* Headline */}
        <motion.p variants={item} className="font-display text-xl md:text-2xl font-semibold mb-4 max-w-3xl mx-auto">
          {profile.headline}
        </motion.p>

        {/* Subheading */}
        <motion.p variants={item} className="text-base md:text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
          {profile.subheading}
        </motion.p>

        {/* Tech badges */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {techBadges.map((badge) => (
            <span
              key={badge}
              className="px-3 py-1.5 rounded-lg glass text-sm font-medium text-[var(--text-muted)] hover:text-accent-bright hover:border-accent/40 transition-all duration-300"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollTo('#projects')}
            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-bright transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            View My Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href={resumePdf}
            download="Deepak_Sharma_Resume_.pdf"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl glass text-[var(--text)] font-semibold hover:border-accent/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            Download Resume
          </a>
          <button
            onClick={() => scrollTo('#contact')}
            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl glass text-[var(--text)] font-semibold hover:border-accent/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-4 hover:border-accent/30 transition-colors">
              <div className="font-display text-xl md:text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-accent animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
