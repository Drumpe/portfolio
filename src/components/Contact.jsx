// export function Contact() {
//   return (
//     <section className="py-16 px-6 bg-white text-center" id="contact">
//       <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
//       <p className="mb-4">Du kan nå mig via <a href="mailto:ola@example.com" className="text-green-600 hover:underline">ola@example.com</a> eller hitta mig på:</p>
//       <div className="flex justify-center gap-6 text-2xl">
//         <a href="https://github.com/drumpe" target="_blank" className="hover:text-green-600">GitHub</a>
//         <a href="https://linkedin.com/in/ola-persson" target="_blank" className="hover:text-green-600">LinkedIn</a>
//       </div>
//     </section>
//   );
// }


import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [lastSent, setLastSent] = useState(null);
  const [popup, setPopup] = useState({ show: false, message: '', type: '' });

  const showPopup = (message, type = 'success') => {
    setPopup({ show: true, message, type });
    setTimeout(() => setPopup({ show: false, message: '', type: '' }), 5000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (sending) return;

    const now = Date.now();
    if (lastSent && now - lastSent < 120000) {
      showPopup('Jag tycker om dig också, men spamma mig inte.', 'error');
      return;
    }

    const formData = new FormData(form.current);
    const name = formData.get('user_name')?.trim();
    const email = formData.get('user_email')?.trim();
    const message = formData.get('message')?.trim();
    if (!name || !email || !message) {
      showPopup('Alla fält måste vara ifyllda.', 'error');
      return;
    }

    setSending(true);
    emailjs
      .sendForm('service_i6vpd2q', 'template_m607l9i', form.current, {
        publicKey: 'eWIJDb7rkUxt6UZ6K',
      })
      .then(
        () => {
          setLastSent(Date.now());
          showPopup('Meddelandet skickades!');
          form.current.reset();
        },
        (error) => {
          showPopup('Något gick fel. Försök igen.', 'error');
        },
      )
      .finally(() => setSending(false));
  };

  return (
    <section className="py-16 px-6 bg-white text-center bg-gradient-to-b from-gray-200 to-gray" id="contact">
      <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
      <p className="mb-4">
        Skicka mig ett meddelande genom att fylla i kontaktinfo nedan eller hitta min e-post i sidfoten. 
        <br />
        Föredrar du LinkedIn eller GitHub, så kan du nå mig där också.
        <br />
      </p>
      {/* Popup notification */}
      {popup.show && (
        <div
          className={`fixed left-1/3 bottom-10 z-50 -translate-x-1/2 px-6 py-3 rounded shadow-lg text-white font-semibold transition-all duration-300
            ${popup.type === 'error' ? 'bg-red-600' : 'bg-green-600'}`}
        >
          {popup.message}
        </div>
      )}

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto bg-gray-50 p-8 rounded-lg shadow-md flex flex-col gap-4 mb-8"
        autoComplete="off"
      >
        <label htmlFor="user_name" className="text-left font-semibold">Namn</label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          required
        />
        <label htmlFor="user_email" className="text-left font-semibold">Email</label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          required
        />
        <label htmlFor="message" className="text-left font-semibold">Meddelande</label>
        <textarea
          name="message"
          id="message"
          rows={5}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          required
        />
        <input
          type="submit"
          value={sending ? 'Skickar...' : 'Skicka'}
          className={`bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-6 rounded hover:bg-green-700 transition cursor-pointer mt-2 ${sending ? 'opacity-60 cursor-not-allowed' : ''}`}
          disabled={sending}
        />
      </form>
      <div className="flex justify-center gap-6 text-2xl">
        <a href="https://github.com/drumpe" target="_blank" className="hover:text-green-600">GitHub</a>
        <a href="https://linkedin.com/in/ola-persson" target="_blank" className="hover:text-green-600">LinkedIn</a>
      </div>
    </section>
  );
};
