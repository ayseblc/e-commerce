
import { useState } from "react";

import productSlide from "../assets/product-slide-1.jpg";

import menImage from "../assets/media bg-cover.png";
import womenImage from "../assets/media bg-cover-2.png";
import accessoriesImage from "../assets/media bg-cover-3.png";
import kidsImage from "../assets/media bg-cover-4.png";

import { ChevronLeft, ChevronRight } from "lucide-react";

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [productSlide];

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  const fashionCards = [
    { image: menImage, title: "MEN", height: "h-[500px]", width: "max-w-[323px]" },
    { image: womenImage, title: "WOMEN", height: "h-[500px]", width: "max-w-[323px]" },
    { image: accessoriesImage, title: "ACCESSORIES", height: "h-[242px]", width: "max-w-[325px]" },
    { image: kidsImage, title: "KIDS", height: "h-[242px]", width: "max-w-[325px]" },
  ];

  return (
    <main className="flex w-full flex-col">

      {/* HERO SECTION */}
      <section
        className="relative flex min-h-[705px] w-full flex-col items-center justify-center px-8 text-center"
        style={{
          backgroundImage: `url(${slides[currentSlide]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Previous Slide */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white"
        >
          <ChevronLeft size={36} strokeWidth={2} />
        </button>

        {/* Next Slide */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white"
        >
          <ChevronRight size={36} strokeWidth={2} />
        </button>

        {/* Hero Text */}
        <div className="flex flex-col items-center text-center">
          <p className="mb-6 text-base font-bold leading-6 text-white">
            SUMMER 2020
          </p>

          <h1 className="mb-6 text-[40px] font-bold leading-[50px] text-white">
            NEW COLLECTION
          </h1>

          <p className="mb-6 text-xl font-normal leading-[30px] text-white">
            We know how large objects will act,
            but things on a small scale.
          </p>

          <button
            type="button"
            className="bg-[#2DC071] px-8 py-3 text-2xl font-bold leading-8 text-white"
          >
            SHOP NOW
          </button>
        </div>
      </section>

      {/* EDITOR'S PICK SECTION */}
      <section className="flex w-full flex-col items-center bg-[#FAFAFA] px-6 py-12">

        {/* Section Heading */}
        <div className="mb-8 flex flex-col items-center text-center">
          <h2 className="mb-2 text-base font-bold leading-6 text-[#252B42]">
            EDITOR'S PICK
          </h2>

          <p className="max-w-[196px] text-xs leading-4 text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Fashion Cards */}
        <div className="flex w-full flex-col items-center gap-3">
          {fashionCards.map((card) => (
            <div
              key={card.title}
              className={`relative flex w-full ${card.width} ${card.height}`}
            >
              <img
                src={card.image}
                alt={`${card.title} fashion collection`}
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-4 left-4 flex items-center justify-center bg-white px-8 py-2">
                <span className="text-xs font-bold leading-6 text-[#252B42]">
                  {card.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
      <section className="flex w-full flex-col items-center bg-white px-6 py-12">

        {/* Section Heading */}
        <div className="mb-8 flex flex-col items-center text-center">
          <p className="mb-2 text-sm font-normal leading-5 text-[#737373]">
            Featured Products
          </p>

          <h2 className="mb-2 text-2xl font-bold leading-8 text-[#252B42]">
            BESTSELLER PRODUCTS
          </h2>

          <p className="max-w-[196px] text-xs leading-4 text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Product Cards will be added here using ProductCard */}
      </section>

    </main>
  );
}

export default HomePage;
