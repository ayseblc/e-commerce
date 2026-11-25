import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Grid2X2, List } from "lucide-react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, title: "Graphic Design", category: "English Department", oldPrice: "$16.48", price: "$6.48" },
  { id: 2, title: "Modern Design", category: "English Department", oldPrice: "$16.48", price: "$6.48" },
  { id: 3, title: "Classic Product", category: "English Department", oldPrice: "$16.48", price: "$6.48" },
  { id: 4, title: "Minimal Design", category: "English Department", oldPrice: "$16.48", price: "$6.48" },
  { id: 5, title: "Graphic Design", category: "English Department", oldPrice: "$16.48", price: "$6.48" },
  { id: 6, title: "Modern Design", category: "English Department", oldPrice: "$16.48", price: "$6.48" },
  { id: 7, title: "Classic Product", category: "English Department", oldPrice: "$16.48", price: "$6.48" },
  { id: 8, title: "Minimal Design", category: "English Department", oldPrice: "$16.48", price: "$6.48" },
  { id: 9, title: "Graphic Design", category: "English Department", oldPrice: "$16.48", price: "$6.48" },
  { id: 10, title: "Modern Design", category: "English Department", oldPrice: "$16.48", price: "$6.48" },
  { id: 11, title: "Classic Product", category: "English Department", oldPrice: "$16.48", price: "$6.48" },
  { id: 12, title: "Minimal Design", category: "English Department", oldPrice: "$16.48", price: "$6.48" },
];

const brands = ["Hooli", "Lyft", "LEAF", "stripe", "AWS", "Reddit"];

function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("Popularity");
  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "Price: Low to High") return Number(a.price.replace("$", "")) - Number(b.price.replace("$", ""));
    if (sort === "Price: High to Low") return Number(b.price.replace("$", "")) - Number(a.price.replace("$", ""));
    return a.id - b.id;
  });

  const startIndex = (currentPage - 1) * productsPerPage;
  const visibleProducts = sortedProducts.slice(startIndex, startIndex + productsPerPage);

  function changePage(page) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <main className="flex w-full flex-col">
      <section className="flex w-full flex-col items-center justify-center gap-4 bg-[#FAFAFA] px-6 py-8 md:flex-row md:justify-between md:px-12 md:py-6 lg:px-20">
        <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>
        <div className="flex items-center gap-3 text-sm font-bold">
          <Link to="/" className="text-[#252B42]">Home</Link>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <span className="text-[#BDBDBD]">Shop</span>
        </div>
      </section>

      <section className="flex w-full flex-col gap-4 px-6 py-8 md:flex-row md:px-12 lg:px-20">
        {["CLOTHS", "CLOTHS", "CLOTHS", "CLOTHS", "CLOTHS"].map((name, index) => (
          <div key={index} className="relative flex h-[180px] w-full items-center justify-center overflow-hidden bg-[#E5E5E5] md:h-[220px] md:flex-1">
            <img src={`https://placehold.co/400x500/E5E5E5/737373?text=Cloths+${index + 1}`} alt={name} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 text-center text-white">
              <h2 className="font-bold">{name}</h2>
              <p className="text-sm font-bold">5 Items</p>
            </div>
          </div>
        ))}
      </section>

      <section className="flex w-full flex-col gap-6 px-6 py-6 md:px-12 lg:px-20">
        <div className="flex w-full flex-col items-center gap-5 md:flex-row md:justify-between">
          <p className="w-full text-center text-sm font-bold text-[#737373] md:flex-1 md:text-left">
            Showing {startIndex + 1}–{Math.min(startIndex + productsPerPage, products.length)} of {products.length} results
          </p>
          <div className="flex w-full flex-1 items-center justify-center gap-4">
            <span className="text-sm font-bold text-[#737373]">Views:</span>
            <button type="button" onClick={() => setView("grid")} aria-label="Grid view" className={`flex h-10 w-10 items-center justify-center rounded-md border ${view === "grid" ? "border-[#23A6F0] bg-[#23A6F0] text-white" : "border-[#E8E8E8] text-[#252B42]"}`}><Grid2X2 size={18} /></button>
            <button type="button" onClick={() => setView("list")} aria-label="List view" className={`flex h-10 w-10 items-center justify-center rounded-md border ${view === "list" ? "border-[#23A6F0] bg-[#23A6F0] text-white" : "border-[#E8E8E8] text-[#252B42]"}`}><List size={18} /></button>
          </div>
          <div className="flex w-full flex-1 items-center justify-center gap-3 md:justify-end">
            <select value={sort} onChange={(event) => { setSort(event.target.value); setCurrentPage(1); }} className="rounded-md border border-[#E8E8E8] bg-[#F9F9F9] px-3 py-3 text-sm text-[#737373] outline-none">
              <option>Popularity</option><option>Price: Low to High</option><option>Price: High to Low</option>
            </select>
            <button type="button" className="rounded-md bg-[#23A6F0] px-5 py-3 text-sm font-bold text-white">Filter</button>
          </div>
        </div>

        <div className={`flex w-full flex-wrap ${view === "grid" ? "justify-center gap-y-8" : "flex-col gap-y-6"}`}>
          {visibleProducts.map((product) => (
            <div key={product.id} className={`flex justify-center px-2 ${view === "grid" ? "w-full sm:w-1/2 lg:w-1/4" : "w-full"}`}>
              <ProductCard
                productId={product.id}
                image={`https://placehold.co/600x700/F5F5F5/737373?text=Product+${product.id}`}
                title={product.title}
                category={product.category}
                oldPrice={product.oldPrice}
                price={product.price}
              />
            </div>
          ))}
        </div>

        <div className="flex w-full items-center justify-center py-8">
          <div className="flex overflow-hidden rounded-md border border-[#E8E8E8]">
            <button type="button" onClick={() => changePage(1)} disabled={currentPage === 1} className="bg-[#F3F3F3] px-4 py-4 text-sm font-bold text-[#737373] disabled:opacity-50">First</button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button key={page} type="button" onClick={() => changePage(page)} className={`px-5 py-4 text-sm font-bold ${currentPage === page ? "bg-[#23A6F0] text-white" : "bg-white text-[#23A6F0]"}`}>{page}</button>
            ))}
            <button type="button" onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages} className="bg-[#23A6F0] px-5 py-4 text-sm font-bold text-white disabled:opacity-50">Next</button>
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col items-center justify-center gap-10 bg-[#FAFAFA] px-6 py-12 md:flex-row md:flex-wrap md:justify-between md:px-12 lg:px-20">
        {brands.map((brand) => <span key={brand} className="text-2xl font-bold text-[#737373]">{brand}</span>)}
      </section>
    </main>
  );
}

export default ShopPage;
