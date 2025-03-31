import Image from "next/image";

const team = [
  {
    name: "Felipe Ortiz",
    role: "CTO y Co-Founder",
    image: "/assets/man.webp",
  },
  {
    name: "Augusto Allende",
    role: "Co-Founder y Relaciones",
    image: "/assets/man.webp",
  },
  {
    name: "Hugo Aracena",
    role: "Especialista en Frontend",
    image: "/assets/man.webp",
  },
  {
    name: "Mauricio Díaz",
    role: "Director Creativo",
    image: "/assets/man.webp",
  },
  // {
  //   name: "Felipe Ortiz",
  //   role: "CTO y Co-Founder",
  //   image: "/assets/man.webp",
  // },
  // {
  //   name: "Augusto Allende",
  //   role: "Co-Founder y Relaciones",
  //   image: "/assets/man.webp",
  // },
  // {
  //   name: "Hugo Aracena",
  //   role: "Especialista en Frontend",
  //   image: "/assets/man.webp",
  // },
  // {
  //   name: "Mauricio Díaz",
  //   role: "Director Creativo",
  //   image: "/assets/man.webp",
  // },
];

export default function Team() {
  return (
    <section className="max-w-6xl w-full mx-auto">
      <h2 className="text-2xl lg:text-3xl mb-8 ml-16">Equipo</h2>
      <div className="grid grid-cols-4 gap-y-10">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex flex-col gap-2 group transition-all duration-300 hover:-translate-y-2"
          >
            <div className="bg-neutral-400 [clip-path:polygon(15%_0,100%_0%,85%_100%,0%_100%)] h-[360px] w-full">
              <img
                alt={member.name}
                src={member.image}
                className="object-cover w-full h-full object-top grayscale-[0.9] group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="bg-[#0b2b3c] transition-all duration-300 group-hover:bg-[#004c6c] [clip-path:polygon(4%_0,90%_0%,87%_100%,1%_100%)] py-4 px-8 -translate-x-[13px] w-full text-white flex flex-col">
              <h3 className="text-xl">{member.name}</h3>
              <p className="text-sm font-bold">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
