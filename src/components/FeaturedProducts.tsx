import { products } from "../data/products"
import { Link } from "react-router-dom"

export default function FeaturedProducts() {

  const featured = products.filter(product => product.featured)

  return (
    <section className="w-full py-20 px-6 bg-[#E8E3DC]">

            <div className="max-w-7xl mx-auto px-8">

        {/* ===== TÍTULO ===== */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-12 bg-[#8B6B5E]"></div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#3E2723] tracking-wide">
              PRODUCTOS DESTACADOS
            </h2>
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {featured.map(product => (

            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
            >

              {/* IMAGEN */}
<div className="h-48 flex items-center justify-center bg-gray-50">
  <img
    src={product.image}
    alt={product.name}
    className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-500"
  />
</div>

              {/* INFO */}
              <div className="p-5">

                <h3 className="font-semibold text-lg text-gray-800">
                  {product.name}
                </h3>

                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mt-4">

                  <span className="text-amber-700 font-bold text-lg">
                    S/ {product.price.toFixed(2)}
                  </span>

<Link
  to="/Menu"
  className="bg-amber-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-amber-800 transition"
>
  Ver
</Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}