export default function Footer() {
  return (
    <footer className="bg-[#4A2E1F] text-white ">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* LOGO / MARCA */}
          <div>
            <img
              src="/public/ronellogo.png"
              alt="Logo cafetería"
              className="h-12 w-auto mb-4"
            />

            <p className="text-sm text-gray-300 leading-relaxed">
              Café de calidad, momentos inolvidables. Disfruta nuestras bebidas,
              postres y el mejor ambiente para compartir.
            </p>
          </div>

          {/* NAVEGACIÓN */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navegación</h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-white transition cursor-pointer">Inicio</li>
              <li className="hover:text-white transition cursor-pointer">Productos</li>
              <li className="hover:text-white transition cursor-pointer">Nosotros</li>
              <li className="hover:text-white transition cursor-pointer">Locales</li>
            </ul>
          </div>

          {/* HORARIOS */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Horario</h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Lunes - Sábado: 8:00 am – 7:00 pm</li>
              <li>Miércoles: 8:00 am – 3:00 pm</li>
              <li>Domingos: 8:00 am – 5:00 pm</li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li>📍 Lima, Perú</li>
              <li>📞 +51 975 239 954</li>
              <li>✉️ cafedronel@email.com</li>
            </ul>

            {/* REDES */}
            <div className="flex gap-4 mt-4">
                
              <div className="hover:scale-110 transition cursor-pointer">
                Facebook
              </div>

              <div className="hover:scale-110 transition cursor-pointer">
                TikTok
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-[#6B4C3B]">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">

          <p>
            © {new Date().getFullYear()} Cafetería. Todos los derechos reservados.
          </p>

          <p>
            Desarrollado por Kevin M.
          </p>

        </div>

      </div>

    </footer>
  )
}