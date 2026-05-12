import { ArrowUpRight } from "lucide-react";

function ProductCard({ brand, name, category, price, image, onAddToCart }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Área da imagem */}
      <div className="bg-[#090F15] p-4">
        <div className="flex aspect-square items-center justify-center rounded-lg bg-[#F5F5F5] p-5">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-5 text-left">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
          {brand}
        </p>

        <h3 className="mt-1 text-xl font-bold leading-tight text-[#090F15]">
          {name}
        </h3>

        <p className="mt-2 min-h-[44px] text-sm leading-snug text-zinc-600">
          {category}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-base font-semibold text-[#090F15]">
            {price}
          </span>

           <button
            type="button"
            onClick={onAddToCart}
            className="rounded-full bg-[#090F15] px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-blue-600"
          >
            Shop Now
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;