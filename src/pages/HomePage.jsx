
import productSlide from "../assets/product-slide-1.jpg";

import menImage from "../assets/media bg-cover-3.png";
import womenImage from "../assets/media bg-cover-4.png";
import accessoriesImage from "../assets/media bg-cover-2.png";
import kidsImage from "../assets/media bg-cover.png";

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

  return (
    <main className="flex w-full flex-col">

      {/* HERO SECTION */}
      <section
        className="relative flex min-h-[400px] w-full flex-col items-center justify-center px-6 text-center md:min-h-[705px]"
        style={{
          backgroundImage: `url(${productSlide})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Previous Arrow */}
        <button
          type="button"
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-white md:left-4"
        >
          <ChevronLeft size={36} strokeWidth={2} />
        </button>

        {/* Next Arrow */}
        <button
          type="button"
          aria-label="Next slide"
          className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-white md:right-4"
        >
          <ChevronRight size={36} strokeWidth={2} />
        </button>

        {/* Hero Content */}
        <div className="flex max-w-[600px] flex-col items-center text-center">

          <p className="mb-6 text-xs font-bold leading-4 text-white md:text-base md:leading-6">
            SUMMER 2020
          </p>

          <h1 className="mb-6 text-[32px] font-bold leading-[40px] text-white md:text-[40px] md:leading-[50px]">
            NEW COLLECTION
          </h1>

          <p className="mb-6 max-w-[350px] text-sm font-normal leading-5 text-white md:max-w-none md:text-xl md:leading-[30px]">
            We know how large objects will act,
            but things on a small scale.
          </p>

          <button
            type="button"
            className="bg-[#2DC071] px-8 py-3 text-base font-bold leading-6 text-white md:px-8 md:py-3 md:text-2xl md:leading-8"
          >
            SHOP NOW
          </button>

        </div>
      </section>


      {/* EDITOR'S PICK SECTION */}
      <section className="flex w-full flex-col items-center bg-[#FAFAFA] px-6 py-12 md:py-16">

        {/* Section Heading */}
        <div className="mb-8 flex flex-col items-center text-center">

          <h2 className="mb-2 text-base font-bold leading-6 text-[#252B42]">
            EDITOR'S PICK
          </h2>

          <p className="max-w-[196px] text-xs font-normal leading-4 text-[#737373]">
            Problems trying to resolve the conflict between
          </p>

        </div>


        {/* Fashion Cards */}
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

              {/* Category Label */}
              <div className="absolute bottom-4 left-4 flex h-10 min-w-[80px] items-center justify-center bg-white px-4">
                <span className="text-[10px] font-bold leading-4 text-[#252B42]">
                  {card.title}
                </span>
              </div>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}

export default HomePage;
