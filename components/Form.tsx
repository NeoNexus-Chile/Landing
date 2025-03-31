"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
// Definimos el schema de validación
const formSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede exceder los 50 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo puede contener letras"),

  mailOrigen: z
    .string()
    .email("Correo electrónico inválido")
    .max(100, "El correo no puede exceder los 100 caracteres"),

  telefono: z
    .string()
    .max(20, "El teléfono no puede exceder los 20 caracteres")
    .optional()
    .or(z.literal("")), // Permite string vacío

  mensaje: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(500, "El mensaje no puede exceder los 500 caracteres"),
});

// Tipo inferido del schema
type FormData = z.infer<typeof formSchema>;

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    setIsSubmitting(true);

    const requestBody = {
      name: data.nombre,
      mail: data.mailOrigen,
      phone: data.telefono,
      message: data.mensaje,
    };

    console.log("Request body:", requestBody);

    try {
      const response = await fetch(
        "mail-sender-interno-ehh9cbe2f5d3akfd.eastus-01.azurewebsites.net/api/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        // setSubmitStatus("success");
        toast.success("Mensaje enviado con éxito");
        reset();
        setCaptchaToken(null);
      } else {
        // setSubmitStatus("error");
        toast.error(
          "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente."
        );
      }
    } catch (error) {
      // setSubmitStatus("error");
      toast.error(
        "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente."
      );
    }
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto space-y-4 pt-12 pb-4 px-8 lg:px-20 bg-[#19566D] text-white border-b-[32px] lg:rounded-tl-[24px] border-[#0B2B3E] isolate relative"
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
          {...register("nombre")}
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
          {...register("mailOrigen")}
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
          {...register("telefono")}
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
          {...register("mensaje")}
          id="mensaje"
          rows={3}
          className="w-full p-4 rounded-md bg-[#0B2B3E] placeholder:text-white"
          placeholder="Escribe aquí"
        />
        {errors.mensaje && (
          <span className="text-red-500 text-sm">{errors.mensaje.message}</span>
        )}
      </div>

      <div className="flex flex-col items-end gap-2">
        <ReCAPTCHA
          sitekey="6LdTCgArAAAAAPfttCYG5nwncHqPPHTZkeJ88Cr6"
          onChange={(token) => {
            setCaptchaToken(token);
            setCaptchaError(false);
          }}
        />
        {captchaError && (
          <span className="text-red-500 text-sm">
            Por favor, completa el captcha
          </span>
        )}
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

      <img
        src="/assets/waves.webp"
        alt="Imagen de olas digitales"
        className="absolute top-0 left-0 w-full h-full object-cover object-top opacity-[0.1] -z-10"
      />
    </form>
  );
}
