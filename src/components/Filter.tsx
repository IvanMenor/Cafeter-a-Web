import { useState } from "react"
import { products } from "../data/products"

const categories = [
  { id: "todos", label: "Todo" },
  { id: "bebidasFrias", label: "Bebidas frías" },
  { id: "bebidasCalientes", label: "Bebidas calientes" },
  { id: "postres", label: "Para acompañar" }
]

export default function MenuLocal() {

  const [category, setCategory] = useState("todos")

  const filtered =
    category === "todos"
      ? products.filter(p => p.category !== "cafe")
      : products.filter(p => p.category === category)

  return (
    <section className="bg-[#E8E3DC] py-5 px-6">

      <div className="max-w-7xl mx-auto">

        {/* FILTROS */}
        <div className="flex justify-center flex-wrap gap-3 mb-20">

          {categories.map(cat => (

            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm transition
              ${category === cat.id
                  ? "bg-[#3A2E23] text-white"
                  : "bg-white hover:bg-[#f3eee8]"}`}
            >
              {cat.label}
            </button>

          ))}

        </div>

        {/* PRODUCTOS */}
        <div className="grid gap-x-12 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filtered.map(product => (

            <div
              key={product.id}
              className="group"
            >

              {/* IMAGEN */}
              <div className="h-56 flex items-center justify-center mb-6">

                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full object-contain transition duration-500 group-hover:scale-105"
                />

              </div>

              {/* INFO */}
              <div className="text-center space-y-3">

                <h3 className="text-lg font-semibold text-[#3A2E23]">
                  {product.name}
                </h3>

                <p className="text-sm text-[#6B4C3B] leading-relaxed max-w-[260px] mx-auto">
                  {product.description}
                </p>

                <div className="text-lg font-semibold text-[#A76B2B] pt-2">
                  S/ {product.price.toFixed(2)}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}