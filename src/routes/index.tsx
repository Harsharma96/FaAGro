import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Award, ChevronLeft, ChevronRight, CirclePlay, Clock3,
  Facebook, Heart, Instagram, Leaf, Mail, MapPin, Menu, MessageCircle,
  PackageCheck, Phone, Play, Quote, Send, ShieldCheck, Sprout, Star,
  Truck, Users, Wheat, X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

import heroFarm from "@/assets/agro-hero-farm.jpg";
import heroTurmeric from "@/assets/agro-hero-turmeric.jpg";
import productsImage from "@/assets/spice-products.jpg";
import farmerImage from "@/assets/farmer-portrait.jpg";
import processingImage from "@/assets/turmeric-processing.jpg";
import packagingImage from "@/assets/spice-packaging.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FA Northeast Agro | Natural Spices Assam" },
      { name: "description", content: "Farm-fresh turmeric, spices and quality agro products for wholesale and retail supply across India from Assam." },
      { property: "og:title", content: "FA Northeast Agro Enterprise" },
      { property: "og:description", content: "Pure, natural and farm-fresh spices supplied from Northeast India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const phone = "6002657185";
const whatsapp = "https://wa.me/916002657185?text=Hello%20FA%20Northeast%20Agro%20Enterprise%2C%20I%20want%20product%20and%20price%20details.";
const email = "fanortheastagroenterprise@gmail.com";

const heroSlides = [
  { image: heroFarm, eyebrow: "Natural • Fresh • Trusted", title: "Pure From Nature", copy: "Farm Fresh Spices From Northeast India", cta: "Explore Products", href: "#products" },
  { image: heroTurmeric, eyebrow: "From the fields of Assam", title: "Premium Turmeric", copy: "Naturally Rich in Curcumin", cta: "View Turmeric", href: "#featured" },
  { image: packagingImage, eyebrow: "Wholesale • Retail • Pan India", title: "Wholesale & Retail Supply", copy: "Quality Agro Products Across India", cta: "Get Best Price", href: "#contact" },
];

const products = [
  ["Fresh Turmeric", "Freshly sourced turmeric roots with natural aroma.", heroTurmeric, "Farm Fresh"],
  ["Dry Turmeric", "Carefully dried turmeric available for supply.", processingImage, "Natural"],
  ["Turmeric Powder", "Bright, aromatic turmeric powder for daily use.", productsImage, "Farm Fresh"],
  ["Black Pepper", "Naturally sourced whole black pepper.", productsImage, "Natural"],
  ["Dalchini (Cinnamon)", "Aromatic cinnamon for retail and wholesale.", productsImage, "Natural"],
  ["Polished Agro Products", "Carefully prepared products for varied needs.", packagingImage, "Quality"],
  ["Non-Polished Products", "Natural-form agro products from the Northeast.", spiceProductsFallback(), "Natural"],
  ["Natural Agro Products", "Quality wholesale and retail agro supply.", farmerImage, "Farm Fresh"],
] as const;

function spiceProductsFallback() { return productsImage; }

const reels = [
  ["Fresh Turmeric Harvest", "Harvest", farmerImage], ["Turmeric Processing", "Processing", processingImage],
  ["Farm Fresh Spices", "Products", productsImage], ["Behind The Farm", "Farm", heroFarm],
  ["Packing & Supply", "Supply", packagingImage],
] as const;

const socialPosts = [
  ["Fresh harvest from Northeast India.", heroTurmeric], ["Turmeric, pepper and cinnamon—naturally sourced.", productsImage],
  ["Carefully prepared for wholesale and retail supply.", processingImage], ["Ready for safe supply across India.", packagingImage],
] as const;

const reviews = [
  ["RK", "Ravi Kumar", "Great quality products and reliable supply.", "Guwahati, Assam"],
  ["AS", "Anita Sharma", "Fresh aroma and professional communication.", "Kolkata, West Bengal"],
  ["MA", "Mohammed Arif", "A dependable option for regular agro enquiries.", "Delhi, India"],
] as const;

const trustFeatures: Array<[LucideIcon, string, string]> = [
  [Leaf,"100% Natural","Naturally sourced agro products."],[Wheat,"Farm Fresh","Fresh products sourced with care."],[Users,"Trusted Supplier","Reliable wholesale & retail supply."],[Truck,"Pan India Supply","Supply available across India."],[Award,"Quality Assured","Focus on quality at every stage."],[Sprout,"Supporting Farmers","Connecting quality products with farmers and buyers."],
];

const qualityBadges: Array<[LucideIcon, string]> = [[Award,"Best Quality Assured"],[Leaf,"100% Natural"],[ShieldCheck,"Trusted Supplier"],[Sprout,"Supporting Farmers"],[Wheat,"Natural Aroma"],[Star,"Rich in Curcumin"]];

function Index() {
  const [slide, setSlide] = useState(0);
  const [review, setReview] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((value) => (value + 1) % heroSlides.length), 5000);
    return () => window.clearInterval(timer);
  }, []);
  useEffect(() => {
    const timer = window.setInterval(() => setReview((value) => (value + 1) % reviews.length), 4500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground">
      <div className="ticker-shell bg-primary text-primary-foreground" aria-label="Announcements">
        <div className="ticker-track py-2 text-[10px] font-bold uppercase sm:text-xs">
          {[0, 1].map((copy) => <div className="ticker-set" key={copy} aria-hidden={copy === 1}>
            <span>🌿 FA Northeast Agro Enterprise</span><span>🔥 Farm Fresh Spices</span><span>💛 Special Wholesale Prices</span><span>🚚 All Over India Delivery</span><span>🌱 100% Natural Products</span>
          </div>)}
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6">
          <a href="#home" className="flex min-w-0 items-center gap-2.5" aria-label="FA Northeast Agro home">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-sm font-bold text-accent-foreground">FA</span>
            <span className="min-w-0"><strong className="block truncate font-display text-base leading-none text-primary sm:text-lg">FA Northeast Agro</strong><small className="mt-1 block truncate text-[9px] font-bold uppercase text-muted-foreground">Pure • Natural • Farm Fresh</small></span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex" aria-label="Main navigation">
            {[["Home","#home"],["About","#about"],["Products","#products"],["Offers","#offer"],["Reviews","#reviews"],["Contact","#contact"]].map(([label,href]) => <a className="nav-link" href={href} key={label}>{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a className="hidden rounded-full bg-accent px-4 py-2 text-xs font-bold text-accent-foreground sm:inline-flex" href="#contact">Enquire</a>
            <button className="icon-button lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen} aria-label="Toggle menu">{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-1">{[["Home","#home"],["About","#about"],["Products","#products"],["Offers","#offer"],["Reviews","#reviews"],["Contact","#contact"]].map(([label,href]) => <a className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-secondary" onClick={() => setMenuOpen(false)} href={href} key={label}>{label}</a>)}</div>
        </nav>}
      </header>

      <main>
        <section id="home" className="hero relative min-h-[76svh] overflow-hidden sm:min-h-[720px]" onTouchStart={(e) => e.currentTarget.dataset['touch'] = String(e.touches[0]?.clientX ?? 0)} onTouchEnd={(e) => { const start = Number(e.currentTarget.dataset['touch'] ?? 0); const end = e.changedTouches[0]?.clientX ?? start; if (Math.abs(start-end)>50) setSlide((slide + (start>end?1:-1)+heroSlides.length)%heroSlides.length); }}>
          {heroSlides.map((item, index) => <img key={item.title} src={item.image} alt={index === 0 ? "Turmeric farm in Northeast India" : index === 1 ? "Fresh turmeric roots" : "Agro products prepared for supply"} className={`hero-image ${index === slide ? "is-active" : ""}`} width={1920} height={1080} fetchPriority={index === 0 ? "high" : "auto"}/>)}
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative mx-auto flex min-h-[76svh] max-w-7xl items-end px-4 pb-20 pt-16 sm:min-h-[720px] sm:items-center sm:px-6 sm:pb-24">
            <div className="max-w-2xl animate-slide-up text-primary-foreground" key={slide}>
              <p className="mb-4 text-xs font-bold uppercase text-highlight">{heroSlides[slide]?.eyebrow}</p>
              <h1 className="font-display text-5xl font-medium leading-[1.02] sm:text-7xl">{heroSlides[slide]?.title}</h1>
              <p className="mt-4 max-w-xl text-xl font-medium text-primary-foreground/90 sm:text-2xl">{heroSlides[slide]?.copy}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="cta-primary" href={heroSlides[slide]?.href}><span>{heroSlides[slide]?.cta}</span><ArrowRight size={17}/></a>
                <a className="cta-ghost" href="#contact">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">{heroSlides.map((item,index)=><button key={item.title} onClick={()=>setSlide(index)} aria-label={`Show slide ${index+1}`} className={`hero-dot ${slide===index?"is-active":""}`}/>)}</div>
          <button className="hero-arrow left-4" onClick={()=>setSlide((slide-1+heroSlides.length)%heroSlides.length)} aria-label="Previous slide"><ChevronLeft/></button>
          <button className="hero-arrow right-4" onClick={()=>setSlide((slide+1)%heroSlides.length)} aria-label="Next slide"><ChevronRight/></button>
        </section>

        <div className="ticker-shell bg-accent text-accent-foreground"><div className="ticker-track py-3 text-xs font-bold uppercase"><div className="ticker-set"><b>FA Northeast Agro Enterprise</b><span>• Farm Fresh</span><span>• Natural Spices</span><span>• Wholesale Price</span><span>• Pan India Supply</span><span>• Contact Now</span></div><div className="ticker-set" aria-hidden="true"><b>FA Northeast Agro Enterprise</b><span>• Farm Fresh</span><span>• Natural Spices</span><span>• Wholesale Price</span><span>• Pan India Supply</span><span>• Contact Now</span></div></div></div>

        <section id="products" className="section bg-background"><SectionHeading eyebrow="From Northeast India" title="Our Natural Products" copy="Farm Fresh Quality • Naturally Sourced • Carefully Supplied" />
          <div className="scroll-row mx-auto max-w-7xl px-4 sm:px-6">{products.map(([name,desc,image,badge],index)=><article className="product-card" key={name}>
            <div className="relative aspect-[4/3] overflow-hidden"><img src={image} alt={name} loading="lazy" className={`h-full w-full object-cover transition duration-700 hover:scale-105 ${index===3?"object-[63%_55%]":""}`}/><span className="badge absolute left-3 top-3"><Leaf size={12}/>{badge}</span></div>
            <div className="p-5"><h3 className="font-display text-2xl text-primary">{name}</h3><p className="mt-2 min-h-10 text-sm text-muted-foreground">{desc}</p><div className="mt-5 grid grid-cols-2 gap-2"><a className="button-outline" href="#featured">View Product</a><a className="button-solid" href="#contact">Get Price</a></div></div>
          </article>)}</div>
        </section>

        <section id="offer" className="section px-4 sm:px-6"><div className="offer-panel mx-auto max-w-7xl overflow-hidden">
          <div className="relative z-10 max-w-2xl"><span className="offer-badge"><Star size={15} fill="currentColor"/> Special Offer</span><h2 className="mt-5 font-display text-4xl leading-tight sm:text-6xl">Special Wholesale Offer</h2><p className="mt-4 text-xl font-semibold">Quality Products at Competitive Prices</p><p className="mt-2 text-primary-foreground/75">Wholesale & Retail Supply Available Across India</p><a className="cta-yellow mt-7" href="#contact">Get Best Price <ArrowRight size={18}/></a></div>
          <Leaf className="absolute -right-8 -top-8 size-44 rotate-12 text-primary-foreground/10"/><Sprout className="absolute bottom-4 right-10 hidden size-28 text-highlight/30 sm:block"/>
        </div></section>

        <section id="featured" className="section bg-surface"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-lg"><img src={productsImage} alt="Premium turmeric with natural spices" loading="lazy" width={1408} height={1408} className="aspect-[4/3] h-full w-full object-cover"/></div>
          <div><p className="eyebrow">Our signature product</p><h2 className="mt-2 font-display text-4xl text-primary sm:text-5xl">Premium Turmeric</h2><p className="mt-4 text-lg text-muted-foreground">Naturally sourced turmeric from Northeast India.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{["Farm Fresh","Natural Aroma","Rich in Curcumin","Raw / Dry Available","Wholesale & Retail","Pan India Supply"].map(x=><div className="feature-check" key={x}><ShieldCheck size={18}/>{x}</div>)}</div><a className="cta-primary mt-8" href="#contact">Enquire Now <ArrowRight size={17}/></a></div>
        </div></section>

        <section className="section"><SectionHeading eyebrow="Our journey" title="From Farm to Your Door" copy="See Our Products & Agro Journey" />
          <div className="scroll-row mx-auto max-w-7xl px-4 sm:px-6">{reels.map(([title,label,image])=><article className="reel-card" key={title}><img src={image} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-reel-overlay"/><div className="absolute left-4 top-4 flex items-center gap-2 text-xs font-bold text-primary-foreground"><Instagram size={16}/><span>REEL</span></div><button className="play-button" aria-label={`Play ${title}`}><Play size={24} fill="currentColor"/></button><div className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground"><span className="text-xs font-bold uppercase text-highlight">{label}</span><h3 className="mt-1 font-display text-xl">{title}</h3></div></article>)}</div>
        </section>

        <section className="section bg-surface"><SectionHeading eyebrow="Social feed" title="Follow Our Agro Journey" copy="Fresh Updates • Products • Farming • Offers" />
          <div className="scroll-row mx-auto max-w-7xl px-4 sm:px-6">{socialPosts.map(([caption,image],i)=><article className="social-card" key={caption}><div className="flex items-center gap-3 p-4"><span className="grid size-9 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">FA</span><div><b className="block text-sm">fa_northeast_agro</b><span className="text-xs text-muted-foreground">Assam, India</span></div><Instagram className="ml-auto text-primary" size={20}/></div><img src={image} alt="FA Northeast Agro social update" loading="lazy" className="aspect-square w-full object-cover"/><div className="p-4"><div className="flex items-center gap-2"><Heart size={20}/><MessageCircle size={20}/><Send size={20}/><span className="ml-auto text-xs font-semibold text-muted-foreground">Post {i+1}</span></div><p className="mt-3 text-sm"><b>fa_northeast_agro</b> {caption}</p><a className="mt-3 inline-flex text-xs font-bold text-primary" href="#contact">View Post</a></div></article>)}</div>
        </section>

        <section className="section"><SectionHeading eyebrow="Our promise" title="Why Choose FA Northeast Agro Enterprise?" copy="Trusted sourcing and dependable supply from Northeast India." />
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">{trustFeatures.map(([Icon,title,copy])=><article className="trust-card" key={title}><span className="feature-icon"><Icon size={24}/></span><h3 className="mt-5 font-display text-2xl text-primary">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{copy}</p></article>)}</div>
        </section>

        <section id="about" className="section bg-primary text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-lg"><img src={farmerImage} alt="Assam farmer holding fresh turmeric harvest" loading="lazy" width={1024} height={1536} className="aspect-[4/5] w-full object-cover"/><span className="absolute bottom-4 left-4 rounded-full bg-background/90 px-4 py-2 text-xs font-bold text-primary">Northeast Assam</span></div>
          <div><p className="eyebrow text-highlight">About our company</p><h2 className="mt-3 font-display text-4xl sm:text-6xl">Pure Products.<br/>Trusted Supply.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">FA Northeast Agro Enterprise is focused on supplying pure, natural and farm-fresh spices and agro products from Northeast India.</p><div className="mt-8 grid gap-4 sm:grid-cols-2"><InfoLine icon={Users} label="Founder & Managing Director" value="Omar Faruk"/><InfoLine icon={MapPin} label="Address" value="Nakhuti Bazar, Lanka, Hojai, Assam - 782446"/></div></div>
        </div></section>

        <section className="border-y border-border bg-background py-8"><div className="scroll-row mx-auto max-w-7xl px-4 sm:px-6">{qualityBadges.map(([Icon,label])=><div className="quality-badge" key={label}><Icon size={22}/><span>{label}</span></div>)}</div></section>

        <section id="reviews" className="section bg-surface"><SectionHeading eyebrow="Customer voices" title="What Our Customers Say" copy="Sample reviews shown for design demonstration only." />
          <div className="mx-auto max-w-2xl px-4 sm:px-6"><article className="review-card" key={review}><Quote className="text-accent" size={34}/><div className="mt-5 flex gap-1 text-accent">{[1,2,3,4,5].map(x=><Star key={x} size={18} fill="currentColor"/>)}</div><blockquote className="mt-5 font-display text-2xl leading-snug text-primary sm:text-3xl">“{reviews[review]?.[2]}”</blockquote><div className="mt-7 flex items-center gap-3"><span className="grid size-12 place-items-center rounded-full bg-primary font-bold text-primary-foreground">{reviews[review]?.[0]}</span><div><b>{reviews[review]?.[1]}</b><p className="text-sm text-muted-foreground">{reviews[review]?.[3]} • Sample review</p></div></div></article><div className="mt-5 flex justify-center gap-3"><button className="icon-button" onClick={()=>setReview((review-1+reviews.length)%reviews.length)} aria-label="Previous review"><ChevronLeft/></button><button className="icon-button" onClick={()=>setReview((review+1)%reviews.length)} aria-label="Next review"><ChevronRight/></button></div></div>
        </section>

        <section id="contact" className="section px-4 sm:px-6"><div className="contact-panel mx-auto max-w-7xl"><img src={heroTurmeric} alt="Fresh turmeric ready for supply" loading="lazy" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-contact-overlay"/><div className="relative max-w-2xl p-7 text-primary-foreground sm:p-14"><p className="eyebrow text-highlight">Ek call, full jankari</p><h2 className="mt-3 font-display text-4xl sm:text-6xl">Looking for Quality Agro Products?</h2><p className="mt-4 text-lg text-primary-foreground/80">Contact us for wholesale and retail enquiries.</p><div className="mt-7 flex flex-wrap gap-3"><a className="cta-yellow" href={`tel:${phone}`}><Phone size={18}/> Call Now</a><a className="cta-whatsapp" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp</a><a className="cta-ghost" href={`mailto:${email}`}><Mail size={18}/> Send Enquiry</a></div><div className="mt-7 space-y-2 text-sm text-primary-foreground/75"><a className="flex items-center gap-2" href={`tel:${phone}`}><Phone size={15}/>{phone}</a><a className="flex items-center gap-2 break-all" href={`mailto:${email}`}><Mail size={15}/>{email}</a></div></div></div></section>
      </main>

      <footer className="bg-primary pb-24 pt-14 text-primary-foreground md:pb-8"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4"><div><span className="inline-grid size-12 place-items-center rounded-full bg-accent font-bold text-accent-foreground">FA</span><h2 className="mt-4 font-display text-2xl">FA Northeast Agro Enterprise</h2><p className="mt-2 text-sm text-primary-foreground/65">Pure • Natural • Farm Fresh Spices</p><div className="mt-5 flex gap-2"><a className="footer-icon" href="#" aria-label="Instagram"><Instagram size={17}/></a><a className="footer-icon" href="#" aria-label="Facebook"><Facebook size={17}/></a><a className="footer-icon" href={whatsapp} aria-label="WhatsApp"><MessageCircle size={17}/></a></div></div><FooterList title="Quick Links" items={[["Home","#home"],["About","#about"],["Products","#products"],["Offers","#offer"],["Reviews","#reviews"],["Contact","#contact"]]}/><FooterList title="Products" items={[["Turmeric","#products"],["Black Pepper","#products"],["Dalchini","#products"],["Agro Products","#products"]]}/><div><h3 className="footer-title">Contact & Registration</h3><ul className="mt-4 space-y-3 text-sm text-primary-foreground/65"><li>Nakhuti Bazar, Lanka, Hojai, Assam - 782446</li><li><a href={`tel:${phone}`}>{phone}</a></li><li className="break-all"><a href={`mailto:${email}`}>{email}</a></li><li>GST No. 18AGUPF4577F1ZX<br/>Udyam No. AS-30-0027645</li></ul></div></div><div className="mx-auto mt-12 max-w-7xl border-t border-primary-foreground/15 px-4 pt-6 text-xs text-primary-foreground/55 sm:px-6">© 2026 FA Northeast Agro Enterprise. All Rights Reserved.</div></footer>

      <div className="mobile-actions md:hidden"><a href={`tel:${phone}`}><Phone size={17}/>Call</a><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17}/>WhatsApp</a><a href={`mailto:${email}`}><Send size={17}/>Enquiry</a></div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) { return <div className="mx-auto mb-9 max-w-7xl px-4 sm:px-6"><p className="eyebrow">{eyebrow}</p><h2 className="mt-2 font-display text-4xl text-primary sm:text-5xl">{title}</h2><p className="mt-3 text-muted-foreground">{copy}</p></div>; }
function InfoLine({ icon: Icon, label, value }: { icon: typeof Users; label: string; value: string }) { return <div className="flex gap-3 border-t border-primary-foreground/15 pt-4"><Icon className="mt-0.5 shrink-0 text-highlight" size={20}/><div><span className="block text-xs font-bold uppercase text-primary-foreground/50">{label}</span><b className="mt-1 block text-sm">{value}</b></div></div>; }
function FooterList({ title, items }: { title: string; items: readonly (readonly [string,string])[] }) { return <div><h3 className="footer-title">{title}</h3><ul className="mt-4 space-y-2 text-sm text-primary-foreground/65">{items.map(([label,href])=><li key={label}><a href={href} className="hover:text-highlight">{label}</a></li>)}</ul></div>; }