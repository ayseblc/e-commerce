
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";

import heroImage from "../assets/product-slide-1.jpg";
import heroBackground from "../assets/product-slide-1-2.jpg";
import heroModel from "../assets/png-cover.2.png";

import coupleImage from "../assets/asian-woman-man-with-winter-clothes 1.png";

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

import contentImage1 from "../assets/unsplash_gEZkP23pLZ4.png";
import contentImage2 from "../assets/unsplash_CuEvrPd3NYc.png";
import contentImage3 from "../assets/unsplash_k0rVudBoB4c.png";

function HomePage() {
  const [vitaSwiper, setVitaSwiper] = useState(null);
  const [vitaSlide, setVitaSlide] = useState(0);

  const heroSlides = [
    {
      image: heroImage,
      title: "NEW COLLECTION",
      subtitle: "SUMMER 2020",
      description:
        "We know how large objects will act, but things on a small scale.",
      buttonText: "SHOP NOW",
    },
    {
      image: heroBackground,
      title: "VITA CLASSIC",
      subtitle: "SUMMER COLLECTION",
      description:
        "We know how large objects will act, but things on a small scale.",
      buttonText: "SHOP NOW",
    },
  ];

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

  const contentCards = [
    {
      image: contentImage1,
      title: "Loudest à la Madison #1 (L'integral)",
    },
    {
      image: contentImage2,
      title: "Loudest à la Madison #1 (L'integral)",
    },
    {
      image: contentImage3,
      title: "Loudest à la Madison #1 (L'integral)",
    },
  ];

  function ContentCard({ card }) {
    return (
      <article className="flex w-full flex-col overflow-hidden bg-white shadow-md">
        <div className="relative h-[220px] w-full overflow-hidden md:h-[180px] lg:h-[200px]">
          <img
            src={card.image}
            alt={card.title}
            className="h-full w-full object-cover"
          />

          <span className="absolute left-4 top-4 bg-[#E74040] px-3 py-1 text-xs font-bold text-white">
            NEW
          </span>
        </div>

        <div className="flex min-h-[260px] w-full flex-col gap-4 px-5 py-6">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="text-[#8EC2F2]">Google</span>
            <span className="text-[#737373]">Trending</span>
            <span className="text-[#737373]">New</span>
          </div>

          <h3 className="text-base font-bold leading-6 text-[#252B42]">
            {card.title}
          </h3>

          <p className="text-sm leading-5 text-[#737373]">
            We focus on ergonomics and meeting you where you work.
            It's only a keystroke away.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#737373]">
            <span>◷ 22 April 2021</span>
            <span>▣ 10 comments</span>
          </div>

          <button className="mt-auto flex items-center gap-2 pt-2 text-sm font-bold text-[#737373]">
            Learn More
            <ChevronRight size={16} className="text-[#23A6F0]" />
          </button>
        </div>
      </article>
    );
  }

  return (
    <main className="flex w-full flex-col bg-white">

      {/* HERO SLIDER */}
      <Slider slides={heroSlides} />

      {/* EDITOR'S PICK */}
      <section className="flex w-full flex-col items-center gap-6 bg-[#FAFAFA] px-4 py-12 md:px-8 lg:px-16 lg:py-16">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-bold text-[#252B42]">
            EDITOR'S PICK
          </h2>

          <p className="text-sm text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="flex w-full flex-col gap-4 md:h-[500px] md:flex-row md:gap-4 lg:max-w-[1050px]">

          {/* MEN */}
          <div className="relative h-[500px] w-full overflow-hidden md:w-[50%]">
            <img
              src={menImage}
              alt="Men"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-4 left-4 bg-white px-8 py-3">
              <span className="text-sm font-bold text-[#252B42]">
                MEN
              </span>
            </div>
          </div>

          {/* WOMEN */}
          <div className="relative h-[500px] w-full overflow-hidden md:w-[25%]">
            <img
              src={womenImage}
              alt="Women"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-4 left-4 bg-white px-8 py-3">
              <span className="text-sm font-bold text-[#252B42]">
                WOMEN
              </span>
            </div>
          </div>

          {/* ACCESSORIES AND KIDS */}
          <div className="flex w-full flex-col gap-4 md:w-[25%]">
            <div className="relative h-[242px] w-full overflow-hidden">
              <img
                src={accessoriesImage}
                alt="Accessories"
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-4 left-4 bg-white px-5 py-3">
                <span className="text-sm font-bold text-[#252B42]">
                  ACCESSORIES
                </span>
              </div>
            </div>

            <div className="relative h-[242px] w-full overflow-hidden">
              <img
                src={kidsImage}
                alt="Kids"
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-4 left-4 bg-white px-8 py-3">
                <span className="text-sm font-bold text-[#252B42]">
                  KIDS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BESTSELLER PRODUCTS */}
      <section className="flex w-full flex-col items-center px-4 py-12 md:px-8 lg:px-16 lg:py-16">
        <p className="text-sm font-bold text-[#737373]">
          Featured Products
        </p>

        <h2 className="mb-2 mt-2 text-center text-2xl font-bold text-[#252B42]">
          BESTSELLER PRODUCTS
        </h2>

        <p className="mb-8 text-center text-sm text-[#737373]">
          Problems trying to resolve the conflict between
        </p>

        <div className="flex w-full flex-wrap justify-center gap-x-6 gap-y-8 lg:max-w-[1050px] lg:gap-y-12">
          {products.map((image, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-[calc(25%-18px)]"
            >
              <ProductCard
                image={image}
                title="Graphic Design"
                category="English Department"
                oldPrice="$16.48"
                price="$6.48"
              />
            </div>
          ))}
        </div>
      </section>

      {/* VITA CLASSIC SLIDER */}
      <section className="relative w-full overflow-hidden bg-[#23856D]">

        <Swiper
          onSwiper={setVitaSwiper}
          onSlideChange={(swiper) => setVitaSlide(swiper.realIndex)}
          slidesPerView={1}
          loop={true}
          className="w-full"
        >
          {[1, 2].map((slide) => (
            <SwiperSlide key={slide}>
              <div className="relative flex min-h-[650px] w-full flex-col items-center overflow-hidden md:min-h-[500px] md:flex-row md:justify-between">

                {/* BACKGROUND */}
                <img
                  src={heroBackground}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* TEXT CONTENT */}
                <div className="relative z-10 flex w-full flex-col items-center px-8 py-12 text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:pl-24">
                  <p className="text-xs font-bold text-white">
                    SUMMER 2020
                  </p>

                  <h2 className="mt-6 text-3xl font-bold text-white lg:text-4xl">
                    Vita Classic
                    <br />
                    Product
                  </h2>

                  <p className="mt-5 max-w-[300px] text-sm leading-6 text-white">
                    We know how large objects will act, but things on a small scale.
                  </p>

                  <div className="mt-6 flex items-center gap-6">
                    <span className="text-base font-bold text-white">
                      $16.48
                    </span>

                    <button className="h-[48px] bg-[#2DC071] px-6 text-xs font-bold text-white">
                      ADD TO CART
                    </button>
                  </div>
                </div>

                {/* MODEL */}
                <div className="relative z-10 flex h-[350px] w-full items-end justify-center md:h-[500px] md:w-1/2">
                  <img
                    src={heroModel}
                    alt="Vita Classic model"
                    className="h-full max-w-full object-contain object-bottom"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* PREVIOUS ARROW */}
        <button
          onClick={() => vitaSwiper?.slidePrev()}
          aria-label="Previous Vita slide"
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 text-white md:left-8"
        >
          <ChevronLeft size={36} />
        </button>

        {/* NEXT ARROW */}
        <button
          onClick={() => vitaSwiper?.slideNext()}
          aria-label="Next Vita slide"
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 text-white md:right-8"
        >
          <ChevronRight size={36} />
        </button>

        {/* PROGRESS INDICATOR */}
        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => vitaSwiper?.slideToLoop(index)}
              aria-label={`Go to Vita slide ${index + 1}`}
              className={`h-2.5 w-8 rounded-full transition-colors ${
                vitaSlide === index
                  ? "bg-white"
                  : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* PART OF THE NEURAL UNIVERSE */}
      <section className="flex w-full flex-col items-center gap-8 overflow-hidden bg-white px-6 py-16 md:flex-row md:justify-center md:gap-12 md:px-12 lg:gap-20 lg:px-20 lg:py-24">
        <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
          <p className="text-sm font-bold text-[#BDBDBD]">
            SUMMER 2020
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#252B42] lg:text-4xl">
            Part of the Neural Universe
          </h2>

          <p className="mt-4 max-w-[400px] text-base leading-7 text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button className="h-[48px] w-[156px] bg-[#23A6F0] text-sm font-bold text-white">
              BUY NOW
            </button>

            <button className="h-[48px] w-[165px] border border-[#23A6F0] bg-white text-sm font-bold text-[#23A6F0]">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex w-full justify-center md:w-1/2">
          <img
            src={coupleImage}
            alt="Couple wearing winter clothes"
            className="h-auto w-full max-w-[500px] object-contain"
          />
        </div>
      </section>

      {/* FEATURED POSTS */}
      <section className="flex w-full flex-col items-center bg-white px-4 py-16 md:px-8 lg:px-16">
        <div className="flex w-full flex-col items-center text-center">
          <p className="text-sm font-bold text-[#23A6F0]">
            Practice Advice
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#252B42] lg:text-4xl">
            Featured Posts
          </h2>

          <p className="mt-4 max-w-[450px] text-sm leading-5 text-[#737373]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics.
          </p>
        </div>

        <div className="mt-10 flex w-full flex-wrap justify-center gap-8 lg:max-w-[1050px] lg:gap-6">
          {contentCards.map((card, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)]"
            >
              <ContentCard card={card} />
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

export default HomePage;
