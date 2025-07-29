export function Projects() {
  const projects = [
    {
      title: "Slotsify",
      description: "React + Supabase slotsmaskin med serverstyrd RNG",
      tech: ["React", "Supabase", "Vite"],
      link: "https://slotsify.netlify.app"
    },
    // Lägg till fler projekt här
  ];

  return (
    <section className="py-16 px-6 bg-gray-100" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center">Projekt</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="mb-2">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, j) => (
                <span key={j} className="bg-gray-200 px-2 py-1 rounded text-sm">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.link}
              className="text-green-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visa projekt
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}