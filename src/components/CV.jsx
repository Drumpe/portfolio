import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const EducationCard = ({ title, period, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-xl p-4 shadow-sm space-y-1 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center">
        <h3 className="font-bold">{title}</h3>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </div>
      <p className="text-sm text-gray-500">{period}</p>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="mt-2"
        >
          <p className="text-sm">{details}</p>
        </motion.div>
      )}
    </div>
  );
};

export function CV() {
  const educationData = [
    {
      title: 'Jensen YH, Malmö',
      period: '2022–2024',
      details: (
        <div className="space-y-2">
          <p>
            <a
              href="https://www.jensenyh.se/utbildningar/systemutvecklare-inriktning-sakerhet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Systemutvecklare med inriktning mot säkerhet (400 YH-poäng)
            </a>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Självledarskap - att leda sig själv, grund</li>
            <li>Programmering med C#/.NET, grund</li>
            <li>Databasteknik</li>
            <li>Programmering med C#/.NET, fortsättning</li>
            <li>Självledarskap - att leda sig själv, fortsättning</li>
            <li>Säker systemutveckling</li>
            <li>Utveckling av webbapplikationer</li>
            <li>Testning</li>
            <li>Agil systemutveckling och ämnesövergripande projekt</li>
            <li>LIA 1+2 (Lärande i arbete) på Axiell under 20 veckor</li>
            <li>Examensarbete -&nbsp;
              <a
                href="/assets/documents/ExamensarbeteOlaPerssonOrator.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >Software Composition Analysis - Skanning av programvarupaket
              </a>
            </li>
          </ul>
        </div >
      )
    },
    {
      title: 'Luleå tekniska universitet',
      period: '2022',
      details: (
        <div className="space-y-2">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a
                href="https://www.ltu.se/edu/course/D00/D0017D/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                D0017D - Inledande programmering i Java (7,5 hp)
              </a>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: 'Karlstad Universitet',
      period: '2022',
      details: (
        <div className="space-y-2">
          <p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <a
                  href="https://www.kau.se/utbildning/program-och-kurser/kurser/DVGB07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  DVGB07 - Grundläggande Windows-programmering med C# (7,5 hp)
                </a>
              </li>
            </ul>
          </p>
        </div>
      )
    },
    {
      title: 'Linnéuniversitetet',
      period: '2021–2022',
      details: (
        <div className="space-y-2">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a
                href="https://kursplan.lnu.se/kursplaner/kursplan-2DV702-2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                2DV702 - Internetsäkerhet (7,5 hp)
              </a>
            </li>
            <li>
              <a
                href="https://kursplan.lnu.se/kursplaner/kursplan-1ME322-2.1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                1ME322 - Webbteknik 2 (7,5 hp)
              </a>
            </li>
            <li>
              <a
                href="https://kursplan.lnu.se/kursplaner/kursplan-1DV433-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                1DV433 - Strukturerad programmering med C++ (7,5 hp)
              </a>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: 'Högskolan i Skövde',
      period: '2020',
      details: (
        <div className="space-y-2">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a
                href="https://pdfproxy.his.se/coursesyllabus/37873/SV"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                G1N - PLC-programmering (7,5 hp)
              </a>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: 'Örebro universitet',
      period: '2015',
      details: (
        <div className="space-y-2">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a
                href="http://lily.oru.se/studieinformation/VisaKursplan?kurskod=DT103G&termin=20172&sprak=sv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                DT103G - Persondatornätverk (4,5 hp)
              </a>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: 'Lunds Universitet',
      period: '1996–2000',
      details: (
        <div className="space-y-2">
          <p>Matematisk-naturvetenskapliga fakulteten (135 hp)</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Matematik (30 hp)
              <ul className="list-disc pl-5 mt-1">
                <li>MAT111 - Matematik 1A (15 hp)</li>
                <li>MAT112 - Matematik 1B (15 hp)</li>
              </ul>
            </li>
            <li>Datalogi (105 hp)
              <ul className="list-disc pl-5 mt-1">
                <li className="text-sm">Grundläggande kurser
                  <ul className="list-disc pl-5 mt-1">
                    <li>DAT311 - Allmän kurs (15 hp)</li>
                    <li>DAT102 - Fortsättningskurs (15 hp)</li>
                  </ul>
                </li>
                <li className="text-sm">Systemutveckling
                  <ul className="list-disc pl-5 mt-1">
                    <li>DAT113 - Programvaruproduktion (7,5 hp)</li>
                    <li>DAT106 - Databaser (7,5 hp)</li>
                    <li>DAT006 - Människa-data-interaktion (7,5 hp)</li>
                  </ul>
                </li>
                <li className="text-sm">Tekniska kurser
                  <ul className="list-disc pl-5 mt-1">
                    <li>DAT104 - Maskinnära programmering (7,5 hp)</li>
                    <li>DAT112 - Operativsystem (7,5 hp)</li>
                    <li>DAT114 - Datakommunikation (7,5 hp)</li>
                    <li>DAT009 - Realtidsprogrammering (7,5 hp)</li>
                  </ul>
                </li>
                <li className="text-sm">Avancerade kurser
                  <ul className="list-disc pl-5 mt-1">
                    <li>DAT119 - Algoritmer och optimeringsmetoder (15 hp)</li>
                    <li>DAT121 - Interaktiva media (7,5 hp)</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )
    }
  ];

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
          Ola Persson Orator
        </motion.h1>
        <img
          src="/assets/images/HeadShotRemake.png"
          alt="Ola Persson"
          className="w-40 h-40 rounded-full mx-auto shadow-lg"
        />
        <p className="text-gray-500 dark:text-gray-400">
          Systemutvecklare med fokus på säkerhet och effektivitet
        </p>
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
      </section>

      {/* Om mig */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Om mig</h2>
        <p>
          Som systemutvecklare kombinerar jag min tekniska kompetens med ett
          starkt fokus på säkerhet och kvalitet. Med erfarenhet av Java, C#,
          TypeScript och containerisering, samt ett gediget intresse för DevOps,
          strävar jag efter att skapa robusta och effektiva lösningar.
        </p>
        <p>
          Min bakgrund inom ledarskap och kundservice har gett mig värdefulla
          färdigheter i kommunikation och projektledning. Jag är särskilt
          intresserad av cybersäkerhet och moderna utvecklingsmetoder.
        </p>
      </section>

      {/* Erfarenhet */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Erfarenhet</h2>

        <div className="border rounded-xl p-4 shadow-sm space-y-1">
          <h3 className="font-bold">Axiell, Lund – LIA-praktik</h3>
          <p className="text-sm text-gray-500">Nov 2023 – Apr 2024</p>
          <ul className="list-disc pl-5 text-sm">
            <li>Automatiserad analys av mjukvarukomponenter (SCA) i GitLab CI/CD</li>
            <li>Integrationstester för API:er med Postman</li>
            <li>Tekniker: Java, Docker, Maven, Spring, YAML</li>
          </ul>
        </div>

        <div className="border rounded-xl p-4 shadow-sm space-y-1">
          <h3 className="font-bold">Willys – Golvpersonal till teamchef</h3>
          <p className="text-sm text-gray-500">2004 – 2024</p>
          <p className="text-sm">Personalansvar, budget, beställningar och kundservice.</p>
        </div>

        <div className="border rounded-xl p-4 shadow-sm space-y-1">
          <h3 className="font-bold">Lažánky Hospoda – Värdshusägare</h3>
          <p className="text-sm text-gray-500">2002 – 2004</p>
          <p className="text-sm">Kundomhändertagande, byggnadsutveckling, tjeckiska språket.</p>
        </div>
      </section>

      {/* Utbildning */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Utbildning</h2>
        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </section>
      {/* Språk */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Språk</h2>
        <div className="border rounded-xl p-4 shadow-sm space-y-1">
          <ul className="list-disc pl-5 space-y-1">
            <li>Svenska (modersmål)</li>
            <li>Engelska (flytande)</li>
            <li>Tyska (grundläggande)</li>
          </ul>
        </div>
      </section>
      {/* Certifikat */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Certifikat</h2>
        <div className="border rounded-xl p-4 shadow-sm space-y-1">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a
                href="/assets/documents/zenon_11_Ola_Persson_Orator.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                COPA-DATA Zenon 11
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* CV-länk */}
      <section className="text-center">
        <a
          href="/assets/documents/CV-Sv-OlaPerssonOrator.pdf"
          download
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          📄 Ladda ner mitt CV (PDF)
        </a>
      </section>
    </main>
  );
}