import Form from "./Form";

export default function Contact() {
  return (
    <section id="contacto" className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex justify-center items-center relative">
        <img
          className="w-[60%] pointer-events-none opacity-90 hidden lg:block"
          src="/assets/brain.webp"
          alt="Imagen de cerebro artificial"
        />
        <img
          className="w-[60%] pointer-events-none absolute brightness-150 hidden lg:block animate-pulse"
          src="/assets/brain.webp"
          alt="Imagen de cerebro artificial"
        />
      </div>
      <div>
        <Form />
      </div>
    </section>
  );
}
