import { useNavigate, useLocation } from 'react-router-dom';
import { Code2, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { navLinks } from '@/data/portfolio';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollTo = (href: string) => {
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socials = [
    { icon: Github, href: 'https://github.com/Deepak9997', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/deepak-bhardwaj99/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:bhardwajdeepak8750@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-border py-12 overflow-hidden z-10">
      <div className="absolute top-0 left-1/2 w-[400px] h-[200px] bg-accent/5 rounded-full blur-[100px] -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <button onClick={() => scrollTo('#home')} className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-5 h-5 text-bg" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-lg">
                Deepak<span className="text-accent">.</span>
              </span>
            </button>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xs">
              MERN Stack Developer building modern web applications with clean code and great UX.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-[var(--text)] mb-4 uppercase tracking-wider">
              Navigate
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-[var(--text-muted)] hover:text-accent-bright transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-semibold text-[var(--text)] mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-[var(--text-muted)] hover:text-accent hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} Deepak Sharma. Built with React, Tailwind CSS, and a passion for clean code.
          </p>
          <button
            onClick={() => scrollTo('#home')}
            className="group flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-accent-bright transition-colors"
          >
            Back to top
            <span className="w-8 h-8 rounded-lg glass flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
