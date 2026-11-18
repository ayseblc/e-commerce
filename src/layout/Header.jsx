
import { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <header className="flex flex-col px-6 py-5">

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Bandage
        </h1>

        <div className="flex items-center gap-5">
          <Search size={24} />
          <ShoppingCart size={24} />

          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col items-center gap-5 py-8">
          <a href="#" className="text-xl font-medium">Home</a>
          <a href="#" className="text-xl font-medium">Product</a>
          <a href="#" className="text-xl font-medium">Pricing</a>
          <a href="#" className="text-xl font-medium">Contact</a>
        </nav>
      )}

    </header>
  );
}

export default Header;
