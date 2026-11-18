
function ProductCard({
  image,
  title,
  category,
  oldPrice,
  price,
}) {
  return (
    <article className="flex w-full flex-col items-center bg-white">
      <img
        src={image}
        alt={title}
        className="h-[300px] w-full object-cover"
      />

      <div className="flex w-full flex-col items-center gap-2 px-4 py-6">
        <h3 className="text-base font-bold text-[#252B42]">
          {title}
        </h3>

        <p className="text-sm font-bold text-[#737373]">
          {category}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-[#BDBDBD]">
            {oldPrice}
          </span>

          <span className="text-base font-bold text-[#23856D]">
            {price}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-[#23A6F0]"></span>
          <span className="h-4 w-4 rounded-full bg-[#23856D]"></span>
          <span className="h-4 w-4 rounded-full bg-[#E77C40]"></span>
          <span className="h-4 w-4 rounded-full bg-[#252B42]"></span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
