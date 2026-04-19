"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import React, { useRef, useState } from "react";

const expertiseCards = [
  {
    number: "01",
    title: "Social strategy",
    color: "bg-white text-black",
    tagColor: "border-black/20 text-black",
    ctaColor: "bg-black text-white",
    description:
      "Slimme strategie gebouwd op data. Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie.",
    top: "top-[56px]",
    z: "z-10",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "02",
    title: "Content creation",
    color: "bg-pink-300 text-black",
    tagColor: "border-black/20 text-black",
    ctaColor: "bg-black text-white",
    description:
      "Content die stopt met scrollen. Beelden die blijven hangen bij jouw doelgroep.",
    top: "top-[76px]",
    z: "z-20",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "03",
    title: "Activation",
    color: "bg-green-400 text-white",
    tagColor: "border-white/40 text-white/80",
    ctaColor: "bg-white/20 text-white border border-white/30",
    description:
      "Zichtbaar waar en wanneer het telt. De juiste content, op het juiste moment.",
    top: "top-[96px]",
    z: "z-30",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "04",
    title: "Data",
    color: "bg-blue-600 text-white",
    tagColor: "border-white/40 text-white/80",
    ctaColor: "bg-white/20 text-white border border-white/30",
    description:
      "Inzichten die impact maken. Wij laten de cijfers voor je werken.",
    top: "top-[116px]",
    z: "z-40",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },
];

const fanCards = [
  {
    type: "stat",
    bg: "#2B69F5",
    stat: "10M+",
    statColor: "#fff",
    label: "Organische views",
    labelColor: "#fff",
    sublabel: "Groei door slimme content",
    sublabelColor: "rgba(255,255,255,0.65)",
    borderColor: "rgba(255,255,255,0.35)",
    rotate: -6, // Tilted left
    left: "0%",
    bottom: 20,
    z: 10,
  },
  {
    type: "photo",
    bg: "#c0a888",
    rotate: -2, // Slightly tilted left
    left: "22%", // Gap created by percentage or higher pixel value
    bottom: 0,
    z: 20,
  },
  {
    type: "stat",
    bg: "#3DD68C",
    stat: "30+",
    statColor: "#0a3d22",
    label: "Merken geholpen",
    labelColor: "#0a3d22",
    sublabel: "Van start-up tot multinational",
    sublabelColor: "rgba(10,61,34,0.6)",
    borderColor: "rgba(0,0,0,0.2)",
    rotate: 3, // Tilted right
    left: "45%",
    bottom: 10,
    z: 30,
  },
  {
    type: "video",
    bg: "#b0b8a8",
    caption: "CARBON DAK.",
    rotate: 7, // Tilted more to the right
    left: "68%",
    bottom: 25,
    z: 40,
  },
];

// 1. Move this to the top of the file, above your LandingPage() function
const brandLogos = [
  { name: "Fides", src: "https://v1.bg.gg/logo/fides.png" },
  { name: "8RHK Ambassadeurs", src: "https://v1.bg.gg/logo/8rhk.png" },
  { name: "KNLTB", src: "https://v1.bg.gg/logo/knltb.png" },
  { name: "Tho", src: "https://v1.bg.gg/logo/tho.png" },
  { name: "De Talenten Tuin", src: "https://v1.bg.gg/logo/talenten-tuin.png" },
  { name: "Bullit", src: "https://v1.bg.gg/logo/bullit-logo.png" },
  { name: "Roasta", src: "https://v1.bg.gg/logo/roasta-logo.png" },
];

const tickerVariants: Variants = {
  animate: {
    x: [0, "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop" as const, // Explicitly cast the string
        duration: 30,
        ease: "linear",
      },
    },
  },
};


interface ExpertiseCardProps {
  number: string;
  title: string;
  color: string;
  tagColor: string;
  ctaColor: string;
  description: string;
  top: string;
  z: string;
  image: string;
}

function ExpertiseCard({
  number,
  title,
  color,
  tagColor,
  ctaColor,
  description,
  top,
  z,
  image,
}: ExpertiseCardProps) {
  return (
    <section
      className={`
        sticky ${top} ${z}
        ${color}
        rounded-[2.25rem_2.25rem_0_0]
        min-h-[620px]
        px-8 pt-8 pb-12
        flex flex-col gap-8
      `}
    >
      {/* Header row */}
      <div className="flex justify-between items-start">
        <span
          className={`text-xs font-semibold tracking-wide border rounded-full px-4 py-1.5 ${tagColor}`}
        >
          Expertise
        </span>
        <span className="text-6xl font-extralight opacity-15 leading-none">
          {number}
        </span>
      </div>

      {/* Content row */}
      <div className="flex items-end justify-between gap-4 mt-6">
        <div className="flex-1">
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-3">
            {title}
          </h3>
          <p className="text-sm opacity-60 max-w-xs leading-relaxed">
            {description}
          </p>
          <button
            className={`mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold ${ctaColor}`}
          >
            Meer over {title} <ArrowRight size={15} />
          </button>
        </div>

        <div className="w-28 h-28 overflow-hidden rounded-2xl flex-shrink-0 border border-black/10">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function WorkItem({ item, index }: { item: any; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = React.useState(false);
  // Track the play promise to prevent interruptions
  const playPromiseRef = useRef<Promise<void> | null>(null);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      // Store the promise returned by play()
      playPromiseRef.current = videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      if (playPromiseRef.current !== null) {
        playPromiseRef.current
          .then(() => {
            // Only pause if the play() was successful
            videoRef.current?.pause();
            videoRef.current!.currentTime = 0;
          })
          .catch(() => {
            // Silence the error if play was aborted
          });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `translateY(-${item.offset ?? index * 55}px)` }}
      className="relative aspect-[3.8/5] overflow-visible"
    >
      <div
        className="absolute inset-0 rounded-[3rem] border-[10px] overflow-hidden"
        style={{ borderColor: item.borderColor, backgroundColor: "#F8F3EE" }}
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/8" />

        <motion.div
          whileHover={{ y: -6 }}
          className="absolute left-6 right-6 bottom-6 rounded-[2rem] bg-white shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
        >
          <div className="rounded-[2rem] overflow-hidden">
            <div
              className="px-6 py-5 text-white"
              style={{ backgroundColor: item.panelColor }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-black leading-tight">
                    {item.title}
                  </h3>
                  <span className="mt-3 inline-flex rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                    {item.brand}
                  </span>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg">
                  <ArrowUpRight size={18} strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

const badgeVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  },
};
export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="bg-[#F2F0EB] min-h-screen text-black font-sans">
      {/* NAV */}
      <nav className="flex justify-between items-center px-10 py-4">
        <span className="font-black text-lg">GETHYPED</span>

        <div className="flex gap-1 border border-black/15 rounded-full px-2 py-1 bg-white/60 backdrop-blur-sm">
          {["Expertises", "Work", "About", "Contact"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-xs font-medium px-3.5 py-1.5 rounded-full hover:bg-black/5 transition"
            >
              {l}
            </a>
          ))}
        </div>

        <button className="bg-pink-200 text-black text-xs font-bold px-4 py-2 rounded-full">
          Get Results 🔥
        </button>
      </nav>

      {/* HERO */}
      <section className="px-10 pt-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[clamp(3rem,9vw,6rem)] font-black leading-[0.93] tracking-[-0.05em] max-w-[750px]"
        >
          Get Hyped. Get Noticed. Get Results.
        </motion.h1>

        <p className="text-sm text-black/50 max-w-[220px] mt-4 mb-10">
          Klaar met gokken op content die niets oplevert?
        </p>

        {/* CARDS */}

        <div className="relative h-[500px] w-full max-w-7xl mx-auto mt-12">
          {fanCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: card.rotate }}
              whileHover={{
                y: -20,
                scale: 1.05,
                zIndex: 100,
                transition: { duration: 0.2 }
              }}
              className="absolute w-[280px] h-[380px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-shadow hover:shadow-black/20"
              style={{
                left: card.left,
                bottom: `${card.bottom}px`,
                zIndex: card.z,
                background: card.bg,
              }}
            >
              {/* STAT CARD */}
              {card.type === "stat" && (
                <div className="flex flex-col justify-between h-full p-6">
                  <span
                    className="text-5xl font-black"
                    style={{ color: card.statColor }}
                  >
                    {card.stat}
                  </span>

                  <div
                    className="border-t pt-2"
                    style={{ borderColor: card.borderColor }}
                  >
                    <p
                      className="text-sm font-bold"
                      style={{ color: card.labelColor }}
                    >
                      {card.label}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: card.sublabelColor }}
                    >
                      {card.sublabel}
                    </p>
                  </div>
                </div>
              )}

              {/* IMAGE CARD */}
              {card.type === "photo" && (
                <img
                  src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486"
                  className="w-full h-full object-cover"
                />
              )}

              {/* VIDEO CARD */}
              {card.type === "video" && (
                <div className="w-full h-full relative">
                  <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-black text-lg drop-shadow-lg">
                      {card.caption}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}

        </div>

        <div className="mt-16 max-w-7xl mx-auto">
          <div className="max-w-4xl mb-10">
            <p className="text-[clamp(1rem,3vw,2rem)] font-black leading-[0.95] tracking-tight">
              Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[360px_1fr] items-start">
            <div className="h-[420px] w-full overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
                alt="Content creator"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between gap-8">
              <div className="space-y-6 max-w-2xl">
                <p className="text-base leading-7 text-black/90">
                  We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
                </p>
              </div>

              <div className="flex items-center gap-8">
                <button className="inline-flex items-center gap-3 rounded-full border border-black px-6 py-3 text-sm font-bold text-black transition hover:bg-black hover:text-white">
                  Leer ons kennen
                  <ArrowRight size={14} />
                </button>
                <button
                  onClick={() => document.getElementById('work-section')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="Scroll naar werk sectie"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-black transition hover:bg-black hover:text-white hover:border-black"
                >
                  <span className="text-xl">↓</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky Stacking Cards ── */}
      <div>
        {expertiseCards.map((card) => (
          <ExpertiseCard key={card.number} {...card} />
        ))}
      </div>

      {/* After the stack — sits on top naturally */}
      {/* ── Content Dat Scoort Section (Work) ── */}
      {/* 1. Added more top padding (pt-60) to give room for the cards pushing up */}
<section id="work-section" className="bg-[#F2F0EB] px-10 pt-60 pb-24 relative z-50">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="max-w-2xl mb-16">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-[clamp(3.5rem,7vw,5.5rem)] font-black leading-[0.9] tracking-tighter mb-8"
      >
        Content <br /> dat scoort.
      </motion.h2>
      <p className="text-lg font-medium leading-relaxed text-black/80 max-w-md mb-8">
        Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep.
        Met creatieve content die werkt en het verschil maakt.
      </p>
      <button className="group flex items-center gap-3 border border-black px-6 py-3 rounded-full text-xs font-bold hover:bg-black hover:text-white transition-all duration-300">
        Bekijk al ons werk
        <div className="bg-black text-white rounded-full p-1.5 group-hover:bg-white group-hover:text-black transition-colors">
          <ArrowRight size={14} />
        </div>
      </button>
    </div>

    {/* Video Grid */}
    {/* 2. Added items-start to allow the cards to sit at different heights */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
      {[
        {
          title: "Van nul naar vol, binnen 3 weken",
          brand: "Bullit",
          image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80",
          borderColor: "#FF4D00",
          panelColor: "#FF4D00",
          offset: 0,
        },
        {
          title: "Zacht in smaak, sterk in beeld",
          brand: "Roasta",
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
          borderColor: "#2B69F5",
          panelColor: "#2B69F5",
          offset: 60,
        },
        {
          title: "Content die écht smaakt (en raakt)",
          brand: "Loco",
          image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
          borderColor: "#3DD68C",
          panelColor: "#3DD68C",
          offset: 120,
        },
      ].map((item, idx) => {
        return (
          <WorkItem key={item.brand} item={item} index={idx} />
        );
      })}
    </div>
  </div>
</section>
      {/* ── BRANDS TICKER SECTION ── */}
      <section className="bg-[#F2F0EB] py-24 relative z-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tighter"
          >
            These brands <br /> got hyped.
          </motion.h2>
        </div>

        {/* Infinite Ticker Container */}
        <div className="flex relative overflow-hidden">
          <motion.div
            variants={tickerVariants}
            animate="animate"
            className="flex gap-6 whitespace-nowrap"
          >
            {/* We double the array here to create the infinite loop effect */}
            {[...brandLogos, ...brandLogos].map((logo, index) => (
              <div
                key={index}
                className="w-[280px] h-[340px] bg-white rounded-[2.5rem] flex-shrink-0 flex items-center justify-center shadow-sm border border-black/5 p-12"
              >
                {/* Using a div with text as a placeholder if images aren't ready */}
                <span className="text-xl font-bold text-black opacity-30">
                  {logo.name}
                </span>
                {/* Uncomment below when your Image paths are ready */}
                {/* <Image src={logo.src} alt={logo.name} width={160} height={80} className="object-contain" /> */}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER SECTION ── */}
      <section className="bg-[#F2F0EB] pt-32 pb-10 relative z-50">
        {/* CTA Area */}
        <div className="max-w-7xl mx-auto px-10 text-center mb-32 relative">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-[clamp(3rem,8vw,7rem)] font-black tracking-tighter mb-10"
          >
            Let's Get Hyped!
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-3 bg-white border border-black px-6 py-3 rounded-full font-bold text-sm hover:bg-black hover:text-white transition-all group">
              Mail ons direct
              <div className="bg-black text-white p-1 rounded-md group-hover:bg-white group-hover:text-black transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </div>
            </button>

            <button className="flex items-center gap-3 bg-[#FF4D00] text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform">
              Get Results 🔥
            </button>
          </div>

          {/* Rotating GH Badge */}
          <motion.div
            variants={badgeVariants}
            animate="animate"
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
          >
            <div className="w-24 h-24 bg-pink-200 rounded-full flex items-center justify-center p-2 relative">
              <span className="text-[8px] font-bold absolute inset-0 flex items-center justify-center uppercase tracking-[0.2em]">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text><textPath href="#circlePath">GET HYPED • GET NOTICED • </textPath></text>
                </svg>
              </span>
              <span className="text-2xl font-black">GH</span>
            </div>
          </motion.div>
        </div>

        {/* Main Footer Background */}
        <div className="relative">
          {/* The Diagonal Cut */}
          <div className="absolute top-0 left-0 w-full h-20 bg-[#EBE9E3] -skew-y-2 origin-top-left -z-10" />

          <div className="bg-[#EBE9E3] px-10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

              {/* Logo and Copyright */}
              <div className="space-y-6">
                <h3 className="text-5xl font-black tracking-tighter">GETHYPED</h3>
                <div className="flex gap-2">
                  {["Expertises", "Work", "About", "Contact"].map((link) => (
                    <a key={link} href="#" className="bg-white px-4 py-1.5 rounded-full text-xs font-bold border border-black/5 hover:bg-black hover:text-white transition-colors">
                      {link}
                    </a>
                  ))}
                </div>
                <div className="flex gap-4 text-[10px] font-bold opacity-40 uppercase tracking-widest pt-4">
                  <span>© 2025 Get Hyped</span>
                  <span>Design by Dylan</span>
                  <span>Privacyvoorwaarden</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col md:flex-row gap-16 md:text-right">
                <div className="space-y-6">
                  <div className="flex gap-3 justify-start md:justify-end">
                    {["li", "tk", "ig", "yt"].map((soc) => (
                      <div key={soc} className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[10px] font-bold border border-black/5 cursor-pointer hover:bg-black hover:text-white transition-colors uppercase">
                        {soc}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1">
                    <p className="text-[10px] font-bold opacity-40 uppercase">Contact</p>
                    <p className="text-xs font-bold">info@gethyped.nl</p>
                    <p className="text-xs font-bold">+31 6 1533 7496</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[10px] font-bold opacity-40 uppercase">Adres</p>
                    <p className="text-xs font-bold">Beltrumsestraat 6,<br />7141 AL Groenlo</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
