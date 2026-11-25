
import { Link } from "react-router-dom";

const footerColumns = [
  {
    title: "Company Info",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Legal",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Features",
    links: [
      "Business Marketing",
      "User Analytic",
      "Live Chat",
      "Unlimited Support",
    ],
  },
  {
    title: "Resources",
    links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
  },
];

function Footer() {
  return (
    <footer className="flex w-full flex-col bg-white">

      {/* TOP FOOTER BAR */}
      <div className="flex w-full bg-[#FAFAFA]">
        <div className="mx-auto flex w-full max-w-[1050px] flex-col items-start justify-between gap-6 px-6 py-8 sm:flex-row sm:items-center md:px-10">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-[#252B42]"
          >
            Bandage
          </Link>

          {/* SOCIAL MEDIA */}
          <div className="flex items-center gap-5 text-[#23A6F0]">

            {/* FACEBOOK */}
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" />
              </svg>
            </a>

            {/* INSTAGRAM */}
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="1" fill="currentColor" />
              </svg>
            </a>

            {/* TWITTER / X */}
            <a href="#" aria-label="X">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7.4L5.5 22H2.4l7.3-8.4L1.9 2h6.4l4.4 6.9L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER CONTENT */}
      <div className="mx-auto flex w-full max-w-[1050px] flex-col gap-10 px-6 py-10 md:px-10 lg:flex-row lg:justify-between lg:gap-6 lg:py-12">

        {/* FOUR LINK COLUMNS */}
        {footerColumns.map((column) => (
          <div
            key={column.title}
            className="flex flex-col gap-5 lg:min-w-0 lg:flex-1"
          >
            <h3 className="text-base font-bold text-[#252B42]">
              {column.title}
            </h3>

            <div className="flex flex-col gap-3">
              {column.links.map((link, index) => (
                <Link
                  key={`${link}-${index}`}
                  to="/"
                  className="text-sm font-bold text-[#737373] transition-colors hover:text-[#23A6F0]"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* NEWSLETTER */}
        <div className="flex w-full flex-col gap-5 lg:w-[245px] lg:shrink-0">
          <h3 className="text-base font-bold text-[#252B42]">
            Get In Touch
          </h3>

          <form className="flex w-full overflow-hidden rounded-md border border-[#E6E6E6]">
            <input
              type="email"
              placeholder="Your Email"
              className="min-w-0 flex-1 bg-[#F9F9F9] px-3 py-3 text-xs outline-none"
            />

            <button
              type="button"
              className="shrink-0 bg-[#23A6F0] px-4 text-xs font-bold text-white"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-[#737373]">
            Lore imp sum dolor Amit.
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="flex w-full bg-[#FAFAFA]">
        <div className="mx-auto flex w-full max-w-[1050px] px-6 py-6 md:px-10">
          <p className="text-sm font-bold leading-6 text-[#737373]">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
