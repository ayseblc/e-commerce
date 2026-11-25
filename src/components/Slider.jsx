
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

function Slider({ slides }) {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="relative flex w-full overflow-hidden">
      <Swiper
        onSwiper={setSwiperInstance}
        slidesPerView={1}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 px-8 text-center">
                <p className="text-sm font-bold text-white">
                  {slide.subtitle}
                </p>

                <h1 className="text-4xl font-bold text-white">
                  {slide.title}
                </h1>

                <p className="text-base text-white">
                  {slide.description}
                </p>

                <button className="rounded-md bg-[#2DC071] px-8 py-3 text-sm font-bold text-white">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperInstance?.slidePrev()}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 text-white"
      >
        <ChevronLeft size={36} />
      </button>

      <button
        onClick={() => swiperInstance?.slideNext()}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 text-white"
      >
        <ChevronRight size={36} />
      </button>
    </section>
  );
}

export default Slider;
