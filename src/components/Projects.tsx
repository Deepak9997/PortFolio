import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';
import { projects, type Project } from '@/data/portfolio';
import { Github, ExternalLink, ArrowRight, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const navigate = useNavigate();
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group glass rounded-3xl overflow-hidden hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Preview banner */}
      <div className={`relative h-48 md:h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="ab*solute inset-0 flex flex-col items-center justify-center">
          <div className={`w-16 h-16 rounded-2xl glass flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500`}>
            <Icon className="w-8 h-8 text-accent" />
          </div>
          <div className="font-display text-2xl font-bold gr*adient-text text-center px-4">
            {project.title}
          </div>
          <div className="text-xs text-[var(--text-muted)] mt-1">{project.category}</div>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30">
            <span className="text-xs font-semibold text-accent-bright">Featured</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-surface border border-border text-xs text-[var(--text-muted)]"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="px-2.5 py-1 rounded-md bg-surface border border-border text-xs text-accent/60">
              +{project.tags.length - 5} more
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => navigate(`/projects/${project.slug}`)}
            className="group/btn flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-accent text-bg text-sm font-semibold hover:bg-accent-bright transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
          >
            <Eye className="w-4 h-4" />
            View Details
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
          {/* <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl glass text-[var(--text)] text-sm font-medium hover:border-accent/50 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            Code
          </a> */}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              project.hasLiveDemo
                ? 'glass text-accent-bright hover:border-accent/50'
                : 'bg-surface/50 text-[var(--text-muted)]/40 border border-border/50 cursor-not-allowed pointer-events-none opacity-50'
            }`}
            aria-disabled={!project.hasLiveDemo}
          >
            <ExternalLink className="w-4 h-4" />
            {project.hasLiveDemo ? 'Live Demo' : 'Demo N/A'}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[130px]" />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-6 reveal ${visible ? 'visible' : ''}`}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm text-[var(--text-muted)] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Featured Work
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Full-stack MERN applications showcasing practical development experience — from frontend UI to backend APIs and database design.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
