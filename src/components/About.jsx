export function About() {
  return (
    <section className="py-16 px-6 text-center bg-gray bg-gradient-to-b from-gray to-gray-200" id="about">
      <h2 className="text-3xl font-bold mb-4">Om mig</h2>
      <p className="max-w-2xl mx-auto text-left text-lg mb-1">
        Jag älskar felsökning, gillar optimeringar och blir helt galet glad när jag får lära mig nya saker. 
        Det roligaste med utveckling är att förstå vad som faktiskt händer bakom kulisserna, allt från databasanrop och applikationslogik till hur systemen körs i produktion. 
        Att testa, refaktorera och förklara kod för andra ser jag som en självklar del av jobbet.
      </p>
      <p className="max-w-2xl mx-auto text-left text-lg mb-1">
        Jag trivs med att arbeta genom hela stacken och har erfarenhet av att bygga webblösningar med React och Vite på klientsidan, 
        kopplade till backend i Java med Spring Boot eller C# med ASP.NET och Entity Framework Core. 
        Jag har jobbat mot databaser som SQL Server, MySQL och MongoDB, och har även använt Supabase både som databas och auth-lösning i moderna webbappar. 
        Jag är van att sätta upp CI/CD-pipelines, containerisera projekt med Docker och deploya till exempelvis Netlify.
      </p>
      <p className="max-w-2xl mx-auto text-left text-lg mb-1">
        Efter 20 år i livsmedelsbranschen har jag dessutom ett bra handlag med människor, vet hur man levererar under press och har en vana att lösa problem när det verkligen gäller. 
        Den erfarenheten tar jag med mig in i utveckling, där det ibland handlar om precis samma sak, fast med kod i stället för människor och varor.
      </p>
      <p className="max-w-2xl mx-auto text-left text-lg mb-1">
        Jag föredrar tydlig kod framför "smarta" lösningar och gillar när det går snabbt att förstå hur allt hänger ihop. 
        För mig är det viktigt att bygga system som både användare och andra utvecklare mår bra av. 
        Funktionellt, förutsägbart och enkelt att vidareutveckla! Så jobbar jag helst.
      </p>
    </section>
  );
}