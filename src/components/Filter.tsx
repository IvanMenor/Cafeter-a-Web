import { products } from "../data/products"

export default function MenuLocal() {

  // Solo las categorías que quieres mostrar
  const validCategories = ["bebidasFrias", "bebidasCalientes", "postres"]

  // Agrupar productos por categoría
  const grouped = validCategories.map(category => ({
    category,
    items: products.filter(p => p.category === category)
  }))

  // Función para título bonito
  const getTitle = (cat: string) => {
    switch (cat) {
      case "bebidasFrias": return "Bebidas Frías"
      case "bebidasCalientes": return "Bebidas Calientes"
      case "postres": return "Postres"
      default: return cat
    }
  }

  // 👇 Aquí elegimos SOLO 1 imagen por categoría (la primera)
  const getImage = (items: any[]) => items[0]?.image

  return (
    <section className="bg-[#E8E3DC]">

      {grouped.map(group => {

        const bgImage = getImage(group.items)

        return (
          <div
            key={group.category}
            className="relative min-h-[80vh] flex items-center justify-center px-4 py-16"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Contenido */}
            <div className="relative z-10 max-w-4xl w-full">

              {/* Título */}
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10">
                {getTitle(group.category)}
              </h2>

              {/* Lista */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 space-y-5">

                {group.items.map(item => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start border-b pb-3 last:border-none"
                  >

                    <div className="pr-4">
                      <h3 className="font-semibold text-[#3A2E23] text-base sm:text-lg">
                        {item.name}
                      </h3>
                      <p className="text-sm text-[#6B4C3B]">
                        {item.description}
                      </p>
                    </div>

                    <div className="font-semibold text-[#A76B2B] whitespace-nowrap">
                      S/ {item.price.toFixed(2)}
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>
        )
      })}

    </section>
  )
}