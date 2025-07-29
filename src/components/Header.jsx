import { Link } from "react-scroll";
import { Link as RRDLink, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const isCV = location.pathname.startsWith("/cv");
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-2">
        <span className="font-bold text-lg">Ola Persson Orator</span>
        <div className="flex gap-4">
          {isCV ? (
            <>
              <RRDLink to="/" className="cursor-pointer hover:text-blue-600">Start</RRDLink>
              <RRDLink to="/#about" className="cursor-pointer hover:text-blue-600">Om mig</RRDLink>
              <RRDLink to="/#projects" className="cursor-pointer hover:text-blue-600">Projekt</RRDLink>
              <RRDLink to="/#contact" className="cursor-pointer hover:text-blue-600">Kontakt</RRDLink>
              <span className="text-blue-600 font-semibold">CV</span>
            </>
          ) : (
            <>
              <Link to="hero" smooth duration={500} className="cursor-pointer hover:text-blue-600">Start</Link>
              <Link to="about" smooth duration={500} className="cursor-pointer hover:text-blue-600">Om mig</Link>
              <Link to="projects" smooth duration={500} className="cursor-pointer hover:text-blue-600">Projekt</Link>
              <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-blue-600">Kontakt</Link>
              <RRDLink to="/cv" className="cursor-pointer hover:text-blue-600">CV</RRDLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}