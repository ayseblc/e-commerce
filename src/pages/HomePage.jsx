
import productSlide from "../assets/product-slide-1.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

function HomePage() {
  return (
    <main className="flex flex-col">
      <section
        className="relative flex flex-col items-center justify-center text-center px-8"
        style={{
          backgroundImage: `url(${productSlide})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "705px",
        }}
      >
        {/* Left Arrow */}
        <button
          type="button"
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white"
        >
          <ChevronLeft size={36} strokeWidth={2} />
        </button>

        {/* Right Arrow */}
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
    </main>
  );
}

export default HomePage;
