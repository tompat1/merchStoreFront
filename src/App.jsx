import { useState } from 'react';

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

const storefronts = [
  {
    name: 'TeePublic',
    url: 'https://www.teepublic.com/user/oddjoe',
    badge: 'Marketplace',
    summary:
      'Browse apparel, stickers, mugs, and wall art in a storefront built for discovery and impulse buys.',
    highlights: ['Tees, hoodies, tanks', 'Stickers and accessories', 'Marketplace search traffic'],
    accent: 'from-sky-500/20 via-cyan-400/10 to-transparent',
  },
  {
    name: 'Redbubble',
    url: 'https://www.redbubble.com/people/averagejoekster/explore?asc=u&page=1&sortOrder=recent',
    badge: 'Artist Shop',
    summary:
      'Explore a broader product catalog with design drops adapted for home goods, stationery, and apparel.',
    highlights: ['Apparel and phone cases', 'Wall art and decor', 'Wide print-on-demand catalog'],
    accent: 'from-rose-500/20 via-orange-400/10 to-transparent',
  },
];

const merchFilters = ['All', 'TeePublic', 'Redbubble'];

const makePlaceholderThumbnail = (title, platform, start, end) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${start}" />
          <stop offset="100%" stop-color="${end}" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" rx="36" fill="url(#g)" />
      <circle cx="650" cy="120" r="92" fill="rgba(255,255,255,0.12)" />
      <circle cx="140" cy="500" r="110" fill="rgba(0,0,0,0.12)" />
      <text x="60" y="122" fill="white" font-size="34" font-family="Arial, sans-serif" opacity="0.82">${platform}</text>
      <text x="60" y="250" fill="white" font-size="58" font-weight="700" font-family="Arial, sans-serif">${title}</text>
      <text x="60" y="324" fill="white" font-size="28" font-family="Arial, sans-serif" opacity="0.88">Preview unavailable from automated scrape</text>
    </svg>`,
  )}`;

const featuredMerch = [
  {
    title: 'Viking Mead Positive',
    platform: 'TeePublic',
    type: 'Apparel',
    category: 'T-Shirts',
    description:
      'Scraped from the public Oddjoe storefront with a live product thumbnail and direct tee product link.',
    url: 'https://www.teepublic.com/t-shirt/81701614-viking-mead-positive-funny-norse-beer-design?store_id=3991326',
    note: 'Opens on TeePublic. Fulfillment and checkout happen on TeePublic.',
    image:
      'https://images.teepublic.com/derived/production/designs/81701614_1/1760367869/i_p:c_36538b,s_313,q_90.jpg',
    price: '$24',
  },
  {
    title: 'Berserker Mode ON',
    platform: 'TeePublic',
    type: 'Apparel',
    category: 'T-Shirts',
    description:
      'Scraped from the public storefront with the live product image currently exposed in TeePublic HTML.',
    url: 'https://www.teepublic.com/t-shirt/81701178-berserker-mode-on-funny-angry-viking-norse-warrior?store_id=3991326',
    note: 'Opens on TeePublic. Fulfillment and checkout happen on TeePublic.',
    image:
      'https://images.teepublic.com/derived/production/designs/81701178_0/1760350851/i_p:c_36538b,s_313,q_90.jpg',
    price: '$24',
  },
  {
    title: 'Funny Fishing Retro Design',
    platform: 'TeePublic',
    type: 'Apparel',
    category: 'T-Shirts',
    description:
      'Another live TeePublic item extracted from the storefront markup, keeping the catalog preview tied to real products.',
    url: 'https://www.teepublic.com/t-shirt/79806111-funny-fishing-retro-design?store_id=3991326',
    note: 'Opens on TeePublic. Fulfillment and checkout happen on TeePublic.',
    image:
      'https://images.teepublic.com/derived/production/designs/79806111_0/1757063937/i_p:c_484849,s_313,q_90.jpg',
    price: '$24',
  },
  {
    title: 'Gothic Angel Artwork',
    platform: 'TeePublic',
    type: 'Apparel',
    category: 'T-Shirts',
    description:
      'Live TeePublic product thumbnail scraped from the storefront, useful here because the design also exists on Redbubble.',
    url: 'https://www.teepublic.com/t-shirt/79802351-gothic-angel-artwork?store_id=3991326',
    note: 'Opens on TeePublic. Fulfillment and checkout happen on TeePublic.',
    image:
      'https://images.teepublic.com/derived/production/designs/79802351_0/1757059083/i_p:c_fac2cd,s_313,q_90.jpg',
    price: '$24',
  },
  {
    title: 'Gothic Angel Artwork',
    platform: 'Redbubble',
    type: 'Featured Design',
    category: 'Essential T-Shirt',
    description:
      'Direct product link from your Redbubble shop. The live page is reachable by users, but automated scraping is blocked by Cloudflare here.',
    url: 'https://www.redbubble.com/i/t-shirt/Gothic-Angel-Artwork-by-averagejoekster/173396006.NL9AC',
    note: 'Opens on Redbubble. Fulfillment and checkout happen on Redbubble.',
    image: makePlaceholderThumbnail('Gothic Angel', 'Redbubble', '#f43f5e', '#7c3aed'),
    price: 'Live product link',
  },
  {
    title: 'Recent Redbubble Uploads',
    platform: 'Redbubble',
    type: 'Storefront',
    category: 'Recent uploads',
    description:
      'Storefront entry point for the latest Redbubble items. The page itself works for visitors, but thumbnail scraping is blocked in this environment.',
    url: 'https://www.redbubble.com/people/averagejoekster/explore?asc=u&page=1&sortOrder=recent',
    note: 'Opens on Redbubble. Fulfillment and checkout happen on Redbubble. Preview is a branded fallback image.',
    image: makePlaceholderThumbnail('Recent Uploads', 'Redbubble', '#fb923c', '#ef4444'),
    price: 'Storefront',
  },
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredMerch =
    activeFilter === 'All'
      ? featuredMerch
      : featuredMerch.filter((item) => item.platform === activeFilter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex w-[min(100%-2rem,1120px)] items-center justify-between py-4 max-sm:flex-col max-sm:gap-2">
          <a href="#" className="text-xl font-extrabold tracking-wide">
            rynell
          </a>
          <nav>
            <ul className="flex gap-5 text-sm font-medium text-slate-300 max-sm:flex-wrap max-sm:justify-center max-sm:gap-3">
              <li><a href="#storefronts">Storefronts</a></li>
              <li><a href="#merch">Merch</a></li>
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
                  href="#storefronts"
                  className="rounded-full bg-indigo-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-600"
                >
                  Browse Storefronts
                </a>
                <a
                  href="#merch"
                  className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white"
                >
                  See Merch
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

        <section id="storefronts" className="py-10">
          <div className="mx-auto w-[min(100%-2rem,1120px)]">
            <div className="flex items-end justify-between gap-4 max-md:flex-col max-md:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">
                  Shop the catalog
                </p>
                <h2 className="mt-2 text-3xl font-bold">Official storefronts</h2>
                <p className="mt-3 max-w-2xl text-slate-300">
                  Find the current product lineup on both platforms. Each shop carries the same
                  design direction, with different product mixes depending on the marketplace.
                </p>
              </div>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white"
              >
                Want a custom design?
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-5 max-lg:grid-cols-1">
              {storefronts.map((storefront) => (
                <article
                  key={storefront.name}
                  className={`rounded-2xl border border-white/10 bg-gradient-to-br ${storefront.accent} bg-slate-900 p-6 shadow-xl`}
                >
                  <p className="inline-block rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-200">
                    {storefront.badge}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold">{storefront.name}</h3>
                  <p className="mt-3 text-slate-300">{storefront.summary}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-200">
                    {storefront.highlights.map((highlight) => (
                      <li key={highlight} className="rounded-xl border border-white/10 bg-black/15 px-4 py-3">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={storefront.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-200"
                  >
                    Visit {storefront.name}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="merch" className="bg-white/5 py-12">
          <div className="mx-auto w-[min(100%-2rem,1120px)]">
            <div className="flex items-end justify-between gap-4 max-md:flex-col max-md:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">
                  Transparent product preview
                </p>
                <h2 className="mt-2 text-3xl font-bold">Featured merch</h2>
                <p className="mt-3 max-w-3xl text-slate-300">
                  This section shows what is actually available across your marketplaces instead of
                  hiding everything behind a single storefront button. TeePublic thumbnails are
                  scraped from the public storefront HTML; Redbubble cards fall back cleanly where
                  automated extraction is blocked.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {merchFilters.map((filter) => {
                const isActive = filter === activeFilter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                      isActive
                        ? 'bg-white text-slate-950'
                        : 'border border-white/15 bg-white/5 text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-5 max-lg:grid-cols-1">
              {filteredMerch.map((item) => (
                <article
                  key={`${item.platform}-${item.title}`}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl"
                >
                  <div className="aspect-square overflow-hidden bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain object-center"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">
                          {item.platform}
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-white">{item.title}</h3>
                      </div>
                      <p className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-bold text-slate-200">
                        {item.price}
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-300">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        {item.type}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        {item.category}
                      </span>
                    </div>
                    <p className="mt-4 text-slate-300">{item.description}</p>
                    <p className="mt-4 text-sm text-slate-400">{item.note}</p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-200"
                    >
                      View on {item.platform}
                    </a>
                  </div>
                </article>
              ))}
            </div>
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
              href="mailto:thomas@rynell.org"
            >
              Book a Discovery Call
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
