import { motion, useReducedMotion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="pt-20 pb-32">
      <div className="container mx-auto px-4">
        {/* Grid utama */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          {/* KIRI: Info kontak */}
          <div className="lg:col-span-4">
            <div className="space-y-10 lg:pt-20">
              {/* Email */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full flex flex-col items-center text-center"
              >
                <FaEnvelope className="mb-3 text-3xl text-sky-800" />
                <h2 className="font-semibold mb-1">E-mail</h2>
                <p className="text-gray-700">vioyusupiskandar@gmail.com</p>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                className="w-full flex flex-col items-center text-center"
              >
                <FaMapMarkerAlt className="mb-3 text-3xl text-sky-800" />
                <h2 className="font-semibold mb-1">Address</h2>
                <p className="text-gray-700 leading-relaxed">
                  Perum Terangsari Blok F3 No 26 Desa Cibalong Sari Kecamatan
                  Klari Kabupaten Karawang, 41371
                </p>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="w-full flex flex-col items-center text-center"
              >
                <FaPhoneAlt className="mb-3 text-3xl text-sky-800" />
                <h2 className="font-semibold mb-1">Phone</h2>
                <p className="text-gray-700">0896-5883-0223</p>
              </motion.div>
            </div>
          </div>

          {/* KANAN: Form */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-8"
          >
            <div className="w-full bg-slate-100 rounded-xl p-6 lg:p-10">
              <h1 className="font-semibold text-lg text-black uppercase text-center">
                Contact Me
              </h1>
              <p className="font-medium text-md text-gray-600 mt-2 mb-10 text-center">
                Kirim pesan via E-mail
              </p>

              <form
                action="https://formspree.io/f/xwkgjaoz"
                method="POST"
                className="mx-auto"
              >
                <div className="w-full mb-6">
                  <label
                    htmlFor="name"
                    className="block text-base font-bold text-gray-800 mb-2"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-slate-50 text-gray-800 p-3 rounded-md
                               focus:outline-none focus:ring-1 focus:border"
                    required
                  />
                </div>

                <div className="w-full mb-6">
                  <label
                    htmlFor="email"
                    className="block text-base font-bold text-gray-800 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-slate-50 text-gray-800 p-3 rounded-md
                               focus:outline-none focus:ring-1 focus:border"
                    required
                  />
                </div>

                <div className="w-full mb-8">
                  <label
                    htmlFor="message"
                    className="block text-base font-bold text-gray-800 mb-2"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-slate-50 text-gray-800 p-3 rounded-md
                               focus:outline-none h-32"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="text-base font-semibold text-white bg-sky-800
                             px-8 rounded-full w-full hover:opacity-80
                             hover:shadow-lg transition duration-300 h-10"
                >
                  Kirim
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
