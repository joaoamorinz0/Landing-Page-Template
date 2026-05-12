import { X } from "lucide-react";

function Cart({ items, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />

      <aside className="absolute right-0 top-0 h-full w-[400px] bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#090F15]">
            Your Cart
          </h2>

          <button onClick={onClose}>
            <X className="h-6 w-6" />
          </button>
        </div>

        {items.length === 0 ? (
          <p className="mt-10 text-zinc-500">
            Your cart is empty.
          </p>
        ) : (
          <div className="mt-8 space-y-5">
            {items.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex gap-4 border-b border-zinc-200 pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 rounded-xl bg-zinc-100 object-contain"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {item.brand}
                  </p>

                  <h3 className="font-semibold text-[#090F15]">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-600">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </aside>
    </div>
  );
}

export default Cart;