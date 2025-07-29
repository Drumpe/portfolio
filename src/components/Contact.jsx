export function Contact() {
  return (
    <section className="py-16 px-6 bg-white text-center" id="contact">
      <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
      <p className="mb-4">Du kan nå mig via <a href="mailto:ola@example.com" className="text-green-600 hover:underline">ola@example.com</a> eller hitta mig på:</p>
      <div className="flex justify-center gap-6 text-2xl">
        <a href="https://github.com/drumpe" target="_blank" className="hover:text-green-600">GitHub</a>
        <a href="https://linkedin.com/in/ola-persson" target="_blank" className="hover:text-green-600">LinkedIn</a>
      </div>
    </section>
  );
}