"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import { portfolio } from "@/lib/data";
import FadeUp from "@/components/animations/FadeUp";
import HeroImg from "@/assets/images/hero-img.webp";
import RevealLine from "../ui/RevealLine";

/* Phrases that follow the static "wanna" */
const PHRASES = ["connect?", "collaborate?", "chat?", "build apps?", "talk domains?"];

function useTypewriter(
  words: string[],
  { typeSpeed = 90, deleteSpeed = 45, hold = 1700, pause = 350 } = {}
) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      // Finished typing: hold, then start deleting
      timer = setTimeout(() => setDeleting(true), hold);
    } else if (deleting && text === "") {
      // Finished deleting: short pause, then next phrase
      timer = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, pause);
    } else {
      timer = setTimeout(
        () => setText(current.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteSpeed : typeSpeed
      );
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, hold, pause]);

  return text;
}

function PhTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Manila",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs tracking-widest-2 uppercase text-chalk/80 md:justify-start">
      <Globe size={12} aria-hidden="true" className="text-accent" />
      {/* nbsp keeps the height stable until the client renders the time */}
      <span className="tabular-nums">{time || "\u00A0"}</span>
      <span aria-hidden="true">·</span>
      <span>PHT · UTC+8</span>
    </div>
  );
}

function getGmailComposeUrl(email: string) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "0%"]);
  const typed = useTypewriter(PHRASES);

  // Split off the trailing "?" so it can be colored separately
  const hasQuestion = typed.endsWith("?");
  const typedText = hasQuestion ? typed.slice(0, -1) : typed;

  const links = [
    { label: portfolio.email, href: getGmailComposeUrl(portfolio.email) },
    ...Object.entries(portfolio.social).map(([platform, url]) => ({
      label: platform,
      href: url as string,
    })),
  ];

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      style={{ y }}
      className="bg-bg text-white py-28 md:py-40 overflow-hidden"
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 px-8 md:flex-row md:items-end md:justify-between md:px-12">
        {/* Headline */}
        <div className="flex flex-col items-center gap-6 text-center md:items-start md:gap-8 md:text-left">
          <h2 className="font-display font-bold text-chalk text-[clamp(2.5rem,11vw,9rem)] md:text-[clamp(2.5rem,7vw,5rem)] lg:text-[clamp(3rem,11vw,9rem)] leading-[0.9] tracking-[-0.05em]">
            <span className="sr-only">Wanna {PHRASES.join(", ")}</span>

            <span aria-hidden="true" className="block">
              <span className="block">wanna</span>
              {/* min-h keeps the layout from jumping while text is deleted */}
              <span className="block min-h-[1em] whitespace-nowrap">
                {typedText}
                {hasQuestion && <span className="text-accent">?</span>}
                <motion.span
                  className="ms-[0.04em] inline-block h-[0.8em] w-[0.07em] translate-y-[0.06em] bg-accent align-baseline"
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
                />
              </span>
            </span>
          </h2>

          {/* local time */}
          <FadeUp delay={0.3}>
            <PhTime />
          </FadeUp>
        </div>

        {/* Contact buttons + image */}
        <div className="flex w-fit shrink-0 flex-col items-stretch gap-3 self-center md:self-auto">
          {/* Hero image */}
          <FadeUp>
            <div className="bg-accent relative mx-auto mb-4 aspect-square w-48 overflow-hidden rounded-full sm:w-56">
              <Image
                src={HeroImg}
                alt="Janine V."
                fill
                sizes="(min-width: 640px) 224px, 192px"
                className="origin-center scale-[2] object-cover pt-12"
              />
            </div>
          </FadeUp>

          {links.map(({ label, href }, i) => (
            <FadeUp key={label} delay={0.1 + i * 0.08}>
              <a
                href={href}
                target={href.startsWith("tel:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="bg-bg rounded-3xl group flex w-full items-center justify-between gap-3 px-4 sm:px-6 py-2.5 sm:py-3.5 border border-accent text-xs sm:text-sm tracking-widest-2 lowercase transition-all duration-300 hover:bg-accent hover:border-ink"
              >
                <span className="text-accent transition-colors duration-300 group-hover:text-ink">
                  {label}
                </span>
                <motion.span
                  className="text-accent transition-colors duration-300 group-hover:text-ink"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <ArrowUpRight size={15} />
                </motion.span>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mx-auto mt-20 w-full max-w-[1400px] px-8 md:mt-28 md:px-12">
        <RevealLine color={"bg-accent/30"} delay={0.6} />

        <div className="flex flex-col items-center justify-between gap-2 pt-6 text-[10px] tracking-widest-2 text-chalk/90 sm:text-xs md:flex-row">
        <FadeUp delay={0.8}>
          <p>© 2026 {portfolio.name}. All rights reserved.</p>
        </FadeUp>
        <FadeUp delay={0.8}>
          <p>Built with Next.js &amp; Framer Motion</p>
        </FadeUp>
        </div>
      </div>
    </motion.section>
  );
}