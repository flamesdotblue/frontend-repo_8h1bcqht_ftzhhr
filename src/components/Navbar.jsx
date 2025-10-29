import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const NavLinks = ({ onClick }) => (
    <ul className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
      {links.map((l) => (
        <li key={l.href}>
          <a
            onClick={() => onClick && onClick()}
            href={l.href}
            className="text-sm md:text-base text-white/80 hover:text-white transition-colors"
          >
            {l.label}
          </a>
        </li>
      ))}
      <li>
        <a
          href="#contact"
          onClick={() => onClick && onClick()}
          className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm transition-colors"
        >
          Let’s Talk
        </a>
      </li>
    </ul>
  );

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-semibold text-white tracking-tight">MyPortfolio</a>

          <div className="hidden md:block">
            <NavLinks />
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-white/90 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <NavLinks onClick={() => setOpen(false)} />
          </div>
        )}
      </nav>
    </header>
  );
}
