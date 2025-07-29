import { Link } from "react-scroll";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-2">
        <span className="font-bold text-lg">Ola Persson Orator</span>
        <div className="flex gap-4">
          <Link to="hero" smooth duration={500} className="cursor-pointer hover:text-blue-600">Start</Link>
          <Link to="about" smooth duration={500} className="cursor-pointer hover:text-blue-600">Om mig</Link>
          <Link to="projects" smooth duration={500} className="cursor-pointer hover:text-blue-600">Projekt</Link>
          <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-blue-600">Kontakt</Link>
          <a href="/cv" className="hover:text-blue-600">CV</a>
        </div>
      </nav>
    </header>
  );
}