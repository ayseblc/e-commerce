
import productSlide from "../assets/product-slide-1.jpg";
import menImage from "../assets/col-md-6.png";
import secondImage from "../assets/col-md-3.png";
import thirdImage from "../assets/col-md-3-2.png";

import { ChevronLeft, ChevronRight } from "lucide-react";

function HomePage() {
  return (
    <main className="flex flex-col w-full">

      {/* HERO SECTION */}
      <section
        className="relative flex min-h-[705px] flex-col items-center justify-center px-8 text-center"
        style={{
          backgroundImage: `url(${productSlide})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Previous Slide */}
        <button
          type="button"
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white"
        >
          <ChevronLeft size={36} strokeWidth={2} />
        </button>

        {/* Next Slide */}
        <button
          type="button"
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white"
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
            className="bg-green-500 px-8 py-3 text-2xl font-bold leading-8 text-white"
          >
            SHOP NOW
          </button>

        </div>
      </section>

      {/* EDITOR'S PICK SECTION */}
      <section className="flex w-full flex-col items-center bg-white px-6 py-12">

        {/* Section Heading */}
        <div className="mb-8 flex flex-col items-center text-center">

          <h2 className="mb-2 text-2xl font-bold leading-8 text-[#252B42]">
            EDITOR'S PICK
          </h2>

          <p className="max-w-[196px] text-sm font-normal leading-5 text-[#737373]">
            Problems trying to resolve the conflict between
          </p>

        </div>

        {/* Fashion Cards */}
        <div className="flex w-full flex-col items-center gap-4">

          {/* MEN */}
          <div className="relative flex w-full max-w-[323px]">
            <img
              src={menImage}
              alt="Men fashion collection"
              className="h-[500px] w-full object-cover"
            />

            <div className="absolute bottom-4 left-4 flex items-center justify-center bg-white px-8 py-2">
              <span className="text-base font-bold leading-6 text-[#252B42]">
                MEN
              </span>
            </div>
          </div>

          {/* Second Fashion Card */}
          <div className="relative flex w-full max-w-[323px]">
            <img
              src={secondImage}
              alt="Fashion collection"
              className="h-[500px] w-full object-cover"
            />
          </div>

          {/* Third Fashion Card */}
          <div className="relative flex w-full max-w-[323px]">
            <img
              src={thirdImage}
              alt="Fashion collection"
              className="h-[500px] w-full object-cover"
            />
          </div>

        </div>
      </section>

    </main>
  );
}

export default HomePage;
