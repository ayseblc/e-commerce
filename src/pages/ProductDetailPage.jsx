import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Eye, Star } from "lucide-react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const brands = ["Hooli", "Lyft", "LEAF", "stripe", "AWS", "Reddit"];
const tabs = ["Description", "Additional Information", "Reviews (0)"];

function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("Description");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("bg-[#23A6F0]");

  if (!product) {
    return (
      <main className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-2xl font-bold text-[#252B42]">Product not found</h1>
        <Link to="/shop" className="rounded-md bg-[#23A6F0] px-5 py-3 text-sm font-bold text-white">Back to Shop</Link>
      </main>
    );
  }

  const gallery = [
    product.image,
    product.image.replace("700x800", "700x800").replace("Product+", "Product+View+2+"),
    product.image.replace("700x800", "700x800").replace("Product+", "Product+View+3+"),
  ];

  const previousImage = () => setActiveImage((current) => (current === 0 ? gallery.length - 1 : current - 1));
  const nextImage = () => setActiveImage((current) => (current === gallery.length - 1 ? 0 : current + 1));

  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 4);

  return (
    <main className="flex w-full flex-col bg-white">
      <section className="flex w-full flex-col bg-[#FAFAFA]">
        <div className="mx-auto flex w-full max-w-[1120px] items-center gap-3 px-6 py-6 text-xs font-bold md:px-10">
          <Link to="/" className="text-[#252B42]">Home</Link>
          <ChevronRight size={14} className="text-[#BDBDBD]" />
          <Link to="/shop" className="text-[#737373]">Shop</Link>
        </div>

        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-8 px-6 pb-10 md:flex-row md:items-start md:gap-7 md:px-10 md:pb-12">
          <div className="flex w-full flex-col gap-4 md:w-1/2">
            <div className="relative h-[320px] w-full overflow-hidden bg-[#F1F1F1] sm:h-[420px] md:h-[400px] lg:h-[450px]">
              <img src={gallery[activeImage]} alt={product.title} className="h-full w-full object-cover" />
              <button type="button" onClick={previousImage} aria-label="Previous product image" className="absolute left-3 top-1/2 flex -translate-y-1/2 items-center justify-center text-white"><ChevronLeft size={34} /></button>
              <button type="button" onClick={nextImage} aria-label="Next product image" className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center text-white"><ChevronRight size={34} /></button>
            </div>
            <div className="flex gap-4">
              {gallery.map((image, index) => (
                <button key={index} type="button" onClick={() => setActiveImage(index)} aria-label={`Show product image ${index + 1}`} className={`h-16 w-16 overflow-hidden border-2 ${activeImage === index ? "border-[#23A6F0]" : "border-transparent"}`}>
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col md:w-1/2 md:pt-1">
            <h1 className="text-xl font-bold text-[#252B42]">{product.title}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-0.5 text-[#F3CD03]">{[1,2,3,4,5].map((star) => <Star key={star} size={15} fill="currentColor" />)}</div>
              <span className="text-xs font-bold text-[#737373]">10 Reviews</span>
            </div>
            <p className="mt-4 text-xl font-bold text-[#252B42]">{product.price}</p>
            <p className="mt-1 text-xs font-bold text-[#737373]">Availability : <span className="text-[#23A6A7]">In Stock</span></p>
            <p className="mt-5 border-b border-[#E8E8E8] pb-5 text-xs leading-5 text-[#737373]">{product.description}</p>

            <div className="mt-5 flex items-center gap-2">
              {[
                { color: "blue", cls: "bg-[#23A6F0]" },
                { color: "green", cls: "bg-[#2DC071]" },
                { color: "orange", cls: "bg-[#E77C40]" },
                { color: "navy", cls: "bg-[#252B42]" },
              ].map((item) => (
                <button key={item.color} type="button" onClick={() => setSelectedColor(item.cls)} aria-label={`Select ${item.color} color`} className={`h-7 w-7 rounded-full border-2 p-0.5 ${selectedColor === item.cls ? "border-[#252B42]" : "border-transparent"}`}>
                  <span className={`block h-full w-full rounded-full ${item.cls}`} />
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <button type="button" className="h-9 rounded-sm bg-[#23A6F0] px-4 text-xs font-bold text-white">Select Options</button>
              <button type="button" aria-label="Add to wishlist" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E8E8] text-[#252B42]"><Heart size={16} /></button>
              <button type="button" aria-label="Add to cart" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E8E8] text-[#252B42]"><ShoppingCart size={16} /></button>
              <button type="button" aria-label="View product" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E8E8] text-[#252B42]"><Eye size={16} /></button>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-[#737373]">
              <span>Quantity</span>
              <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="h-7 w-7 border border-[#E8E8E8]">−</button>
              <span className="min-w-5 text-center">{quantity}</span>
              <button type="button" onClick={() => setQuantity(quantity + 1)} className="h-7 w-7 border border-[#E8E8E8]">+</button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[1120px] flex-col px-6 py-8 md:px-10 md:py-10">
        <div className="flex flex-wrap items-center justify-center gap-6 border-b border-[#E8E8E8] pb-4 text-[11px] font-bold text-[#737373] sm:gap-10">
          {tabs.map((tab) => <button key={tab} type="button" onClick={() => setActiveTab(tab)} className={`pb-2 ${activeTab === tab ? "border-b-2 border-[#23856D] text-[#252B42]" : ""}`}>{tab}</button>)}
        </div>

        {activeTab === "Description" && (
          <div className="flex flex-col gap-7 py-8 md:flex-row md:gap-6">
            <div className="flex w-full flex-col gap-4 md:w-1/3">
              <div className="h-[230px] w-full overflow-hidden rounded-sm bg-[#F1E4E2] sm:h-[300px] md:h-[250px]"><img src="https://placehold.co/600x700/E8B8B4/252B42?text=Interior" alt="Product interior" className="h-full w-full object-cover" /></div>
              <h2 className="text-base font-bold text-[#252B42]">the quick fox jumps over</h2>
              <p className="text-xs leading-5 text-[#737373]">{product.description}</p>
              <p className="text-xs leading-5 text-[#737373]">{product.description}</p>
            </div>
            <div className="flex w-full flex-col gap-4 md:w-1/3">
              <h2 className="text-base font-bold text-[#252B42]">the quick fox jumps over</h2>
              <p className="text-xs leading-5 text-[#737373]">{product.description}</p>
              <h2 className="pt-2 text-base font-bold text-[#252B42]">the quick fox jumps over</h2>
              <ul className="flex flex-col gap-2 text-xs text-[#737373]">{[1,2,3,4].map((item) => <li key={item} className="flex items-center gap-2"><ChevronRight size={14} />the quick fox jumps over the lazy dog</li>)}</ul>
            </div>
            <div className="flex w-full flex-col gap-4 md:w-1/3">
              <h2 className="text-base font-bold text-[#252B42]">the quick fox jumps over</h2>
              <ul className="flex flex-col gap-2 text-xs text-[#737373]">{[1,2,3,4].map((item) => <li key={item} className="flex items-center gap-2"><ChevronRight size={14} />the quick fox jumps over the lazy dog</li>)}</ul>
              <h2 className="pt-3 text-base font-bold text-[#252B42]">the quick fox jumps over</h2>
              <ul className="flex flex-col gap-2 text-xs text-[#737373]">{[1,2,3,4].map((item) => <li key={item} className="flex items-center gap-2"><ChevronRight size={14} />the quick fox jumps over the lazy dog</li>)}</ul>
            </div>
          </div>
        )}
        {activeTab === "Additional Information" && <div className="flex flex-col gap-3 py-8 text-sm text-[#737373]"><p>Product: {product.title}</p><p>Category: {product.category}</p><p>Availability: In Stock</p></div>}
        {activeTab === "Reviews (0)" && <div className="flex flex-col items-center gap-3 py-10 text-center"><h2 className="text-base font-bold text-[#252B42]">Customer Reviews</h2><p className="text-sm text-[#737373]">There are no reviews yet.</p></div>}
      </section>

      <section className="flex w-full flex-col items-center bg-[#FAFAFA] px-6 py-10 md:px-10 md:py-12">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col">
          <h2 className="border-b border-[#E8E8E8] pb-5 text-base font-bold text-[#252B42]">BESTSELLER PRODUCTS</h2>
          <div className="mt-8 flex w-full flex-wrap justify-center gap-y-8">
            {relatedProducts.map((item) => (
              <div key={item.id} className="flex w-full justify-center px-2 sm:w-1/2 lg:w-1/4">
                <ProductCard productId={item.id} image={item.image} title={item.title} category={item.category} oldPrice={item.oldPrice} price={item.price} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col items-center justify-center gap-8 bg-[#FAFAFA] px-6 py-10 sm:flex-row sm:flex-wrap sm:gap-12 md:gap-16 md:py-12">
        {brands.map((brand) => <span key={brand} className="text-2xl font-bold tracking-tight text-[#737373]">{brand}</span>)}
      </section>
    </main>
  );
}

export default ProductDetailPage;
