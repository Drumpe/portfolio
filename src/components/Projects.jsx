import { image, title } from "framer-motion/client";

export function Projects() {
  const projects = [
    {
      title: "Slotsify2",
      description: "Slotsify2 är en uppdaterad version av Slotsify, byggd med React och PixiJS för att skapa en mer dynamisk och interaktiv spelupplevelse. Denna version använder Supabase för datalagring och Netlify för hosting. Projektet fokuserar på att förbättra användargränssnittet och spelmekaniken, med en ny grafikmotor som möjliggör mer komplexa animationer och effekter. Om man bara vill testa finns användaren: test@test.se pwd:12345678, annars är det verifiering av e-post som gäller. (under utveckling)",
      tech: ["React", "Vite", "Netlify", "Supabase", "PixiJS"],
      link: "https://slotsify2.netlify.app",
      github: "https://github.com/Drumpe/Slotsify2",
      image: "/assets/images/Slotsify2ScreenShot.png"
    },
    {
      title: "EnergiData",
      description: "EnergiData, en applikation som samlar in och analyserar energidata/väder från bland annat SMHI och ENTSO-E. Backend är byggd med .NET 9 och lagrar data i en PostgreSQL-databas, medan frontend är skapad med moderna TypeScript-verktyg för att visualisera informationen på ett interaktivt sätt. Projektet använder Docker för enkel utveckling och driftsättning. Med EnergiData kan användare enkelt följa och jämföra energiförbrukning och produktion över tid för prisområde SE4.",
      tech: ["Docker", "PostgreSQL", "TypeScript", "C#", "React", ".NET Core API", "ApexCharts", "Tailwind CSS", "BackgroundServices"],
      link: "",
      github: "https://github.com/Drumpe/EnergiData",
      image: "/assets/images/EnergiDataScreenShot.png"
    },
    {
      title: "Munamii",
      description: "Munamii Cakery är en webbplats för ett fiktivt bageri, byggd med React och betallösning från Stripe. ",
      tech: ["React", "Vite", "Stripe", "Netlify"],
      link: "https://munamii.netlify.app",
      github: "https://github.com/Drumpe/Munamii_Cakery",
      image: "/assets/images/MunamiiScreenShot.png"
    },
    {
      title: "Slotsify",
      description: "Slotsify är ett webbspel byggt i React med Netlify functions som backend och Supabase som db. Projektet utforskar serverstyrd slumpgenerering med fokus på säkerhet. Jag ville lära mig hur mycket Nelify functions kan göra utan att behöva deploya en full backend. Användargränssnitt är jag inte nöjd med, så därför gjorde jag Slotsify2.",
      tech: ["React", "Vite", "Netlify", "Supabase"],
      link: "https://slotsify.netlify.app",
      github: "https://github.com/Drumpe/slotsify",
      image: "/assets/images/SlotsifyScreenShot.png"
    },
    {
      title: "Portfolio",
      description: "Min personliga portfolio (den här sajten), byggd med React och Tailwind CSS. Denna webbplats är en del av min resa som utvecklare och visar upp några av mina projekt och erfarenheter.",
      tech: ["React", "Tailwind CSS", "Emailjs", "Netlify"],
      link: "https://olapersson.netlify.app/",
      github: "https://github.com/Drumpe/portfolio",
      image: "/assets/images/HeadShotRemake.png"
    },
    {
      title: "Othello",
      description: "Ett Othello-spel byggt i Unity. Spelet är designat med fokus på spelmekanik och användargränssnitt.",
      tech: ["C#", "Unity"],
      link: "",
      github: "https://github.com/Drumpe/Othello",
      image: "/assets/images/OthelloScreenShot.png"
    },
    {
      title: "Space Shooter Galactic",
      description: "Ett mobilspel byggt i Kotlin för Android. Simpelt spel med fokus på spelmekanik och grafik.",
      tech: ["Kotlin", "Android"],
      link: "",
      github: "",
      image: "/assets/images/SpaceShooterGalacticStart.png"
    }


  ];

  return (
    <section className="py-16 px-6 bg-gray-200" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center">Projekt</h2>
      <p className="max-w-2xl mx-auto text-lg text-center">
        Här är några av mina senaste projekt.
        <br />Följ länkarna för att se dem i aktion eller kolla in koden på GitHub.
        <br />&nbsp;
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col h-full">
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
            <div className="flex-grow" />
            <div className="flex flex-col gap-2 mt-4">
              {p.link !== "" && (
                <a
                  href={p.link}
                  className="bg-green-500 hover:bg-green-400 text-white block text-center px-4 py-2 rounded-lg border-green-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Öppna projektet
                </a>
              )}
              {p.github !== "" && (
                <a
                  href={p.github}
                  className="bg-gray-500 hover:bg-gray-400 text-white block text-center px-4 py-2 rounded-lg border-green-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Länk till GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}