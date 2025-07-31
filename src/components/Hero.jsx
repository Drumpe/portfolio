export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray text-white text-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hej, jag är Ola</h1>
      <p className="text-lg md:text-xl mb-6 max-w-xl">
        En lösningsorienterad utvecklare med bakgrund inom både teknik och service. <br />
        Jag trivs bäst när jag får kombinera logik med kreativitet, oavsett om det handlar om att bygga 
        användarvänliga gränssnitt eller automatisera komplexa arbetsflöden.
      </p>
      <a
        href="#projects"
        className="bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-xl shadow-md"
      >
        Se mina projekt
      </a>
    </section>
  );
}