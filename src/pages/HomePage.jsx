import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../components/ProductCard";

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
  const categories = [
    { title: "MEN", image: menImage, height: "h-[500px]" },
    { title: "WOMEN", image: womenImage, height: "h-[500px]" },
    { title: "ACCESSORIES", image: accessoriesImage, height: "h-[242px]" },
    { title: "KIDS", image: kidsImage, height: "h-[242px]" },
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
      <article className="flex w-full flex-col bg-white shadow-md">
        {/* IMAGE */}
        <div className="relative h-[320px] w-full overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="h-full w-full object-cover"
          />

          <span className="absolute left-4 top-4 bg-[#E74040] px-3 py-1 text-xs font-bold text-white">
            NEW
          </span>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 -mt-4 flex min-h-[380px] w-full flex-col gap-4 px-5 py-6">
          {/* TAGS */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="text-[#8EC2F2]">Google</span>
            <span className="text-[#737373]">Trending</span>
            <span className="text-[#737373]">New</span>
          </div>

          {/* TITLE */}
          <h3 className="text-base font-bold leading-6 text-[#252B42]">
            {card.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-sm leading-5 text-[#737373]">
            We focus on ergonomics and meeting you where you work.
            It's only a keystroke away.
          </p>

          {/* DATE AND COMMENTS */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#737373]">
            <span className="flex items-center gap-1">
              <span className="text-[#23A6F0]">◷</span>
              22 April 2021
            </span>

            <span className="flex items-center gap-1">
              <span className="text-[#23856D]">▣</span>
              10 comments
            </span>
          </div>

          {/* LEARN MORE */}
          <button className="mt-auto flex items-center gap-2 pt-2 text-sm font-bold text-[#737373]">
            Learn More
            <ChevronRight size={16} className="text-[#23A6F0]" />
          </button>
        </div>
      </article>
    );
  }

  return (
    <div className="flex w-full flex-col bg-white">
      {/* HERO */}
      <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-white">
        <img
          src={heroImage}
          alt="Summer collection"
          className="block h-auto w-full object-contain object-center"
        />

        <button
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 text-white"
        >
          <ChevronLeft size={36} />
        </button>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 px-8 text-center">
          <p className="text-sm font-bold text-white">SUMMER 2020</p>

          <h1 className="text-4xl font-bold text-white">
            NEW COLLECTION
          </h1>

          <p className="text-base text-white">
            We know how large objects will act,
            but things on a small scale.
          </p>

          <button className="rounded-md bg-[#2DC071] px-8 py-3 text-sm font-bold text-white">
            SHOP NOW
          </button>
        </div>

        <button
          aria-label="Next slide"
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 text-white"
        >
          <ChevronRight size={36} />
        </button>
      </section>

      {/* EDITOR'S PICK */}
      <section className="flex flex-col items-center gap-6 bg-[#FAFAFA] px-4 py-12">
        <h2 className="text-2xl font-bold text-[#252B42]">
          EDITOR'S PICK
        </h2>

        <p className="text-center text-sm text-[#737373]">
          Problems trying to resolve the conflict between
        </p>

        <div className="flex w-full flex-col gap-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className={`relative w-full ${category.height} overflow-hidden`}
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-4 left-4 bg-white px-8 py-3">
                <span className="text-sm font-bold text-[#252B42]">
                  {category.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BESTSELLER PRODUCTS */}
      <section className="flex flex-col items-center px-4 py-12">
        <p className="text-sm font-bold text-[#737373]">
          Featured Products
        </p>

        <h2 className="mb-2 mt-2 max-w-[220px] text-center text-2xl font-bold leading-tight text-[#252B42]">
          BESTSELLER PRODUCTS
        </h2>

        <p className="mb-8 text-center text-sm text-[#737373]">
          Problems trying to resolve the conflict between
        </p>

        <div className="flex w-full flex-col gap-6">
          {products.map((image, index) => (
            <ProductCard
              key={index}
              image={image}
              title="Graphic Design"
              category="English Department"
              oldPrice="$16.48"
              price="$6.48"
            />
          ))}
        </div>
      </section>

      {/* VITA CLASSIC */}
      <section
        className="relative flex h-[1300px] w-full flex-col items-center overflow-hidden"
        style={{
          backgroundImage: `url("${heroBackground}")`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 flex w-full flex-col items-center px-8 pt-[90px] text-center">
          <p className="text-xs font-bold text-white">
            SUMMER 2020
          </p>

          <h2 className="mt-6 text-[24px] font-bold leading-[30px] text-white">
            Vita Classic
            <br />
            Product
          </h2>

          <p className="mt-5 max-w-[220px] text-sm leading-5 text-white">
            We know how large objects will act,
            but things on a small scale.
          </p>

          <p className="mt-6 text-base font-bold text-white">
            $16.48
          </p>

          <div className="mt-4 flex w-full items-center justify-between px-1">
            <button aria-label="Previous slide" className="text-white">
              <ChevronLeft size={30} />
            </button>

            <button className="h-[52px] bg-[#2DC071] px-5 text-xs font-bold text-white">
              ADD TO CART
            </button>

            <button aria-label="Next slide" className="text-white">
              <ChevronRight size={30} />
            </button>
          </div>
        </div>

        <img
          src={heroModel}
          alt="Vita Classic model"
          className="absolute bottom-0 left-0 h-[600px] w-full object-contain object-bottom"
        />
      </section>

     
      <section className="flex w-full flex-col items-center overflow-hidden bg-white pt-16">
        <div className="flex w-full flex-col items-center px-6 text-center">
          <p className="text-sm font-bold text-[#BDBDBD]">
            SUMMER 2020
          </p>

          <h2 className="mt-5 max-w-[310px] text-[40px] font-bold leading-[1.25] text-[#252B42]">
            Part of the
            <br />
            Neural
            <br />
            Universe
          </h2>

          <p className="mt-4 max-w-[270px] text-xl leading-[30px] text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </p>

          <div className="mt-5 flex flex-col items-center gap-[10px]">
            <button className="h-[52px] w-[156px] bg-[#23A6F0] text-sm font-bold text-white">
              BUY NOW
            </button>

            <button className="h-[52px] w-[165px] border border-[#23A6F0] bg-white text-sm font-bold text-[#23A6F0]">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-5 w-full overflow-hidden">
          <img
            src={coupleImage}
            alt="Couple wearing winter clothes"
            className="relative left-[-25px] block h-[403px] w-[463px] max-w-none object-contain"
          />
        </div>
      </section>

      {/* FEATURED POSTS */}
      <section className="relative flex w-full flex-col items-center overflow-hidden bg-white">
        {/* GRADIENT BACKGROUND */}
        <div className="absolute left-0 top-0 h-[1450px] w-full bg-gradient-to-b from-[#7B1737] via-[#66305F] to-[#252B42]" />

        {/* HEADER */}
        <div className="relative z-10 flex w-full flex-col items-center px-4 pt-16 text-center">
          <p className="text-sm font-bold text-[#23A6F0]">
            Practice Advice
          </p>

          <h2 className="mt-4 text-[40px] font-bold leading-tight text-[#252B42]">
            Featured
            <br />
            Products
          </h2>

          <p className="mt-4 max-w-[280px] text-sm leading-5 text-[#737373]">
            Problems trying to resolve the conflict between the two major realms of Classical physics.
          </p>
        </div>

        
        <div className="relative z-10 flex w-full flex-col gap-8 px-4 pb-12 pt-10">
          <ContentCard card={contentCards[0]} />
          <ContentCard card={contentCards[1]} />
        </div>

      
        <div className="relative z-10 flex w-full flex-col bg-white px-4 pb-12 pt-8">
          <ContentCard card={contentCards[2]} />
        </div>
      </section>
    </div>
  );
}

export default HomePage;