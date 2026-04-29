import { MorphingText } from "@/components/ui/morphing-text"

export default function NosotrosHero() {
  return (
    <section
      className="relative h-[70vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('../public/fondoheronosotros.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Capa oscura para que el texto se lea mejor */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido */}
      <div className="relative max-w-3xl px-6">

        <h1 className="text-5xl md:text-6xl font-semibold mb-6">
          <MorphingText texts={["Nuestra", "Historia"]} />

        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-6">
          D’Ronel nace de la unión familiar de los hermanos Robert y Nelson.
          Su nombre significa <span className="italic">“Alegría de Dios”</span>,
          y por eso nuestro lema es <span className="italic">“Únete a la familia”.</span>
        </p>

        <p className="text-base md:text-lg text-gray-200 leading-relaxed">
          Todo comenzó cuando nuestra familia se reunió alrededor de una taza de café.
          Desde entonces creemos que lo más importante se construye
          <span className="font-medium"> un grano, una taza y una familia a la vez.</span>
        </p>

      </div>
    </section>
  )
}