import heroImg from "../assets/images/shoes.png";
import Vector from "../assets/images/Vector.svg";

function Hero() {
  return (
    <section 
  id="top"
  className=" flex items-center justify-between px-10 py-6 border-b border-zinc-300
    relative
    overflow-hidden
    min-h-screen
    bg-[#F5F5F5]
    border-b border-zinc-200
  "
>
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-10">

  {/* Imagem */}
  <div className="p-10 relative z-10">
    <img
      src={heroImg}
      alt="Sneakers"
      className="
        w-[520px]
        -translate-y-2
        -translate-x-10
        drop-shadow-3xl
      "
    />
  </div>
  <div className="absolute -z-0 left-0 bottom-0  w-[520px] ">
    <img src={Vector} alt="Background Vector" className="w-[800px]" />
  </div>

  {/* Texto */}
  <div className="relative z-20 max-w-lg">
    <h1 className=" text-6xl font-black leading-[1.05] tracking-tight text-zinc1200 text-[#090F15]">
      Modern Sneakers
      <br />
      For Modern{" "}
      <span className="text-[#3B82F6]">
        Life.
      </span>
    </h1>

    <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-600">
      Minimal design inspired by modern streetwear culture.
    </p>

    <button
      className="
        mt-10
        rounded-full
        bg-[#0F172A]
        px-10
        py-4
        text-base
        font-semibold
        text-white
        shadow-lg
      "
    >
      Shop Now
    </button>
  </div>

</div>
</section>
  );
}

export default Hero;