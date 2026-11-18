
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../components/ProductCard";

import heroImage from "../assets/product-slide-1.jpg";

import menImage from "../assets/media bg-cover-3.png";
import womenImage from "../assets/media bg-cover-4.png";
import accessoriesImage from "../assets/media bg-cover-2.png";
import kidsImage from "../assets/media bg-cover.png";

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

  // Produktreihenfolge wie in deinem Figma
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

      {/* HERO */}
      <section className="relative flex h-[390px] w-full flex-col items-center justify-center overflow-hidden bg-[#23856D] px-8 text-center">

        <img
          src={heroImage}
          alt="Summer collection"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        <button
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center"
        >
          <ChevronLeft size={36} color="#FFFFFF" strokeWidth={2} />
        </button>

        <div className="relative z-10 flex flex-col items-center gap-5">
          <p className="text-sm font-bold text-white">
            SUMMER 2020
          </p>

          <h1 className="text-4xl font-bold text-white">
            NEW COLLECTION
          </h1>

          <p className="text-base text-white">
            We know how large objects will act,
            but things on a small scale.
          </p>

          <button className="rounded-md bg-[#2DC071] px-8 py-3 text-sm font-bold text-white">
            SHOP NOW
          </button>
        </div>

        <button
          aria-label="Next slide"
          className="absolute right-2 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center"
        >
          <ChevronRight size={36} color="#FFFFFF" strokeWidth={2} />
        </button>

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
