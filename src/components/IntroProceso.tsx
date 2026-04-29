import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"
export default function IntroProcesoCafe() {
  return (
    <section className="bg-[#E8E3DC] py-28 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}
        <div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#3A2E23] mb-6">
            Cómo nace nuestro café
          </h2>

          <p className="text-[#6B4C3B] text-lg leading-relaxed mb-6">
            En Café D’Ronel cuidamos cada etapa del proceso para preservar
            el sabor y la calidad del café desde su origen. Desde la cosecha
            en nuestras fincas en Chanchamayo hasta la molienda final,
            cada paso se realiza con dedicación y respeto por la naturaleza.
          </p>

          <p className="text-[#6B4C3B] text-lg leading-relaxed">
            Descubre en este video cómo transformamos el fruto del cafetal
            en el café que finalmente llega a tu taza.
          </p>

        </div>

        {/* VIDEO */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
<HeroVideoDialog
  className="block dark:hidden"
  animationStyle="from-center"
  videoSrc="https://www.youtube.com/embed/iGf2jS1t_Ho"
  thumbnailSrc="../public/gif.gif"
  thumbnailAlt="Dummy Video Thumbnail"
/>

        </div>

      </div>

    </section>
  )
}