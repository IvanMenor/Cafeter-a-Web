import { Leaf, Sun, Coffee, Factory, Flame, Settings } from "lucide-react"

const pasos = [
  {
    icon: Leaf,
    titulo: "Cosecha",
    descripcion: "Recolección manual del café en su punto óptimo.",
    imagen: "../public/cosecha.jpg",
  },
  {
    icon: Sun,
    titulo: "Secado",
    descripcion: "Secado natural para conservar aroma y calidad.",
    imagen: "../public/secado.jpg",
  },
  {
    icon: Coffee,
    titulo: "Pergamino",
    descripcion: "Limpieza de la pulpa y conservación del grano.",
    imagen: "../public/pergamino.jpg",
  },
  {
    icon: Factory,
    titulo: "Pilado",
    descripcion: "Eliminación del pergamino para obtener café oro.",
    imagen: "../public/pilado.jpg",
  },
  {
    icon: Flame,
    titulo: "Tostado",
    descripcion: "Tostado artesanal que define el carácter.",
    imagen: "../public/tostado.png",
  },
  {
    icon: Settings,
    titulo: "Molienda",
    descripcion: "Molienda precisa según método de preparación.",
    imagen: "../public/molido.png",
  },
]

export default function ProcesoCafeTimeline() {
  return (
    <section className="py-28 bg-[#E8E3DC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TÍTULO */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold mb-4">
            El Proceso del Café
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Cada etapa es clave para lograr una taza perfecta.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* Línea */}
<div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#C8A27C]/20 hidden lg:block" />          <div className="grid gap-16 lg:grid-cols-6">

            {pasos.map((paso, i) => {
              const Icon = paso.icon

              return (
                <div
                  key={i}
                  className="group flex flex-col items-center text-center [perspective:1200px]"
                >

                  {/* Punto */}
<div className="w-4 h-4 rounded-full bg-[#C8A27C] mb-6 z-10 transition-all duration-500 group-hover:scale-150 group-hover:shadow-[0_0_18px_rgba(200,162,124,0.8)]" />
                  {/* TARJETA */}
                  <div className="relative w-full h-[280px] transition-transform duration-[900ms] ease-[cubic-bezier(.25,.8,.25,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                    {/* Cara frontal */}
                    <div className="absolute inset-0 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center backface-hidden">

                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#C8A27C] text-white mb-4">
                        <Icon size={24} />
                      </div>

                      <h3 className="font-semibold text-lg mb-2">
                        {paso.titulo}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {paso.descripcion}
                      </p>

                    </div>

                    {/* Cara trasera */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg [transform:rotateY(180deg)] backface-hidden">

                      <img
                        src={paso.imagen}
                        alt={paso.titulo}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 "
                      />

                    </div>

                  </div>

                </div>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}