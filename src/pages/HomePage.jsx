
import productSlide from "../assets/product-slide-1.jpg";
import menImage from "../assets/col-md-6.png";
import secondImage from "../assets/col-md-3.png";
import thirdImage from "../assets/col-md-3-2.png";

import { ChevronLeft, ChevronRight } from "lucide-react";

function HomePage() {
  return (
    <main className="flex flex-col">
      {/* HERO SECTION */}
      <section
        className="relative flex flex-col items-center justify-center px-8 text-center"
        style={{
          backgroundImage: `url(${productSlide})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "705px",
        }}
      >
        <button
          type="button"
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white"
        >
          <ChevronLeft size={36} />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white"
        >
          <ChevronRight size={36} />
        </button>

        <div className="flex flex-col items-center text-center">
          <p className="mb-6 text-base font-bold leading-6 text-white">
            SUMMER 2020
          </p>

          <h1 className="mb-6 text-[40px] font-bold leading-[50px] text-white">
            NEW COLLECTION
          </h1>

          <p className="mb-6 text-xl leading-[30px] text-white">
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

      {/* EDITOR'S PICK */}
      <section className="flex flex-col items-center bg-white px-6 py-12">
        <div className="mb-8 flex flex-col items-center text-center">
          <h2 className="mb-2 text-2xl font-bold text-[#252B42]">
            EDITOR'S PICK
          </h2>

          <p className="max-w-[250px] text-sm leading-5 text-gray-500">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Fashion Cards */}
        <div className="flex w-full flex-col items-center gap-4">
          <div className="relative flex w-full">
            <img
              src={menImage}
              alt="Men fashion collection"
              className="h-[500px] w-full object-cover"
            />

            <div className="absolute bottom-4 left-4 flex bg-white px-8 py-2">
              <span className="text-xs font-bold text-[#252B42]">
                MEN
              </span>
            </div>
          </div>

          <div className="relative flex w-full">
            <img
              src={secondImage}
              alt="Fashion collection"
              className="h-[500px] w-full object-cover"
            />
          </div>

          <div className="relative flex w-full">
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
