const Hero = () => {
  return (
    <section className="bg-[#E8E3DC] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* TEXTO */}
        <div className="space-y-6 animate-fadeIn">

          <p className="text-[#C17A2C] tracking-widest text-sm md:text-base">
            CAFÉ PREMIUM DE JURINAKI
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#4A2E1F] leading-tight">
            Artesanal
            <span className="block text-[#D88A2B]">
              100% Natural
            </span>
          </h1>

          <p className="text-[#6B4C3B] text-base md:text-lg max-w-xl">
            Desde la cosecha en las montañas de Junín hasta tu taza.
            Cada grano es procesado artesanalmente: secado, despulpado,
            pilado, selección y tostado con precisión.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="cursor-pointer bg-[#F59E0B] hover:bg-[#e18a00] text-white px-8 py-4 rounded-xl font-semibold transition">
              Descubre Nuestro Menú
            </button>

            <button className="cursor-pointer border-2 border-[#F59E0B] text-[#F59E0B] px-8 py-4 rounded-xl font-semibold hover:bg-[#F59E0B] hover:text-white transition">
              Comprar Café
            </button>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/public/empaque.png"
            alt="café"
            className="rounded-3xl shadow-2xl w-full max-w-md md:max-w-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;