
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../components/ProductCard";

// Hero assets
import heroBackground from "../assets/product-slide-1-2.jpg";
import heroModel from "../assets/png-cover-2.png";
// Editor's Pick
import menImage from "../assets/media bg-cover-3.png";
import womenImage from "../assets/media bg-cover-4.png";
import accessoriesImage from "../assets/media bg-cover-2.png";
import kidsImage from "../assets/media bg-cover.png";

// Product images
import product1 from "../assets/product-cover-5.png";
import product2 from "../assets/product-cover-5-2.png";
import product3 from "../assets/product-cover-5-3.png";
import product4 from "../assets/product-cover-5-4.png";
import product5 from "../assets/product-cover-5-5.png";
import product6 from "../assets/product-cover-5-6.png";
import product7 from "../assets/product-cover-5-7.png";

function HomePage() {
  const categories = [
    { title: "MEN", image: menImage, height: "h-[500px]" },
    { title: "WOMEN", image: womenImage, height: "h-[500px]" },
    { title: "ACCESSORIES", image: accessoriesImage, height: "h-[242px]" },
    { title: "KIDS", image: kidsImage, height: "h-[242px]" },
  ];

  // Reihenfolge der Produktbilder wie im Figma
  const products = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product6,
    product7,
  ];

  return (
    <div className="flex w-full flex-col bg-white">

      {/* HERO SLIDE */}
      <section
        className="relative flex h-[650px] w-full flex-col items-center overflow-hidden"
        style={{
          backgroundImage: `url("${heroBackground}")`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >

        {/* HERO TEXT */}
        <div className="relative z-10 flex w-full flex-col items-center px-10 pt-9 text-center">

          <p className="text-xs font-bold text-white">
            SUMMER 2020
          </p>

          <h1 className="mt-5 text-[22px] font-bold leading-tight text-white">
            Vita Classic
            <br />
            Product
          </h1>

          <p className="mt-5 max-w-[220px] text-xs font-medium leading-5 text-white">
            We know how large objects will act,
            but things on a small scale.
          </p>

          <p className="mt-5 text-sm font-bold text-white">
            $16.48
          </p>

          {/* SLIDER CONTROLS */}
          <div className="mt-3 flex w-full items-center justify-between px-1">

            <button
              type="button"
              aria-label="Previous slide"
              className="text-white"
            >
              <ChevronLeft size={30} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              className="rounded-sm bg-[#2DC071] px-5 py-3 text-[10px] font-bold text-white"
            >
              ADD TO CART
            </button>

            <button
              type="button"
              aria-label="Next slide"
              className="text-white"
            >
              <ChevronRight size={30} strokeWidth={1.8} />
            </button>

          </div>
        </div>

        {/* MODEL */}
        <img
          src={heroModel}
          alt="Model wearing a white shirt"
          className="absolute bottom-0 left-0 z-0 h-[290px] w-full object-contain object-bottom"
        />

      </section>

      {/* EDITOR'S PICK */}
      <section className="flex flex-col items-center gap-6 bg-[#FAFAFA] px-4 py-12">

        <h2 className="text-2xl font-bold text-[#252B42]">
          EDITOR'S PICK
        </h2>

        <p className="text-center text-sm text-[#737373]">
          Problems trying to resolve the conflict between
        </p>

        <div className="flex w-full flex-col gap-4">

          {categories.map((category) => (
            <div
              key={category.title}
              className={`relative w-full ${category.height} overflow-hidden`}
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-4 left-4 bg-white px-8 py-3">
                <span className="text-sm font-bold text-[#252B42]">
                  {category.title}
                </span>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* BESTSELLER PRODUCTS */}
      <section className="flex flex-col items-center px-4 py-12">

        <p className="text-sm font-bold text-[#737373]">
          Featured Products
        </p>

        <h2 className="mb-2 mt-2 max-w-[220px] text-center text-2xl font-bold leading-tight text-[#252B42]">
          BESTSELLER PRODUCTS
        </h2>

        <p className="mb-8 text-center text-sm text-[#737373]">
          Problems trying to resolve the conflict between
        </p>

        <div className="flex w-full flex-col gap-6">

          {products.map((image, index) => (
            <ProductCard
              key={index}
              image={image}
              title="Graphic Design"
              category="English Department"
              oldPrice="$16.48"
              price="$6.48"
            />
          ))}

        </div>
      </section>

    </div>
  );
}

export default HomePage;
