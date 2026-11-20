function Footer() {
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

  return (
    <footer className="flex w-full flex-col bg-white">
      <div className="flex w-full flex-col px-6 py-10">

        {/* BRAND */}
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-[#252B42]">
            Bandage
          </h2>

          {/* SOCIAL MEDIA */}
          <div className="flex items-center gap-5 text-[#23A6F0]">
            {/* Facebook */}
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.5-1.5h1.7V3.6c-.8-.1-1.6-.2-2.4-.2-2.6 0-4.1 1.6-4.1 4.4v2.1H7.9V13h2.3v8h3.3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" aria-label="Instagram">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-none stroke-current stroke-2"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            {/* X / Twitter */}
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.3L6.6 22H3.5l7.3-8.4L1 2h6.3l4.3 5.7L18.9 2zm-1.1 18h1.7L6.2 3.9H4.4L17.8 20z" />
              </svg>
            </a>
          </div>
        </div>

        {/* LINKS */}
        <div className="mt-10 flex flex-col gap-8">
          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-[#252B42]">
                {column.title}
              </h3>

              <div className="flex flex-col gap-3">
                {column.links.map((link, index) => (
                  <a
                    key={`${column.title}-${index}`}
                    href="#"
                    className="text-sm font-bold text-[#737373]"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GET IN TOUCH */}
        <div className="mt-8 flex flex-col gap-4">
          <h3 className="text-sm font-bold text-[#252B42]">
            Get In Touch
          </h3>

          <div className="flex w-full overflow-hidden rounded-md border border-[#E6E6E6]">
            <input
              type="email"
              placeholder="Your Email"
              className="min-w-0 flex-1 bg-[#F9F9F9] px-4 py-4 text-sm text-[#737373] outline-none"
            />

            <button className="bg-[#23A6F0] px-4 text-xs font-bold text-white">
              Subscribe
            </button>
          </div>

          <p className="text-xs text-[#737373]">
            Lore imp sum dolor Amit
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="flex w-full flex-col items-center justify-center bg-[#FAFAFA] px-6 py-8 text-center">
        <p className="max-w-[250px] text-sm font-bold leading-6 text-[#737373]">
          Made With Love By Finland
          <br />
          All Right Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;