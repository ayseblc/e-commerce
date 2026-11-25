
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
            <div className="relative flex h-[500px] w-full items-center overflow-hidden bg-[#23A6F0] md:h-[550px] lg:h-[600px]">

              {/* BACKGROUND IMAGE */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover object-center md:object-contain md:object-right"
              />

              {/* TEXT CONTENT */}
              <div className="relative z-10 flex w-full flex-col items-center gap-5 px-8 text-center md:w-[55%] md:items-start md:pl-12 md:text-left lg:pl-24">

                <p className="text-sm font-bold text-white">
                  {slide.subtitle}
                </p>

                <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  {slide.title}
                </h1>

                <p className="max-w-[380px] text-sm leading-6 text-white md:text-base">
                  {slide.description}
                </p>

                <button className="rounded-md bg-[#2DC071] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#27ae60]">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* PREVIOUS BUTTON */}
      <button
        onClick={() => swiperInstance?.slidePrev()}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 text-white md:left-6"
      >
        <ChevronLeft size={36} />
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={() => swiperInstance?.slideNext()}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 text-white md:right-6"
      >
        <ChevronRight size={36} />
      </button>
    </section>
  );
}

export default Slider;
