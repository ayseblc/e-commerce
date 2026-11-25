import { Link } from "react-router-dom";

function ProductCard({ productId, image, title, category, oldPrice, price }) {
  return (
    <Link
      to={`/product/${productId}`}
      aria-label={`View details for ${title}`}
      className="group flex w-full flex-col items-center bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#23A6F0]"
    >
      <img
        src={image}
        alt={title}
        className="h-[320px] w-full object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-[380px] lg:h-[440px]"
      />
      <div className="flex w-full flex-col items-center gap-2 px-4 py-4 text-center">
        <h3 className="text-base font-bold text-[#252B42]">{title}</h3>
        <p className="text-sm font-bold text-[#737373]">{category}</p>
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-[#BDBDBD]">{oldPrice}</span>
          <span className="text-base font-bold text-[#23856D]">{price}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-[#23A6F0]" />
          <span className="h-4 w-4 rounded-full bg-[#23856D]" />
          <span className="h-4 w-4 rounded-full bg-[#E77C40]" />
          <span className="h-4 w-4 rounded-full bg-[#252B42]" />
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
