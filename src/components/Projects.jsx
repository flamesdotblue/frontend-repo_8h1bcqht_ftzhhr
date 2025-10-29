import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Product Gallery',
    description: 'A performant, accessible gallery with smooth transitions and micro-interactions.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '3D Landing Experiment',
    description: 'Hero section with Spline integration, layered gradients, and parallax composition.',
    tags: ['Spline', 'Three', 'Design'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Portfolio Revamp',
    description: 'A clean, responsive portfolio with themeable components and dark mode.',
    tags: ['Vite', 'Tailwind', 'Accessibility'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Featured Projects</h2>
            <p className="mt-2 text-white/70 max-w-2xl">A selection of interfaces and experiments focused on clarity, interaction, and speed.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-full ring-1 ring-white/20 px-4 py-2 text-sm text-white/80 hover:bg-white/10">Get in touch</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-white font-medium">{p.title}</h3>
                  <ExternalLink size={18} className="text-white/60 group-hover:text-white" />
                </div>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs text-white/70 bg-white/5 rounded-full px-2 py-1 ring-1 ring-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
