import { products } from "../data/products"

export default function DeliveryProducts() {

  const coffee = products.filter(p => p.category === "cafe")

  return (
    <section className="bg-[#E8E3DC] py-5 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#3A2E23]">
            Café disponible
          </h2>
          <p className="text-[#6B4C3B] mt-3">
            Empaques de 1/4 kg
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {coffee.map(product => (

            <div key={product.id} className="text-center group">

              <div className="h-56 flex items-center justify-center mb-6">
                <img
                  src={product.image}
                  className="max-h-full object-contain group-hover:scale-115 transition-all duration-300"
                />
              </div>

              <h3 className="font-semibold text-[#3A2E23]">
                {product.name}
              </h3>

              <p className="text-sm text-[#6B4C3B] mt-2">
                {product.description}
              </p>

              <div className="mt-3 font-semibold text-[#A76B2B]">
                S/ {product.price.toFixed(2)}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}