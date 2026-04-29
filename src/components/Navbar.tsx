import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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
            src="/ronellogo.png"
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

        {/* Links Desktop */}
        <ul className="hidden md:flex gap-8 text-[#3A2E23] font-medium">
          <li className="hover:text-[#A76B2B] cursor-pointer transition">
            <Link to="/">Inicio</Link>
          </li>

          <li className="hover:text-[#A76B2B] cursor-pointer transition">
            <Link to="/menu">Menú Local</Link>
          </li>

          <li className="hover:text-[#A76B2B] cursor-pointer transition">
            <Link to="/delivery">Delivery</Link>
          </li>

          <li className="hover:text-[#A76B2B] cursor-pointer transition">
            <Link to="/nosotros">Nosotros</Link>
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-[#3A2E23] p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#E8E3DC] border-t border-[#D4C9BD] shadow-lg">
          <ul className="flex flex-col gap-0 text-[#3A2E23] font-medium px-6 py-4">
            <li className="hover:text-[#A76B2B] cursor-pointer transition py-3 border-b border-[#D4C9BD]">
              <Link to="/" onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>

            <li className="hover:text-[#A76B2B] cursor-pointer transition py-3 border-b border-[#D4C9BD]">
              <Link to="/menu" onClick={closeMobileMenu}>
                Menú Local
              </Link>
            </li>

            <li className="hover:text-[#A76B2B] cursor-pointer transition py-3 border-b border-[#D4C9BD]">
              <Link to="/delivery" onClick={closeMobileMenu}>
                Delivery
              </Link>
            </li>

            <li className="hover:text-[#A76B2B] cursor-pointer transition py-3">
              <Link to="/nosotros" onClick={closeMobileMenu}>
                Nosotros
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;