
import productSlide from "../assets/product-slide-1.jpg";

function HomePage() {
  return (
    <main className="flex flex-col">

      <section
        className="relative flex flex-col items-center justify-center text-center px-8"
        style={{
          backgroundImage: `url(${productSlide})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "753px",
        }}
      >
        <p className="text-white text-sm font-bold mb-6">
          SUMMER 2020
        </p>

        <h1 className="text-white text-3xl font-bold mb-6">
          NEW COLLECTION
        </h1>

        <p className="text-white text-sm font-medium mb-6">
          We know how large objects will act,
          but things on a small scale.
        </p>

        <button className="bg-green-500 text-white font-bold px-8 py-3 rounded">
          SHOP NOW
        </button>

      </section>

    </main>
  );
}

export default HomePage;
