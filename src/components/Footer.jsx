import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="sticky bottom-0 z-50 bg-white/90 backdrop-blur shadow-inner">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-2">
        <span className="text-sm text-gray-500">© {new Date().getFullYear()} Ola Persson</span>
        <div className="flex gap-4">
        <div className="flex justify-center gap-6 mt-2 text-gray-700 dark:text-gray-300 text-xl">
          <a href="mailto:drumpert@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://github.com/Drumpe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/ola-persson-orator-865066154/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
}