"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

interface FormData {
  nombre: string;
  mailOrigen: string;
  telefono: string;
  mensaje: string;
}

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (!captchaToken) {
      alert("Por favor, completa el captcha");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://mail-sender.neonexus.cl/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          asunto: "Necesito una app",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        setCaptchaToken(null);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto space-y-4 pt-12 pb-4 px-20 bg-[#19566D] text-white border-b-[32px] rounded-tl-[24px] border-[#0B2B3E]"
    >
      <h2 className="text-white font-bold text-4xl 2xl:text-5xl">
        Hablemos sobre el futuro de tu negocio.
      </h2>
      <p>
        ¿Listo para transformar tu empresa? <br /> Escríbenos y diseñemos juntos
        la mejor estrategia digital para ti.
      </p>
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium mb-1">
          Nombre y Apellido
        </label>
        <input
          {...register("nombre", { required: "Este campo es requerido" })}
          type="text"
          id="nombre"
          className="w-full p-3 rounded-md bg-[#0B2B3E] placeholder:text-white"
          placeholder="Agrega tu nombre"
        />
        {errors.nombre && (
          <span className="text-red-500 text-sm">{errors.nombre.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="mailOrigen" className="block text-sm font-medium mb-1">
          Correo Electrónico
        </label>
        <input
          {...register("mailOrigen", {
            required: "Este campo es requerido",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Correo electrónico inválido",
            },
          })}
          type="email"
          id="mailOrigen"
          placeholder="Agrega tu email"
          className="w-full p-3 rounded-md bg-[#0B2B3E] placeholder:text-white"
        />
        {errors.mailOrigen && (
          <span className="text-red-500 text-sm">
            {errors.mailOrigen.message}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="telefono" className="block text-sm font-medium mb-1">
          Teléfono
        </label>
        <input
          {...register("telefono", { required: "Este campo es requerido" })}
          type="tel"
          id="telefono"
          placeholder="Agrega tu teléfono"
          className="w-full p-3 rounded-md bg-[#0B2B3E] placeholder:text-white"
        />
        {errors.telefono && (
          <span className="text-red-500 text-sm">
            {errors.telefono.message}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium mb-1">
          Mensaje
        </label>
        <textarea
          {...register("mensaje", { required: "Este campo es requerido" })}
          id="mensaje"
          rows={3}
          className="w-full p-4 rounded-md bg-[#0B2B3E] placeholder:text-white"
          placeholder="Escribe aquí"
        />
        {errors.mensaje && (
          <span className="text-red-500 text-sm">{errors.mensaje.message}</span>
        )}
      </div>

      <div className="flex justify-end">
        <ReCAPTCHA
          sitekey="TU_CLAVE_PUBLICA_DE_RECAPTCHA"
          onChange={(token) => setCaptchaToken(token)}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-[#CF5F36] block ml-auto hover:bg-gradient-to-r h-fit hover:from-[#8AB8E1] hover:to-[#CF5F36] text-white py-2 px-12 rounded-md w-fit cursor-pointer`}
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>

      {submitStatus === "success" && (
        <div className="text-green-500 text-center">
          ¡Mensaje enviado con éxito!
        </div>
      )}

      {submitStatus === "error" && (
        <div className="text-red-500 text-center">
          Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
        </div>
      )}
    </form>
  );
}
