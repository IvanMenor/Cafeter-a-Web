import { Leaf, HandHeart, Coffee } from "lucide-react";

const Promesa = () => {
  return (
    <section className="bg-[#E8E3DC] py-15">
      <div className="max-w-7xl mx-auto px-8">

        {/* ===== TÍTULO ===== */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-12 bg-[#8B6B5E]"></div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#3E2723] tracking-wide">
              NUESTRA PROMESA
            </h2>
          </div>
        </div>

        {/* ===== CARDS ===== */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-12 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <Leaf size={42} className="text-[#8B6B5E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#3E2723] mb-4">
              100% Natural
            </h3>
            <p className="text-[#5D4037] leading-relaxed">
              Sin aditivos ni conservantes. El cacao y café son puros de origen.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-12 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <HandHeart size={42} className="text-[#8B6B5E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#3E2723] mb-4">
              Comercio Directo
            </h3>
            <p className="text-[#5D4037] leading-relaxed">
              Trabajamos de la mano con los productores locales de Yurinaki.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-12 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <Coffee size={42} className="text-[#8B6B5E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#3E2723] mb-4">
              Calidad Premium
            </h3>
            <p className="text-[#5D4037] leading-relaxed">
              Cada lote es tostado artesanalmente para garantizar frescura.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Promesa;
