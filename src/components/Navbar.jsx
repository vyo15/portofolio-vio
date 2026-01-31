import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setIsFixed(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={[
        "top-0 left-0 w-full flex items-center z-50",
        isFixed ? "fixed bg-white shadow navbar-fixed" : "absolute bg-white",
      ].join(" ")}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative">
          {/* LOGO */}
          <div className="px-6 lg:px-20 py-2">
            <a
              href="#home"
              className="font-bold text-2xl lg:text-4xl text-blue-950"
            >
              VYO
            </a>
          </div>

          <div className="flex items-center px-4">
            {/* HAMBURGER */}
            <button
              onClick={() => setOpen((v) => !v)}
              className={`absolute right-4 lg:hidden ${
                open ? "hamburger-active" : ""
              }`}
              type="button"
              aria-label="Toggle menu"
            >
              <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 origin-top-left" />
              <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300" />
              <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 origin-bottom-left" />
            </button>

            {/* NAV MENU */}
            <motion.nav
              initial={false}
              animate={{
                opacity: open ? 1 : 1, // ❗ desktop selalu 1
                y: open ? 0 : 0,
                pointerEvents: "auto",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={[
                "absolute bg-white shadow-lg rounded-lg max-w-[250px] w-full right-5 top-full",
                "lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none",
                open ? "block" : "hidden lg:block",
              ].join(" ")}
            >
              <ul className="block lg:flex my-5">
                <li className="group">
                  <a
                    href="#home"
                    onClick={() => setOpen(false)}
                    className="flex text-base text-black py-2 mx-8 group-hover:text-blue-950"
                  >
                    Beranda
                  </a>
                </li>

                <li className="group">
                  <a
                    href="#skill-education"
                    onClick={() => setOpen(false)}
                    className="flex text-base text-black py-2 mx-8 group-hover:text-blue-950"
                  >
                    Skill & Education
                  </a>
                </li>

                <li className="group">
                  <a
                    href="#portofolio"
                    onClick={() => setOpen(false)}
                    className="flex text-base text-black py-2 mx-8 group-hover:text-blue-950"
                  >
                    Portofolio
                  </a>
                </li>

                <li className="group">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="flex text-base text-black py-2 mx-8 group-hover:text-blue-950"
                  >
                    Contact
                  </a>
                </li>

                <li className="group">
                  <a
                    href="https://drive.google.com/file/d/1b_rcc8ZdZMQPK_t4f-E8yA14lKrpOnjp/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="flex text-base text-black py-2 mx-8 group-hover:text-blue-950"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </motion.nav>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
