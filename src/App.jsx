const stats = [
  { value: '500+', label: 'Designs delivered' },
  { value: '72h', label: 'Typical concept turnaround' },
  { value: '4.9/5', label: 'Client satisfaction' },
];

const services = [
  {
    title: 'Artwork Packs',
    description:
      'Layered, print-ready vectors and high-res PNG exports optimized for top POD platforms.',
  },
  {
    title: 'Mockups & Launch Kit',
    description:
      'Product mockups, banner graphics, and social assets that keep your drop visuals consistent.',
  },
  {
    title: 'Brand-First Direction',
    description:
      'Every concept is aligned to your audience, voice, and campaign goals before production.',
  },
];

const niches = [
  'Streetwear capsules',
  'Creator fan merch',
  'Event and tour drops',
  'Niche hobby communities',
  'Seasonal collections',
  'Evergreen bestsellers',
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex w-[min(100%-2rem,1120px)] items-center justify-between py-4 max-sm:flex-col max-sm:gap-2">
          <a href="#" className="text-xl font-extrabold tracking-wide">
            InkOrbit
          </a>
          <nav>
            <ul className="flex gap-5 text-sm font-medium text-slate-300 max-sm:flex-wrap max-sm:justify-center max-sm:gap-3">
              <li><a href="#collections">Collections</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#featured">Featured</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-14">
          <div className="mx-auto grid w-[min(100%-2rem,1120px)] grid-cols-2 gap-8 max-lg:grid-cols-1">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">
                Merch & Print on Demand Artwork
              </p>
              <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-6xl">
                Design drops your audience will wear on repeat.
              </h1>
              <p className="mt-4 max-w-xl text-slate-300">
                Build a standout merch catalog with ready-to-print illustrations, apparel graphics,
                and social launch assets made for creators, brands, and POD shops.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-indigo-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-600"
                >
                  Start a Project
                </a>
                <a
                  href="#featured"
                  className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white"
                >
                  See Artwork
                </a>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3 max-sm:grid-cols-1">
                {stats.map((stat) => (
                  <article key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <p className="text-sm text-slate-300">{stat.label}</p>
                  </article>
                ))}
              </div>
            </div>

            <article
              id="featured"
              className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
                alt="Printed t-shirts arranged on display"
                className="h-80 w-full object-cover"
              />
              <div className="p-5">
                <p className="inline-block rounded-full bg-indigo-400/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-200">
                  Featured Drop
                </p>
                <h2 className="mt-3 text-2xl font-bold">Neo Street Collection</h2>
                <p className="mt-2 text-slate-300">
                  12 cohesive shirt and hoodie artworks with alternate colorways, mockups, and ad
                  templates.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="services" className="py-10">
          <div className="mx-auto w-[min(100%-2rem,1120px)]">
            <h2 className="text-3xl font-bold">What you get</h2>
            <div className="mt-4 grid grid-cols-3 gap-4 max-lg:grid-cols-1">
              {services.map((service) => (
                <article key={service.title} className="rounded-xl border border-white/10 bg-slate-900 p-5">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-slate-300">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="collections" className="bg-white/5 py-10">
          <div className="mx-auto grid w-[min(100%-2rem,1120px)] grid-cols-2 gap-5 max-lg:grid-cols-1">
            <div>
              <h2 className="text-3xl font-bold">Built for every niche</h2>
              <p className="mt-3 text-slate-300">
                From anime-inspired streetwear and minimalist typography to bold retro graphics, we
                craft merch lines that translate across tees, hoodies, posters, and accessories.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-2 max-sm:grid-cols-1">
              {niches.map((niche) => (
                <li
                  key={niche}
                  className="rounded-full border border-white/10 bg-slate-800 px-4 py-2 text-center font-medium"
                >
                  {niche}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="py-10">
          <div className="mx-auto w-[min(100%-2rem,1120px)] rounded-2xl bg-gradient-to-r from-indigo-600 to-slate-800 p-8 shadow-2xl">
            <h2 className="text-3xl font-bold">Ready to launch your next merch drop?</h2>
            <p className="mt-3 max-w-3xl text-slate-100/90">
              Tell us your niche, style references, and timeline—we’ll map the artwork pipeline
              from concept to storefront-ready files.
            </p>
            <a
              className="mt-5 inline-block rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-900"
              href="mailto:hello@inkorbit.studio"
            >
              Book a Discovery Call
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
