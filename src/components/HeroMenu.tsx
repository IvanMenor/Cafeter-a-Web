
import { useState } from "react"

export default function DeliveryHero() {

  const [open, setOpen] = useState(false)

  return (
    <>
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

              <button
                onClick={() => setOpen(true)}
                className="bg-[#A76B2B] text-white px-7 py-3 rounded-lg hover:opacity-90 transition"
              >
                Cómo pedir
              </button>

            </div>

          </div>

          {/* IMAGEN */}
          <div className="flex justify-center">

            <img
              src="/delivery.png"
              className="max-h-[500px] object-contain rounded-sm"
            />

          </div>

        </div>

      </section>


      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-6">

          <div className="bg-white max-w-lg w-full rounded-2xl shadow-2xl p-8 relative animate-fadeIn">

            {/* BOTON CERRAR */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold text-[#3A2E23] mb-6">
              Cómo realizar tu pedido
            </h2>

            <div className="space-y-5 text-[#5B4636] leading-relaxed">

              <div className="flex gap-3">
                <span className="font-semibold text-[#A76B2B]">1.</span>
                <p>
                  Revisa los tipos de café disponibles y elige el empaque que
                  deseas pedir.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-semibold text-[#A76B2B]">2.</span>
                <p>
                  Haz clic en el botón <strong>"Comprar"</strong>. Esto abrirá
                  automáticamente una conversación en WhatsApp con nuestro
                  equipo.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-semibold text-[#A76B2B]">3.</span>
                <p>
                  En el mensaje de WhatsApp indícanos cuántos empaques deseas
                  comprar y la dirección donde quieres recibir tu pedido.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-semibold text-[#A76B2B]">4.</span>
                <p>
                  Uno de nuestros colaboradores te responderá confirmando el
                  pedido, el tiempo estimado de entrega y coordinando contigo el
                  día y la hora de entrega.
                </p>
              </div>

            </div>

            <div className="mt-8 text-sm text-gray-500">
              Nuestro equipo estará encantado de ayudarte con tu pedido.
            </div>

          </div>

        </div>
      )}
    </>
  )
}
