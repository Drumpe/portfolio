import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-4 space-y-12">
      {/* Header */}
      <section className="text-center space-y-2">
        <motion.h1
          className="text-3xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ola "Drumpe" Persson
        </motion.h1>
        <p className="text-muted-foreground">Utvecklare och mångsysslare</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="mailto:drumpert@gmail.com" aria-label="Email"><Mail /></a>
          <a href="https://github.com/Drumpe" target="_blank" aria-label="GitHub"><Github /></a>
          <a href="https://www.linkedin.com/in/ola-persson-orator-865066154/" target="_blank" aria-label="LinkedIn"><Linkedin /></a>
        </div>
      </section>

      {/* Om mig */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Om mig</h2>
        <p>
          Lösningsorienterad och analytisk systemutvecklare med erfarenhet av Java, C#, C++,
          TypeScript, JavaScript, containerisering, GitLab, Spring och DevOps. Van att arbeta
          agilt och gillar utmaningar som kräver både tekniskt djup och strukturerat tänkande.
        </p>
        <p>
          Jag trivs i samarbetsinriktade miljöer där jag kan bidra till problemlösning och teknisk utveckling.
          Snabb på att sätta mig in i nya tekniker och drivs av att skapa effektiva, hållbara lösningar.
        </p>
      </section>

      {/* Erfarenhet */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Erfarenhet</h2>
        <Card>
          <CardContent className="p-4 space-y-1">
            <h3 className="font-bold">Axiell, Lund – LIA-praktik</h3>
            <p className="text-sm text-muted-foreground">Nov 2023 – Apr 2024</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Automatiserad analys av mjukvarukomponenter (SCA) i GitLab CI/CD</li>
              <li>Integrationstester för API:er med Postman</li>
              <li>Tekniker: Java, Docker, Maven, Spring, YAML</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 space-y-1">
            <h3 className="font-bold">Willys – Golvpersonal till teamchef</h3>
            <p className="text-sm text-muted-foreground">2004 – 2024</p>
            <p className="text-sm">Ansvar för personal, budget, beställningar och kundservice.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 space-y-1">
            <h3 className="font-bold">Lažánky Hospoda – Värdshusägare</h3>
            <p className="text-sm text-muted-foreground">2002 – 2004</p>
            <p className="text-sm">Kundomhändertagande, byggnadsutveckling, tjeckiska språket.</p>
          </CardContent>
        </Card>
      </section>

      {/* Utbildning */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Utbildning</h2>
        <ul className="list-disc pl-5 text-sm">
          <li><strong>Jensen YH, Malmö (2022–2024):</strong> Systemutveckling med säkerhetsinriktning – C#, .NET, React, SQL, Testning</li>
          <li>Karlstad Universitet (2022): C# GUI-programmering</li>
          <li>Linnéuniversitetet (2021–2022): Internetsäkerhet, Webbteknik 2, Strukturerad C++</li>
          <li>Högskolan i Skövde (2020): PLC-programmering</li>
          <li>Lunds Universitet (1996–2000): Datalogi & Matematik, 135 hp</li>
        </ul>
      </section>

      {/* CV-länk */}
      <section className="text-center">
        <a href="/CV-Sv-OlaPerssonOrator.pdf" download>
          <Button>📄 Ladda ner mitt CV (PDF)</Button>
        </a>
      </section>
    </main>
  );
}
