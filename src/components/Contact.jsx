import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative bg-gradient-to-b from-black to-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold">Let’s build something great</h2>
          <p className="mt-2 text-white/70">Tell me a little about your project and timeline. I’ll reply within 24–48 hours.</p>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid gap-4 sm:grid-cols-2 bg-white/5 ring-1 ring-white/10 rounded-2xl p-6"
        >
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm text-white/80">Name</label>
            <input id="name" name="name" required className="w-full rounded-lg bg-black/40 ring-1 ring-white/10 px-4 py-3 outline-none focus:ring-white/30" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm text-white/80">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-lg bg-black/40 ring-1 ring-white/10 px-4 py-3 outline-none focus:ring-white/30" />
          </div>
          <div className="grid gap-2 sm:col-span-2">
            <label htmlFor="message" className="text-sm text-white/80">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full rounded-lg bg-black/40 ring-1 ring-white/10 px-4 py-3 outline-none focus:ring-white/30" />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between gap-4">
            <button type="submit" className="inline-flex rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition">Send Message</button>
            <span className="text-sm text-emerald-400/90">{status}</span>
          </div>
        </motion.form>

        <div className="mt-10 text-xs text-white/60">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
      </div>
    </section>
  );
}
