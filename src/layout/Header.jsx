
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Heart,
  Menu,
  X,
  UserRound,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop", dropdown: true },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Pages", path: "/pages" },
  ];

  return (
    <header className="relative z-50 flex w-full flex-col bg-white">

      {/* TOP INFO BAR */}
      <div className="hidden min-h-[40px] w-full items-center justify-between bg-[#252B42] px-6 text-white lg:flex lg:px-10">

        <div className="flex items-center gap-5 text-xs font-bold">
          <a href="tel:(225)555-0118" className="flex items-center gap-2">
            <Phone size={13} />
            (225) 555-0118
          </a>

          <a href="mailto:michelle.rivera@example.com" className="flex items-center gap-2">
            <Mail size={13} />
            michelle.rivera@example.com
          </a>
        </div>

        <p className="text-xs font-bold">
          Follow Us and get a chance to win 80% off
        </p>

        <div className="flex items-center gap-3 text-xs font-bold">
          <span>Follow Us :</span>

          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="18" cy="6" r="1" fill="currentColor" />
            </svg>
          </a>

          <a href="#" aria-label="YouTube">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
              <path d="M23 7a3 3 0 0 0-2.1-2.1C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7a31 31 0 0 0-.5 5 31 31 0 0 0 .5 5 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5A3 3 0 0 0 23 17a31 31 0 0 0 .5-5 31 31 0 0 0-.5-5ZM9.5 15.5v-7l6 3.5-6 3.5Z" />
            </svg>
          </a>

          <a href="#" aria-label="Facebook" className="text-sm font-bold">f</a>

          <a href="#" aria-label="Twitter" className="text-sm font-bold">♥</a>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <div className="flex min-h-[70px] w-full items-center justify-between px-6 py-3 lg:min-h-[58px] lg:px-8">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-[#252B42]"
        >
          Bandage
        </Link>

        {/* DESKTOP LINKS */}
        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="flex items-center gap-1 text-xs font-bold text-[#737373] transition-colors hover:text-[#23A6F0]"
            >
              {link.name}
              {link.dropdown && <ChevronDown size={13} />}
            </Link>
          ))}
        </nav>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4 text-[#23A6F0]">

          <Link
            to="/login"
            className="hidden items-center gap-1 text-xs font-bold lg:flex"
          >
            <UserRound size={17} />
            Login / Register
          </Link>

          <button aria-label="Search">
            <Search size={19} />
          </button>

          <Link to="/cart" aria-label="Shopping cart" className="flex items-center gap-1">
            <ShoppingCart size={19} />
            <span className="hidden text-xs lg:inline">1</span>
          </Link>

          <Link to="/favorites" aria-label="Favorites" className="flex items-center gap-1">
            <Heart size={19} />
            <span className="hidden text-xs lg:inline">1</span>
          </Link>

          {/* MOBILE MENU */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <nav className="flex w-full flex-col items-center gap-6 bg-white px-6 py-8 lg:hidden">
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
