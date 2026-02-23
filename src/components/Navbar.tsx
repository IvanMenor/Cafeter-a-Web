import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#E8E3DC]/90 backdrop-blur-md shadow-md"
          : "bg-[#E8E3DC]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo + texto */}
        <div className="flex items-center gap-3">
          <img
            src="/public/ronellogo.png"
            alt="logo"
            className="h-12 md:h-14 w-auto object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-lg md:text-xl font-semibold text-[#4A2E1F]">
              Café D´Ronel
            </h1>

            <p className="text-xs text-[#A76B2B]">
              Únete a la familia
            </p>
          </div>
        </div>

        {/* Links */}
<ul className="hidden md:flex gap-8 text-[#3A2E23] font-medium">
  <li className="hover:text-[#A76B2B] cursor-pointer">
    <Link to="/">Inicio</Link>
  </li>

  <li className="hover:text-[#A76B2B] cursor-pointer">
    <Link to="/menu">Menú Local</Link>
  </li>

  <li className="hover:text-[#A76B2B] cursor-pointer">
    <Link to="/delivery">Delivery</Link>
  </li>

  <li className="hover:text-[#A76B2B] cursor-pointer">
    <Link to="/nosotros">Nosotros</Link>
  </li>
</ul>
      </div>
    </nav>
  );
};

export default Navbar;