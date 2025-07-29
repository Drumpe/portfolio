import { Link as RSLink} from "react-scroll";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const isCV = location.pathname.startsWith("/cv");
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm bg-gradient-to-b from-gray-300 to-gray-100">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-2">
        <span className="font-bold text-lg">Ola Persson Orator</span>
        <div className="flex gap-4">
          {isCV ? (
            <>
              <Link to="/" className="cursor-pointer hover:text-blue-600">Start</Link>
              <Link to="/#about" className="cursor-pointer hover:text-blue-600">Om mig</Link>
              <Link to="/#projects" className="cursor-pointer hover:text-blue-600">Projekt</Link>
              <Link to="/#contact" className="cursor-pointer hover:text-blue-600">Kontakt</Link>
              <span className="text-blue-600 font-semibold">CV</span>
            </>
          ) : (
            <>
              <RSLink to="hero" smooth duration={1000} className="cursor-pointer hover:text-blue-600">Start</RSLink>
              <RSLink to="about" smooth duration={1000} className="cursor-pointer hover:text-blue-600">Om mig</RSLink>
              <RSLink to="projects" smooth duration={1000} className="cursor-pointer hover:text-blue-600">Projekt</RSLink>
              <RSLink to="contact" smooth duration={1000} className="cursor-pointer hover:text-blue-600">Kontakt</RSLink>
              <Link to="/cv" className="cursor-pointer hover:text-blue-600">CV</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}