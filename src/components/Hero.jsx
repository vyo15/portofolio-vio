import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import vioImg from "../assets/vio.png";

export default function Hero() {
  const fullName = "Vio Yusup Iskandar";

  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | done | deleting
  const shouldReduceMotion = useReducedMotion();

  /* =====================
     Typing Effect
  ====================== */
  useEffect(() => {
    let timer;

    if (phase === "typing") {
      timer = setTimeout(
        () => {
          const next = fullName.slice(0, typed.length + 1);
          setTyped(next);

          if (next === fullName) setPhase("done");
        },
        60 + Math.random() * 70,
      );
    }

    if (phase === "done") {
      timer = setTimeout(() => setPhase("deleting"), 1200);
    }

    if (phase === "deleting") {
      timer = setTimeout(() => {
        const next = fullName.slice(0, Math.max(0, typed.length - 1));
        setTyped(next);

        if (next.length === 0) setPhase("typing");
      }, 35);
    }

    return () => timer && clearTimeout(timer);
  }, [typed, phase, fullName]);

  const showCursor = phase !== "done";

  /* =====================
     Motion Variants
  ====================== */
  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="pt-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* FOTO */}
          <div className="w-full lg:w-1/2 order-1 px-4">
            <div className="flex justify-center lg:justify-start">
              <motion.div
                variants={fadeUp}
                initial={shouldReduceMotion ? false : "hidden"}
                animate="show"
                className="
        mt-2 lg:mt-0
        w-[92vw]
        max-w-[480px]
        sm:w-[460px]
        md:w-[560px]
        lg:w-[660px]
        lg:max-w-none
      "
              >
                <img
                  src={vioImg}
                  alt="Vio Yusup Iskandar"
                  className="w-full h-auto object-contain select-none"
                  draggable={false}
                />
              </motion.div>
            </div>
          </div>

          {/* TEKS */}
          <div className="w-full lg:w-1/2 order-2 px-4 mt-8 lg:mt-0">
            <motion.div
              variants={fadeUp}
              initial={shouldReduceMotion ? false : "hidden"}
              animate="show"
              transition={{ delay: 0.1 }}
              className="max-w-xl"
            >
              <p className="text-sm sm:text-base lg:text-xl font-semibold text-slate-700">
                Hello 👋 Nama Saya,
              </p>

              {/* Nama Typing */}
              <div className="mt-2">
                {/* ghost text supaya layout stabil */}
                <h2 className="font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight invisible">
                  {fullName}
                </h2>

                <h2 className="-mt-[1.2em] font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-tl from-sky-400 to-sky-900">
                    {typed}
                  </span>

                  {showCursor && (
                    <motion.span
                      className="ml-1 inline-block h-[0.9em] w-[2px] bg-sky-800 align-middle"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  )}
                </h2>
              </div>

              <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Lulusan Teknik Informatika di Universitas Buana Perjuangan
                Karawang
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <motion.a
                  href="https://api.whatsapp.com/send/?phone=%2B6289658830223"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center
                             bg-sky-800 text-white
                             px-6 py-2 text-sm font-semibold
                             rounded-full
                             hover:opacity-90 hover:shadow-lg transition"
                >
                  Hubungi Saya
                </motion.a>

                <motion.a
                  href="#portofolio"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center
                             border border-slate-300 text-slate-700
                             px-6 py-2 text-sm font-semibold
                             rounded-full
                             hover:bg-slate-50 transition"
                >
                  Lihat Portofolio
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
