import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';
import { resume, skillCategories, projects } from '@/data/portfolio';
import { Download, GraduationCap, Briefcase, Award, Target, Code2, CheckCircle2 } from 'lucide-react';
import resumePdf from '@/assets/Deepak_Sharma_Resume_.pdf';

export default function Resume() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="resume" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />

      <div ref={ref} className={`relative max-w-5xl mx-auto px-6 reveal ${visible ? 'visible' : ''}`}>
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm text-[var(--text-muted)] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Professional Resume
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto mb-8">
            A comprehensive overview of my education, experience, skills, and projects.
          </p>
          <a
            href={resumePdf}
            download="Deepak_Sharma_Resume_.pdf"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-bright transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            Download Resume
          </a>
        </div>

        {/* Resume content */}
        <div className="glass rounded-3xl p-6 md:p-10 space-y-10">
          {/* Career Objective */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-emerald-600 flex items-center justify-center">
                <Target className="w-5 h-5 text-bg" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-xl font-semibold">Career Objective</h3>
            </div>
            <p className="text-[var(--text-muted)] leading-relaxed pl-13">{resume.objective}</p>
          </motion.div>

          <div className="h-px bg-border" />

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-emerald-600 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-bg" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-xl font-semibold">Education</h3>
            </div>
            <div className="pl-13">
              <div className="font-display font-semibold text-lg">{resume.education.institution}</div>
              <div className="text-sm text-accent-bright mb-2">{resume.education.degree} · {resume.education.period}</div>
              <p className="text-[var(--text-muted)] leading-relaxed">{resume.education.description}</p>
            </div>
          </motion.div>

          <div className="h-px bg-border" />

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-bg" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-xl font-semibold">Experience</h3>
            </div>
            <div className="pl-13 space-y-8">
              {resume.experience.map((experience) => (
                <div key={`${experience.company}-${experience.role}`}>
                  <div className="font-display font-semibold text-lg">{experience.role}</div>
                  <div className="text-sm text-emerald-400 mb-3">{experience.company} · {experience.period}</div>
                  <p className="text-[var(--text-muted)] leading-relaxed mb-4">{experience.description}</p>
                  <div className="space-y-2">
                    {experience.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--text-muted)]">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="h-px bg-border" />

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-bg" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-xl font-semibold">Technical Skills</h3>
            </div>
            <div className="pl-13 grid sm:grid-cols-2 gap-4">
              {skillCategories.map((cat) => (
                <div key={cat.title}>
                  <div className="text-sm font-semibold text-accent-bright mb-2">{cat.title}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 rounded-md bg-surface border border-border text-xs text-[var(--text-muted)]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="h-px bg-border" />

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-bg" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-xl font-semibold">Projects</h3>
            </div>
            <div className="pl-13 space-y-3">
              {projects.map((project) => (
                <div key={project.slug} className="p-4 rounded-xl bg-surface/50 border border-border">
                  <div className="font-display font-semibold">{project.title}</div>
                  <div className="text-xs text-accent-bright mb-2">{project.category}</div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{project.shortDescription}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="h-px bg-border" />

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center">
                <Award className="w-5 h-5 text-bg" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-xl font-semibold">Certifications</h3>
            </div>
            <div className="pl-13 grid sm:grid-cols-2 gap-2">
              {resume.certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-[var(--text-muted)]">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
