import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to improve contrast; keep interactive scene clickable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 pt-28 pb-20 grid md:grid-cols-12 items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="md:col-span-7"
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
            Building modern, playful web experiences
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Your Name</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Frontend engineer crafting responsive interfaces, clean animations, and interactive 3D moments.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:opacity-90 transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-full ring-1 ring-white/30 px-5 py-3 text-sm font-medium hover:bg-white/10 transition">Contact Me</a>
          </div>
        </motion.div>

        <motion.ul
          initial="hidden"
          animate="show"
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } } }}
          className="md:col-span-5 grid grid-cols-2 gap-3"
        >
          {["React", "Three/3D", "TypeScript", "Framer Motion"].map((skill) => (
            <motion.li key={skill} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="rounded-xl bg-white/5 backdrop-blur border border-white/10 p-4 text-sm">
              <span className="text-white/90">{skill}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
