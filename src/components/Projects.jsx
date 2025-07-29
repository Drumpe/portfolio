import { image, title } from "framer-motion/client";

export function Projects() {
  const projects = [
    {
      title: "Slotsify",
      description: "Slotsify är ett webbspel byggt i React med Supabase som backend. Projektet utforskar serverstyrd slumpgenerering med fokus på säkerhet och rättvisa resultat. Jag ville undersöka hur man kan kombinera klient- och serverlogik för att skapa en användarvänlig men samtidigt robust upplevelse.",
      tech: ["React", "Supabase", "Vite"],
      link: "https://slotsify.netlify.app",
      image: "/assets/images/SlotsifyScreenShot.png" 
    },
    {
      title: "Munamii",
      description: "Munamii Cakery är en webbplats för ett fiktivt bageri, byggd med React och betallösning från Stripe. ",
      tech: ["React", "Vite", "Stripe", "Netlify"],
      link: "https://munamii.netlify.app",
      image: "/assets/images/MunamiiScreenShot.png" 
    },
    {
      title: "Portfolio",
      description: "Min personliga portfolio, byggd med React och Tailwind CSS. Denna webbplats är en del av min resa som utvecklare och visar upp mina projekt och erfarenheter.",
      tech: ["React", "Tailwind CSS", "Vite"],
      link: "https://ola-persson.netlify.app",
      image: "/assets/images/HeadShotRemake.png" 
    },
    {
      title: "Othello",
      description: "Ett Othello-spel byggt i Unity. Spelet är designat för att vara både utmanande och underhållande, med fokus på spelmekanik och användargränssnitt.",
      tech: ["C#", "Unity"],
      link: "",
      image: "/assets/images/OthelloScreenShot.png"
    },
    {
      title: "Space Shooter Galactic",
      description: "Ett mobilspel byggt i Kotlin för Android. Spelet är en klassisk rymdskjutare med fokus på spelbarhet och grafik.",
      tech: ["Kotlin", "Android"],
      link: "",
      image: "/assets/images/SpaceShooterGalacticStart.png"
    }


  ];

  return (
    <section className="py-16 px-6 bg-gray-100" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center">Projekt</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6">

            <img src={p.image} alt={p.title} className="h-48 object-cover mx-auto rounded-t-xl mb-4 border-4 border-green-300" />

            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="mb-2">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, j) => (
                <span key={j} className="bg-gray-200 px-2 py-1 rounded text-sm">
                  {t}
                </span>
              ))}
            </div>
            {(p.link != "") &&
            <a
              href={p.link}
              className="text-green-600 hover:bg-green-200 block text-center bg-green-300 px-4 py-2 rounded-lg border-green-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visa projekt
            </a>
            }
          </div>
        ))}
      </div>
    </section>
  );
}