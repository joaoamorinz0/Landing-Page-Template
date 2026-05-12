function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f6f6f6] px-10 py-24 text-[#090F15]"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 md:grid-cols-2">
        
        {/* Texto */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Contact
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
            Get in Touch.
          </h2>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-600">
            Have questions about our collection or upcoming releases?
            Reach out to us.
          </p>

          <div className="mt-10 space-y-5 text-base">
            <div>
              <p className="text-zinc-500">Email</p>
              <p className="font-semibold">jvqa360@gmail.com</p>
            </div>

            <div>
              <p className="text-zinc-500">Phone</p>
              <p className="font-semibold">61 9301-4598</p>
            </div>

            <div>
              <p className="text-zinc-500">Instagram</p>
              <p className="font-semibold">@joaoamorinz</p>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <form className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Your name
              </label>

              <input
                type="text"
                placeholder="Your full name"
                required
                className="w-full rounded-xl bg-zinc-100 px-4 py-3 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#090F15]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email address
              </label>

              <input
                type="email"
                placeholder="Your email address"
                required
                className="w-full rounded-xl bg-zinc-100 px-4 py-3 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#090F15]"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium">
              Message
            </label>

            <textarea
              placeholder="Write something..."
              required
              rows="7"
              className="w-full resize-none rounded-xl bg-zinc-100 px-4 py-3 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#090F15]"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-[#090F15] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;