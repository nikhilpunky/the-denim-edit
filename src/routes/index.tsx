import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Northline Denim — Find your forever pair" },
      {
        name: "description",
        content:
          "Discover considered jeans for everyday living. Explore Northline Denim's easy, enduring fits in the latest collection.",
      },
      { property: "og:title", content: "Northline Denim — Find your forever pair" },
      {
        property: "og:description",
        content:
          "Considered fits. Everyday denim. Meet the latest collection from Northline Denim.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const products = [
  {
    name: "The Everyday Straight",
    details: "Vintage blue · Straight leg",
    image: "/images/jeans-vintage-blue.webp",
    alt: "Vintage blue straight-leg jeans styled for everyday wear",
    tag: "JUST RIGHT",
  },
  {
    name: "The Classic Indigo",
    details: "Deep indigo · Slim straight",
    image: "/images/jeans-indigo-straight.webp",
    alt: "Classic deep-indigo straight-leg jeans with a clean dark wash",
    tag: "A CLASSIC",
  },
  {
    name: "The Easy Wide Leg",
    details: "Washed charcoal · Wide leg",
    image: "/images/jeans-charcoal-wide-leg.webp",
    alt: "Washed charcoal wide-leg jeans styled with a white tee",
    tag: "NEW SHAPE",
  },
];

function Index() {
  return (
    <main className="overflow-hidden bg-brand-canvas text-foreground">
      <div className="bg-primary px-4 py-2 text-center text-xs font-medium uppercase text-primary-foreground">
        A GOOD PAIR GOES A LONG WAY.
      </div>

      <header className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          aria-label="Northline Denim home"
          className="shrink-0 text-base font-bold uppercase leading-none sm:text-lg"
        >
          NORTHLINE<span className="text-brand-denim">.</span>
          <span className="mt-1 block text-[9px] font-medium uppercase text-muted-foreground sm:text-[10px]">
            DENIM CO.
          </span>
        </a>
        <nav aria-label="Main navigation" className="flex items-center gap-3 sm:gap-6">
          <a className="text-xs font-medium hover:text-brand-denim sm:text-sm" href="#shop">
            Shop
          </a>
          <a className="text-xs font-medium hover:text-brand-denim sm:text-sm" href="#story">
            Our story
          </a>
          <a
            className="text-xs font-medium hover:text-brand-denim sm:text-sm"
            href="#contact"
          >
            Contact
          </a>
          <a
            className="flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-brand-soft"
            href="#shop"
            aria-label="Browse the collection"
          >
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </nav>
      </header>

      <section
        id="top"
        aria-labelledby="hero-heading"
        className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-14 pt-5 sm:px-8 sm:pb-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:px-12 lg:pb-24 lg:pt-10"
      >
        <div className="order-2 pb-1 lg:order-1 lg:py-12">
          <p className="mb-5 text-xs font-semibold uppercase text-brand-denim">
            NORTHLINE DENIM · THE EVERYDAY EDIT
          </p>
          <h1
            id="hero-heading"
            className="max-w-xl font-display text-5xl leading-[1.07] sm:text-6xl lg:text-7xl"
          >
            Find your <span className="text-brand-denim">forever</span> pair.
          </h1>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground sm:text-lg">
            Thoughtful fits. Easy-to-wear denim. Made for all the days in between.
          </p>
          <Button
            asChild
            className="h-12 gap-4 rounded-full px-6 text-sm font-semibold transition-colors hover:bg-brand-denim"
          >
            <a href="#shop">
              Shop the collection
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </Button>
          <p className="mt-10 flex items-center gap-2 text-xs text-muted-foreground">
            <span aria-hidden="true" className="size-2 rounded-full bg-brand-denim" />
            Denim that feels like you.
          </p>
        </div>

        <div className="relative order-1 overflow-hidden rounded-sm bg-brand-soft lg:order-2">
          <img
            className="aspect-[1.22/1] w-full object-cover object-[72%_center] sm:aspect-[1.35/1] lg:aspect-[0.9/1]"
            src="/images/northline-hero.webp"
            alt="Effortlessly styled deep-indigo Northline jeans in a sunlit studio"
            width="1120"
            height="840"
            fetchPriority="high"
          />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-brand-canvas/90 px-3 py-2 text-xs font-medium sm:bottom-6 sm:left-6">
            <span className="size-2 rounded-full bg-brand-denim" />
            YOUR NEW EVERYDAY DENIM
          </div>
        </div>
      </section>

      <section id="shop" aria-labelledby="shop-heading" className="bg-brand-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase text-brand-denim">
                THE COLLECTION
              </p>
              <h2 id="shop-heading" className="font-display text-4xl leading-tight sm:text-5xl">
                The pairs you reach for.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Clean fits and considered washes, designed to make getting dressed easy.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <article key={product.name} className="group">
                <a
                  href="#contact"
                  aria-label={`Ask us about ${product.name}`}
                  className="relative block overflow-hidden bg-brand-canvas"
                >
                  <img
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    src={product.image}
                    alt={product.alt}
                    width="1122"
                    height="1402"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-brand-canvas px-3 py-1.5 text-[10px] font-semibold text-foreground sm:left-4 sm:top-4">
                    {product.tag}
                  </span>
                  <span className="absolute bottom-4 right-4 flex size-10 items-center justify-center rounded-full bg-brand-canvas transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </span>
                </a>
                <div className="flex items-start justify-between gap-3 pt-4">
                  <div>
                    <h3 className="text-sm font-semibold sm:text-base">{product.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      {product.details}
                    </p>
                  </div>
                  <a
                    className="shrink-0 border-b border-foreground/50 pb-1 text-xs font-medium transition-colors hover:border-brand-denim hover:text-brand-denim"
                    href="#contact"
                    aria-label={`Enquire about ${product.name}`}
                  >
                    Discover
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="story"
        aria-labelledby="story-heading"
        className="mx-auto grid max-w-7xl gap-7 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-16 lg:px-12 lg:py-28"
      >
        <p className="text-xs font-semibold uppercase text-brand-denim">THE NORTHLINE WAY</p>
        <div>
          <h2 id="story-heading" className="max-w-2xl font-display text-4xl leading-tight sm:text-6xl">
            Great denim just feels like you.
          </h2>
          <div className="mt-6 grid gap-7 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              Northline Denim is all about finding your feel-good fit. We believe your
              favourite jeans aren’t saved for a special occasion. They’re the pair you
              slip on, head out in, and keep coming back to.
            </p>
            <a
              href="#shop"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-brand-denim"
            >
              Meet your next pair <ArrowDownRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="reasons-heading" className="border-y border-border bg-brand-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mb-9 grid gap-3 sm:mb-12 sm:grid-cols-[0.7fr_1.3fr] sm:items-end">
            <p className="text-xs font-semibold uppercase text-brand-denim">GOOD TO KNOW</p>
            <h2 id="reasons-heading" className="font-display text-4xl leading-tight sm:text-5xl">
              The little things, done right.
            </h2>
          </div>
          <div className="grid gap-7 sm:grid-cols-3 sm:gap-6">
            {[
              {
                title: "A fit for your kind of day",
                text: "From easy straight legs to laid-back wide fits, find the shape that feels like yours.",
              },
              {
                title: "The washes you come back to",
                text: "A thoughtful palette of blue and charcoal, made easy to wear your way.",
              },
              {
                title: "Made to make getting dressed easy",
                text: "Simple, comfortable styles you can reach for again and again.",
              },
            ].map((reason) => (
              <article key={reason.title} className="border-t border-border pt-5">
                <span className="flex size-8 items-center justify-center rounded-full bg-brand-canvas text-brand-denim">
                  <Check aria-hidden="true" className="size-4" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{reason.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {reason.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10 lg:px-12 lg:py-24"
      >
        <div>
          <p className="mb-3 text-xs font-semibold uppercase text-brand-denim">A LITTLE HELP?</p>
          <h2 id="contact-heading" className="font-display text-4xl leading-tight sm:text-5xl">
            Let’s find your fit.
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Our WhatsApp contact is coming soon. In the meantime, stop by our socials to say hello.
          </p>
        </div>
        <Button
          variant="outline"
          type="button"
          disabled
          title="WhatsApp contact details will be added soon"
          className="h-12 self-start rounded-full border-border px-6 text-sm font-semibold opacity-65 lg:self-center"
        >
          WhatsApp coming soon
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Button>
      </section>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 py-9 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <a href="#top" className="text-base font-bold uppercase" aria-label="Northline Denim home">
            NORTHLINE<span className="text-brand-highlight">.</span>
            <span className="ml-2 text-[10px] font-medium text-primary-foreground/70">DENIM CO.</span>
          </a>
          <p className="max-w-xs text-xs leading-relaxed text-primary-foreground/70">
            A little more ease, in every pair.
          </p>
          <div className="flex items-center gap-5 text-sm">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-brand-highlight"
            >
              Instagram
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-brand-highlight"
            >
              Pinterest
            </a>
          </div>
          <p className="text-xs text-primary-foreground/60">© 2026 Northline Denim</p>
        </div>
      </footer>
    </main>
  );
}
