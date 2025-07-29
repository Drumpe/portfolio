export function Footer() {
  return (
    <footer className="sticky bottom-0 z-50 bg-white/90 backdrop-blur shadow-inner">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-2">
        <span className="text-sm text-gray-500">© {new Date().getFullYear()} Ola Persson</span>
        <div className="flex gap-4">
          <a href="https://github.com/Drumpe" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-600">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ola-persson-orator-865066154/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}