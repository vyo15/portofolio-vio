import { motion, useReducedMotion } from "framer-motion";

export default function SkillRight() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <h2 className="pb-4 italic leading-relaxed">
        Informatics Engineering | Web Development | IT Helpdesk Technician
        Specialist | IT Network Engineer | System Administrator | Data Analyst |
        Freelance
      </h2>

      <p className="text-sm leading-relaxed text-justify">
        Halo, Saya adalah lulusan S1 Teknik Informatika yang memiliki pengalaman
        sebagai IT Support di instansi pemerintah dan perusahaan swasta. Saat
        ini saya bekerja di PT. Cipta Srigati Lestari sebagai IT Support Officer
        dengan tanggung jawab menangani instalasi jaringan, perawatan perangkat
        IT, troubleshooting sistem, serta dukungan teknis kepada pengguna. Saya
        menguasai pengelolaan perangkat keras dan lunak, instalasi CCTV,
        konfigurasi server, serta dokumentasi dan keamanan sistem. Di luar
        pekerjaan, saya aktif mengembangkan proyek berbasis web menggunakan
        React JS, Firebase, dan Electron, termasuk aplikasi Inventory Management
        System (IMS) dan website e-commerce. Saya terbiasa bekerja secara
        mandiri maupun dalam tim, cepat belajar, dan memiliki komitmen untuk
        terus berkembang di bidang teknologi informasi.
      </p>

      <h2 className="text-lg font-bold uppercase mt-10 mb-4">
        User Experience
      </h2>

      <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
        <li>
          Memberikan dukungan teknis IT Support & Helpdesk untuk hardware,
          software, jaringan, dan aplikasi internal perusahaan
        </li>

        <li>
          Troubleshooting sistem operasi Windows & Linux (basic), termasuk error
          software, driver, dan user issue
        </li>

        <li>
          Instalasi, konfigurasi, dan pemeliharaan PC, laptop, printer, scanner,
          dan peripheral IT lainnya
        </li>

        <li>
          Instalasi dan manajemen software, update patch sistem, antivirus, dan
          license management
        </li>

        <li>
          Manajemen jaringan komputer (LAN/WAN), IP addressing, subnetting, dan
          troubleshooting koneksi jaringan
        </li>

        <li>
          Instalasi, konfigurasi, monitoring, dan pemeliharaan server (basic),
          termasuk file sharing dan user access
        </li>

        <li>
          Manajemen user account (email, aplikasi internal, permission, reset
          password)
        </li>

        <li>
          Instalasi, konfigurasi, dan pemeliharaan CCTV analog & digital,
          termasuk backup rutin data rekaman melalui NAS
        </li>

        <li>Instalasi dan konfigurasi sistem PABX analog & digital</li>

        <li>
          Monitoring infrastruktur IT, jaringan, dan sistem untuk memastikan
          stabilitas dan keamanan operasional
        </li>

        <li>
          Penerapan dasar IT Security: update security patch, antivirus
          management, dan kontrol akses pengguna
        </li>

        <li>
          Pengelolaan data administrasi IT, dokumentasi teknis, laporan
          penggunaan, dan inventory perangkat IT
        </li>

        <li>
          Microsoft Office terutama Microsoft Excel (Pivot Table, VLOOKUP,
          HLOOKUP, IF, SUMIF, COUNT, data reporting)
        </li>

        <li>
          Pemrograman dan scripting: HTML, CSS, JavaScript, Python (basic
          automation), Arduino Uno, Visual Basic (basic)
        </li>

        <li>
          Mahir dalam pengolahan data, fast input data, dan administrasi
          berbasis sistem
        </li>

        <li>
          Membuat dokumentasi teknis, serta memberikan pelatihan dasar
          penggunaan aplikasi dan perangkat IT kepada user
        </li>

        <li>
          Terbiasa bekerja secara mandiri maupun dalam tim, cepat belajar,
          adaptif, dan berorientasi pada solusi
        </li>
      </ul>
    </motion.div>
  );
}
