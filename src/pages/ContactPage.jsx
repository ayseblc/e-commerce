
import { Link } from "react-router-dom";

const locations = [
  {
    city: "Paris",
    address: "1901 Thorn ridge Cir.",
    postal: "75000 Paris",
    phone: "Phone: +451 215 215",
    fax: "Fax: +451 215 215",
  },
  {
    city: "New York",
    address: "2715 Ash Dr. San Jose,",
    postal: "75000 New York",
    phone: "Phone: +451 215 215",
    fax: "Fax: +451 215 215",
  },
  {
    city: "Berlin",
    address: "4140 Parker Rd.",
    postal: "75000 Berlin",
    phone: "Phone: +451 215 215",
    fax: "Fax: +451 215 215",
  },
  {
    city: "London",
    address: "3517 W. Gray St. Utica,",
    postal: "75000 London",
    phone: "Phone: +451 215 215",
    fax: "Fax: +451 215 215",
  },
];

function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-6 text-[#BDBDBD] md:gap-8">

      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        className="text-xl font-bold transition hover:text-[#23A6F0] md:text-2xl"
      >
        𝕏
      </a>

      <a
        href="https://facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="text-xl font-bold transition hover:text-[#23A6F0] md:text-2xl"
      >
        f
      </a>

      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-xl font-bold transition hover:text-[#23A6F0] md:text-2xl"
      >
        ◎
      </a>

      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-base font-bold transition hover:text-[#23A6F0] md:text-lg"
      >
        in
      </a>

    </div>
  );
}

function ContactPage() {
  return (
    <main className="flex w-full flex-col bg-white">

      {/* SECTION 1 - INTRO */}
      <section className="flex min-h-[310px] flex-col items-center justify-center px-6 py-16 text-center md:min-h-[430px] md:px-12 md:py-24">

        <h1 className="max-w-4xl text-3xl font-bold leading-tight text-[#252B42] md:text-5xl lg:text-6xl">
          Get answers to all your questions.
        </h1>

        <p className="mt-5 max-w-2xl text-xs leading-6 text-[#737373] md:mt-7 md:text-base md:leading-7">
          Problems trying to resolve the conflict between the two
          major realms of Classical physics:
        </p>

        <a
          href="mailto:hello@example.com"
          className="mt-6 bg-[#23A6F0] px-7 py-4 text-xs font-bold uppercase text-white transition hover:bg-[#1b8dcc] md:mt-9 md:px-9 md:py-5 md:text-sm"
        >
          Contact Our Company
        </a>

        <div className="mt-7 md:mt-9">
          <SocialLinks />
        </div>
      </section>

      {/* SECTION 2 - QUESTIONS & ANSWERS */}
      <section className="flex min-h-[260px] items-center justify-center bg-[#F0EAE2] px-6 py-16 text-center md:min-h-[400px] md:px-12 md:py-24">

        <div className="flex max-w-4xl flex-col items-center">

          <h2 className="text-2xl font-bold text-[#252B42] md:text-4xl lg:text-5xl">
            Questions & Answers
          </h2>

          <p className="mt-4 max-w-2xl text-xs leading-6 text-[#737373] md:mt-6 md:text-base md:leading-7">
            Problems trying to resolve the conflict between the two
            major realms of Classical physics:
          </p>

          <a
            href="mailto:hello@example.com"
            className="mt-5 text-xs font-bold text-[#23A6F0] md:mt-7 md:text-sm"
          >
            CONTACT US
          </a>

        </div>
      </section>

      {/* SECTION 3 - CONTACT US */}
      <section className="flex w-full flex-col bg-[#08AFC3] text-white md:min-h-[600px] md:flex-row">

        {/* Left content */}
        <div className="flex flex-col items-center justify-center px-7 py-14 text-center md:w-1/2 md:items-start md:px-14 md:py-20 md:text-left lg:px-24">

          <h2 className="text-3xl font-bold md:text-5xl lg:text-6xl">
            CONTACT US
          </h2>

          <p className="mt-5 max-w-md text-xs leading-6 md:mt-7 md:text-base md:leading-8">
            Problems trying to resolve the conflict between the two
            major realms of Classical physics:
            Newtonian mechanics
          </p>

          <a
            href="mailto:hello@example.com"
            className="mt-7 border border-white px-8 py-4 text-xs font-bold transition hover:bg-white hover:text-[#08AFC3] md:mt-10 md:px-10 md:py-5 md:text-sm"
          >
            CONTACT US
          </a>

        </div>

        {/* One large image placeholder with all locations */}
        <div className="flex min-h-[380px] w-full items-center justify-center bg-[#D6E5E5] px-6 py-10 md:min-h-[600px] md:w-1/2 md:px-10 lg:px-16">

          <div className="grid w-full max-w-xl grid-cols-2 gap-x-6 gap-y-10 text-[#252B42] md:gap-x-10 md:gap-y-16">

            {locations.map((location) => (
              <div
                key={location.city}
                className="flex flex-col gap-2 md:gap-4"
              >

                <h3 className="text-sm font-bold md:text-xl lg:text-2xl">
                  {location.city}
                </h3>

                <p className="text-[11px] leading-5 md:text-sm md:leading-7 lg:text-base">
                  {location.address}
                  <br />
                  {location.postal}
                  <br />
                  {location.phone}
                  <br />
                  {location.fax}
                </p>

              </div>
            ))}

          </div>
        </div>

      </section>

      {/* SECTION 4 - NOW LET'S GROW YOURS */}
      <section className="flex w-full flex-col md:min-h-[420px] md:flex-row">

        {/* Blue text area */}
        <div className="flex flex-col justify-center bg-[#2D80C3] px-8 py-14 text-white md:w-1/2 md:px-14 md:py-20 lg:px-24">

          <p className="text-[10px] font-bold uppercase tracking-widest md:text-sm">
            Work With Us
          </p>

          <h2 className="mt-4 text-3xl font-bold md:mt-6 md:text-5xl lg:text-6xl">
            Now Let's grow Yours
          </h2>

          <p className="mt-4 max-w-lg text-xs leading-6 text-white/90 md:mt-6 md:text-base md:leading-8">
            The gradual accumulation of information about atomic and
            small-scale behavior during the first quarter of the 20th
            century.
          </p>

          <Link
            to="/shop"
            className="mt-6 w-fit border border-white px-8 py-4 text-xs font-bold transition hover:bg-white hover:text-[#2D80C3] md:mt-9 md:px-10 md:py-5 md:text-sm"
          >
            Button
          </Link>

        </div>

        {/* CTA image placeholder */}
        <div className="flex h-[260px] items-center justify-center bg-[#F0C9C6] text-sm font-medium text-[#737373] md:h-auto md:w-1/2 md:text-base">
          Image Placeholder
        </div>

      </section>

    </main>
  );
}

export default ContactPage;
