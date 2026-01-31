import { motion, useReducedMotion } from "framer-motion";

export default function SkillLeft() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      {/* Title */}
      <h1 className="font-semibold uppercase text-2xl lg:pt-10 pb-6">
        Skills & Education
      </h1>

      {/* EDUCATION TIMELINE */}
      <div className="pl-6 border-l-4 border-gray-900">
        <div className="relative pb-10">
          <span className="absolute left-0 top-0 -translate-x-1/2 -ml-[26px] w-4 h-4 rounded-full bg-gray-900" />
          <h2 className="font-semibold leading-snug">
            Universitas Buana Perjuangan Karawang
          </h2>
          <p className="text-sm mt-2">S1 Teknik Informatika - 2022</p>
        </div>

        <div className="relative pb-2">
          <span className="absolute left-0 top-0 -translate-x-1/2 -ml-[26px] w-4 h-4 rounded-full bg-gray-900" />
          <h2 className="font-semibold leading-snug">
            SMK Texar Klari Karawang
          </h2>
          <p className="text-sm mt-2">Rekayasa Perangkat Lunak - 2016</p>
        </div>
      </div>

      {/* INFORMAL */}
      <h1 className="font-semibold uppercase text-2xl pt-14 pb-6">
        Informal Education
      </h1>

      <div className="pl-6 border-l-4 border-gray-900">
        <div className="relative pb-2">
          <span className="absolute left-0 top-0 -translate-x-1/2 -ml-[26px] w-4 h-4 rounded-full bg-gray-900" />

          <a
            href="https://www.credly.com/badges/f7bf32d1-9699-4d5c-8a31-197a80bf7d09/linked_in_profile"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <h2 className="font-semibold leading-snug">
              Google IT Support Professional Certificate
            </h2>
            <p className="text-sm mt-2">Coursera, Online - 2024</p>
          </a>
        </div>
      </div>

      {/* CERT */}
      <h2 className="font-semibold uppercase text-lg pt-14 pb-5">
        Lisensi dan Sertifikasi
      </h2>

      <div className="space-y-4 text-sm leading-relaxed">
        <a
          className="block hover:underline"
          target="_blank"
          rel="noreferrer"
          href="https://www.coursera.org/account/accomplishments/professional-cert/GDD45AUWX8XY"
        >
          Training IT Support Google Academy Digital Talent Scholarship,
          Coursera | 2024
        </a>

        <a
          className="block hover:underline"
          target="_blank"
          rel="noreferrer"
          href="https://www.mindluster.com/student/certificate/18062258671"
        >
          JavaScript Form Validation using Objects in JavaScript, MindLuster |
          2024
        </a>

        <a
          className="block hover:underline"
          target="_blank"
          rel="noreferrer"
          href="https://www.coursera.org/account/accomplishments/verify/HH6HBVLM7DGX"
        >
          Keamanan IT: Pertahanan terhadap Kejahatan Digital, Coursera | 2024
        </a>

        <a
          className="block hover:underline"
          target="_blank"
          rel="noreferrer"
          href="https://www.coursera.org/account/accomplishments/verify/X9AVA9EGE5UT"
        >
          Sistem dan Layanan Infrastruktur TI, Coursera | 2024
        </a>

        <a
          className="block hover:underline"
          target="_blank"
          rel="noreferrer"
          href="https://www.coursera.org/account/accomplishments/verify/UR9WG833X8F8"
        >
          Sistem Operasi dan Anda: Menjadi Pengguna yang Berdaya, Coursera |
          2024
        </a>

        <a
          className="block hover:underline"
          target="_blank"
          rel="noreferrer"
          href="https://www.coursera.org/account/accomplishments/verify/SS9KYB52EQCV"
        >
          Seluk Beluk Jaringan Komputer, Coursera | 2024
        </a>

        <a
          className="block hover:underline"
          target="_blank"
          rel="noreferrer"
          href="https://www.coursera.org/account/accomplishments/verify/ZVMP7J3K784V"
        >
          Dasar Dasar Dukungan Teknis, Coursera | 2024
        </a>

        <a
          className="block hover:underline"
          target="_blank"
          rel="noreferrer"
          href="https://skillshop.credential.net/e96f5161-295d-4746-94b1-9df52f455b7f"
        >
          Google Analytics, Google Skillshop | 2024
        </a>

        <a
          className="block hover:underline"
          target="_blank"
          rel="noreferrer"
          href="https://www.hackerrank.com/certificates/8f7fe89817f3"
        >
          Python Basic, HackerRank | 2024
        </a>

        <a
          className="block hover:underline"
          target="_blank"
          rel="noreferrer"
          href="https://account.gcfglobal.org/verify/Hv5Cg4bZh35lt2eO"
        >
          Excel Basic, GCFGlobal | 2024
        </a>
      </div>
    </motion.div>
  );
}
