import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Project not found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-bright transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-32 pb-20">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6">
          {/* Back button */}
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-accent-bright transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>

          {/* Hero banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`relative h-56 md:h-72 rounded-3xl bg-gradient-to-br ${project.gradient} overflow-hidden mb-8`}
          >
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-3xl glass flex items-center justify-center mb-4">
                <Icon className="w-10 h-10 text-accent" />
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold gradient-text text-center px-4">
                {project.title}
              </h1>
              <p className="text-sm text-[var(--text-muted)] mt-2">{project.category}</p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-10"
          >
            <h2 className="font-display text-xl font-semibold mb-4">Overview</h2>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed">
              {project.longDescription}
            </p>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10"
          >
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-surface border border-border text-sm text-[var(--text-muted)] hover:border-accent/30 hover:text-accent-bright transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-10"
          >
            <h2 className="font-display text-xl font-semibold mb-5">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 p-4 rounded-xl bg-surface/50 border border-border hover:border-accent/30 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--text-muted)]">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pages / API endpoints */}
          {project.pages && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-10"
            >
              <h2 className="font-display text-xl font-semibold mb-5 flex items-center gap-2">
                <Layers className="w-5 h-5 text-accent" />
                {project.slug === 'blog-web-application' ? 'API Endpoints' : 'Pages & Components'}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.pages.map((page) => (
                  <span
                    key={page}
                    className="px-3 py-1.5 rounded-lg bg-surface border border-border text-sm text-[var(--text-muted)]"
                  >
                    {page}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-10"
          >
            <h2 className="font-display text-xl font-semibold mb-5">Tech Stack</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(project.techStack).map(([category, techs]) => (
                <div key={category}>
                  <h4 className="font-display text-sm font-semibold text-accent-bright mb-3 uppercase tracking-wider">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-surface border border-border text-sm text-[var(--text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 pt-8 border-t border-border"
          >
            {/* <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass text-[var(--text)] font-medium hover:border-accent/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Github className="w-5 h-5" />
              View Source
            </a> */}
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                project.hasLiveDemo
                  ? 'bg-accent text-bg hover:bg-accent-bright hover:-translate-y-0.5'
                  : 'bg-surface/50 text-[var(--text-muted)]/40 border border-border/50 cursor-not-allowed pointer-events-none opacity-50'
              }`}
              aria-disabled={!project.hasLiveDemo}
            >
              <ExternalLink className="w-5 h-5" />
              {project.hasLiveDemo ? 'Live Demo' : 'Demo Not Available'}
            </a>
          </motion.div>
        </div>
      </main>
    </>
  );
}
