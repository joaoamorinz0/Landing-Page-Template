import sideimg from "../assets/images/aboutimg.jpg";
import { MoveUpRight } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#090F15] text-white"
    >
      <p className="pointer-events-none absolute bottom-[60px] left-10 z-0 text-[390px] font-black leading-none text-white/[0.03]">
        01
      </p>

      <div className="grid min-h-[700px] grid-cols-2">
        <div className="relative z-10 flex flex-col justify-center px-20">
          <p className="text-lx uppercase tracking-[0.6em] text-zinc-200">
            About Us
          </p>

          <h2 className="mt-10 text-4xl font-semibold leading-tight">
            Designed For Everyday{" "}
            <span className="font-black">
              move.
            </span>
          </h2>

          <p className="mt-10 max-w-lg text-3xl leading-relaxed text-zinc-300">
            We create timeless sneaker experiences inspired by movement,
            simplicity and modern streetwear culture.
          </p>

          <a
            href="#collection"
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-white px-8 py-3 text-lg text-white transition-all hover:bg-white hover:text-black"
          >
            Explore Story
            <MoveUpRight className="h-5 w-5" />
          </a>
        </div>

        <div className="h-[700px] overflow-hidden">
          <img
            src={sideimg}
            alt="Sneakers displayed in a dark editorial style"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;