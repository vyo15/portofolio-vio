import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const icons = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/vio_yusuf",
      icon: FaInstagram,
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@_vyooo",
      icon: FaTiktok,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@VioYusupIskandar",
      icon: FaYoutube,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/VioYusupIskandar",
      icon: FaFacebookF,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vio-yusup-iskandar-034701287/",
      icon: FaLinkedinIn,
    },
  ];

  return (
    <footer
      className="
        bg-[linear-gradient(to_bottom,#0369a1_0%,#0c4a6e_40%,#020617_100%)]
        py-12
      "
    >
      <div className="container mx-auto px-4">
        {/* ICONS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="flex justify-center gap-6"
        >
          {icons.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -4 }}
              className="
                group relative
                text-white/90
                hover:text-white
                transition
              "
            >
              {/* hover background */}
              <span
                className="
                  absolute inset-[-8px]
                  rounded-full
                  bg-white/0
                  group-hover:bg-white/15
                  transition
                "
              />

              {/* ICON */}
              <item.icon className="relative w-6 h-6 sm:w-7 sm:h-7" />

              {/* tooltip */}
              <span
                className="
                  pointer-events-none
                  absolute -top-9 left-1/2 -translate-x-1/2
                  rounded-md bg-black/80 px-2 py-1
                  text-xs text-white
                  opacity-0 scale-95
                  group-hover:opacity-100
                  group-hover:scale-100
                  transition
                "
              >
                {item.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* COPYRIGHT */}
        <div className="mt-8 text-center text-white/90">
          <h2 className="font-semibold">© 2024 — Vio Yusup Iskandar</h2>
          <p className="text-sm opacity-80">Dibuat dengan ❤</p>
        </div>
      </div>
    </footer>
  );
}
