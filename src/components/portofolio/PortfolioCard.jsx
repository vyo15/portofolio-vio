import { motion, useReducedMotion } from "framer-motion";

export default function PortfolioCard({ title, desc, image, link }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-white rounded-xl overflow-hidden
                 shadow-md hover:shadow-xl transition"
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-sm font-semibold
                       text-blue-950 hover:underline"
          >
            Lihat Detail →
          </a>
        )}
      </div>
    </motion.div>
  );
}
