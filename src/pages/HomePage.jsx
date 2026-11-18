
import productSlide from "../assets/product-slide-1.jpg";

import menImage from "../assets/media bg-cover-3.png";
import womenImage from "../assets/media bg-cover-4.png";
import accessoriesImage from "../assets/media bg-cover-2.png";
import kidsImage from "../assets/media bg-cover.png";

import product1 from "../assets/product-cover-5-7.png";
import product2 from "../assets/product-cover-5-6.png";
import product3 from "../assets/product-cover-5-5.png";
import product4 from "../assets/product-cover-5-4.png";
import product5 from "../assets/product-cover-5-3.png";
import product6 from "../assets/product-cover-5-2.png";
import product7 from "../assets/product-cover-5.png";

import ProductCard from "../components/ProductCard";

import { ChevronLeft, ChevronRight } from "lucide-react";

function HomePage() {
  const fashionCards = [
    {
      image: menImage,
      title: "MEN",
      height: "h-[500px]",
    },
    {
      image: womenImage,
      title: "WOMEN",
      height: "h-[500px]",
    },
    {
      image: accessoriesImage,
      title: "ACCESSORIES",
      height: "h-[242px]",
    },
    {
      image: kidsImage,
      title: "KIDS",
      height: "h-[242px]",
    },
  ];

  const products = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
  ];

  return (
    <main className="mx-auto flex w-full max-w-[414px] flex-col bg-white">

      {/* HERO SECTION */}
      <section
        className="relative flex h-[401px] w-full flex-col items-center justify-center px-6 text-center"
        style={{
          backgroundImage: `url(${productSlide})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button
          type="button"
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-white"
        >
          <ChevronLeft size={28} strokeWidth={2} />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-white"
        >
          <ChevronRight size={28} strokeWidth={2} />
        </button>

        <div className="flex w-full max-w-[291px] flex-col items-center text-center">
          <p className="mb-6 text-xs font-bold leading-6 text-white">
            SUMMER 2020
          </p>

          <h1 className="mb-6 max-w-[268px] text-[40px] font-bold leading-[50px] text-white">
            NEW COLLECTION
          </h1>

          <p className="mb-6 max-w-[291px] text-sm font-normal leading-5 text-white">
            We know how large objects will act,
            but things on a small scale.
          </p>

          <button
            type="button"
            className="flex h-8 w-[141px] items-center justify-center bg-[#2DC071] text-base font-bold leading-6 text-white"
          >
            SHOP NOW
          </button>
        </div>
      </section>

      {/* EDITOR'S PICK */}
      <section className="flex w-full flex-col items-center bg-[#FAFAFA] px-0 py-12">

        <div className="mb-8 flex flex-col items-center text-center">
          <h2 className="mb-2 text-base font-bold leading-6 text-[#252B42]">
            EDITOR'S PICK
          </h2>

          <p className="max-w-[196px] text-xs font-normal leading-4 text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          {fashionCards.map((card) => (
            <div
              key={card.title}
              className={`relative flex w-full max-w-[323px] overflow-hidden ${card.height}`}
            >
              <img
                src={card.image}
                alt={`${card.title} fashion collection`}
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-4 left-4 flex h-10 min-w-[80px] items-center justify-center bg-white px-4">
                <span className="text-[10px] font-bold leading-4 text-[#252B42]">
                  {card.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BESTSELLER PRODUCTS */}
      <section className="flex w-full flex-col items-center gap-8 bg-white px-6 py-12">

        <div className="flex flex-col items-center text-center">
          <p className="mb-2 text-sm font-bold text-[#737373]">
            Featured Products
          </p>

          <h2 className="mb-2 text-2xl font-bold text-[#252B42]">
            BESTSELLER PRODUCTS
          </h2>

          <p className="max-w-[240px] text-sm text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="flex w-full flex-col gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product}
              title="Graphic Design"
              category="English Department"
              oldPrice="$16.48"
              price="$6.48"
            />
          ))}
        </div>

      </section>

    </main>
  );
}

export default HomePage;
