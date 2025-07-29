export function Projects() {
  const projects = [
    {
      title: "Slotsify",
      description: "Slotsify är ett webbspel byggt i React med Supabase som backend. Projektet utforskar serverstyrd slumpgenerering med fokus på säkerhet och rättvisa resultat. Jag ville undersöka hur man kan kombinera klient- och serverlogik för att skapa en användarvänlig men samtidigt robust upplevelse.",
      tech: ["React", "Supabase", "Vite"],
      link: "https://slotsify.netlify.app"
    },
    {
      title: "Munamii",
      description: "Munamii Cakery är en webbplats för ett fiktivt bageri, byggd med React och betallösning från Stripe. ",
      tech: ["React", "Vite", "Stripe", "Netlify"],
      link: "https://munamii.netlify.app"
    },
    {
      title: "Portfolio",
      description: "Min personliga portfolio, byggd med React och Tailwind CSS. Denna webbplats är en del av min resa som utvecklare och visar upp mina projekt och erfarenheter.",
      tech: ["React", "Tailwind CSS", "Vite"],
      link: "https://ola-persson.netlify.app"
    },
    
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