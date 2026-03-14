export default function DeliveryHero() {
  return (
<section className="bg-[#E8E3DC] pt-32 pb-20 px-6 md:px-12 lg:px-20">
  
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* TEXTO */}
        <div className="lg:pr-16 xl:pr-24">

          <p className="text-sm tracking-widest text-[#A76B2B] mb-4">
            CAFÉ DE ESPECIALIDAD
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold text-[#3A2E23] leading-tight">
            Lleva la experiencia
            <br />
            del café a tu casa
          </h1>

          <p className="mt-8 text-[#6B4C3B] text-lg leading-relaxed max-w-xl">
            Nuestro café de Jurinaki ahora también lo puedes disfrutar en casa.
            Tostado fresco y preparado para distintos métodos.
          </p>

          <div className="flex gap-4 mt-10">

            <button className="bg-[#A76B2B] text-white px-7 py-3 rounded-lg hover:opacity-90 transition">
              Ver cafés
            </button>

            <button className="border border-[#3A2E23] px-7 py-3 rounded-lg hover:bg-[#3A2E23] hover:text-white transition">
              Cómo pedir
            </button>

          </div>

        </div>

        {/* IMAGEN */}
        <div className="flex justify-center">

          <img
            src="/public/delivery.png"
            className="max-h-[500px] object-contain rounded-sm"
          />

        </div>

      </div>

    </section>
  )
}