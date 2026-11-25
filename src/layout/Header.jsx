
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Heart,
  Menu,
  X,
  UserRound,
} from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="relative z-50 flex w-full flex-col bg-white">
      {/* TOP HEADER */}
      <div className="flex min-h-[70px] w-full items-center justify-between px-6">
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-[#252B42]"
        >
          Bandage
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-bold text-[#737373] transition-colors hover:text-[#23A6F0]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* ICONS */}
        <div className="flex items-center gap-4 text-[#23A6F0]">
          <Link to="/login" aria-label="Login" className="hidden md:flex">
            <UserRound size={20} />
          </Link>

          <button aria-label="Search">
            <Search size={20} />
          </button>

          <Link to="/cart" aria-label="Shopping cart">
            <ShoppingCart size={20} />
          </Link>

          <Link to="/favorites" aria-label="Favorites" className="hidden md:flex">
            <Heart size={20} />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <nav className="flex w-full flex-col items-center gap-6 bg-white px-6 py-8 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-xl font-normal text-[#737373] hover:text-[#23A6F0]"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
