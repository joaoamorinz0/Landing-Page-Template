import { ShoppingBag } from "lucide-react";

function Navbar({ cartCount, onOpenCart }) {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-200 bg-white/80 px-10 py-4 backdrop-blur-md">
      <h1 className="text-2xl font-bold">
        DevTemplate<span className="font-light italic">Sneakers</span>
      </h1>

      <ul className="flex items-center gap-10">
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#collection">Collection</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button
        onClick={onOpenCart}
        className="relative"
        aria-label="Open cart"
      >
        <ShoppingBag className="h-7 w-7" />

        {cartCount > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#090F15] text-xs text-white">
            {cartCount}
          </span>
        )}
      </button>
    </nav>
  );
}

export default Navbar;