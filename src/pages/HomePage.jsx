
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
        <button
          type="button"
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
        >
          <ChevronLeft size={32} strokeWidth={2} />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
        >
          <ChevronRight size={32} strokeWidth={2} />
        </button>

        {/* Hero Content */}
        <div className="flex flex-col items-center text-center">
          <p className="text-white text-base font-bold leading-6 mb-6">
            SUMMER 2020
          </p>

          <h1 className="text-white text-[40px] font-bold leading-[50px] mb-6">
            NEW COLLECTION
          </h1>

          <p className="text-white text-xl leading-[30px] mb-6">
            We know how large objects will act,
            but things on a small scale.
          </p>

          <button
            type="button"
            className="bg-green-500 text-white text-2xl font-bold leading-8 px-8 py-3"
          >
            SHOP NOW
          </button>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
