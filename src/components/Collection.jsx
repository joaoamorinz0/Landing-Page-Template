import shoesImg1 from "../assets/images/shoes2.jpg";
import shoesImg2 from "../assets/images/shoes1.jpg";
import shoesImg3 from "../assets/images/shoes4.jpg";
import ProductCard from "./ProductCard";

const products = [
  {
    brand: "Onitsuka Tiger",
    name: "Mexico 66",
    category: "The classic silhouette that defined a generation.",
    price: "$120.00",
    image: shoesImg1,
  },
  {
    brand: "Onitsuka Tiger",
    name: "Mexico 66 Blackout",
    category: "All black. All attitude. Timeless in every step.",
    price: "$140.00",
    image: shoesImg2,
  },
  {
    brand: "Onitsuka Tiger",
    name: "Mexico 66 Cream",
    category: "A bold rework of an icon. Stand out. Everywhere.",
    price: "$120.00",
    image: shoesImg3,
  },
];

function Collection({ addToCart }) {
  return (
    <section id="collection" className="bg-[#f6f6f6] text-[#090F15]">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Collection
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight">
            NEW COLLECTION 2026
          </h2>

          <p className="mt-4 text-lg text-zinc-500">
            Iconic Designs. Premium Materials. Timeless Style.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              {...product}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collection;