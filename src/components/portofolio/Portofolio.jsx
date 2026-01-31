import PortfolioCard from "./PortfolioCard";

// ASSET
import landingImg from "../../assets/vio.png";
import ecommerceImg from "../../assets/E-Commerce.png";
import imsImg from "../../assets/IMS.jpeg";
import deteksiImg from "../../assets/Proses deteksi.png";

export default function Portofolio() {
  return (
    <section id="portofolio" className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-950">
            Portofolio
          </h2>
          <p className="mt-3 text-sm lg:text-base text-slate-600">
            Beberapa project yang pernah saya kerjakan
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* LANDING PAGE */}
          <PortfolioCard
            title="Landing Page Portofolio"
            desc="Landing page portofolio profesional menggunakan Tailwind CSS dengan tampilan modern, menarik, dan responsif."
            image={landingImg}
            link="https://vyo15.github.io/portofolio-vio/"
          />

          {/* E-COMMERCE */}
          <PortfolioCard
            title="Website E-Commerce (On Progress)"
            desc="Website e-commerce menggunakan React JS dan Node JS dengan Firebase. Fitur meliputi katalog produk, keranjang belanja, autentikasi Google, dan manajemen admin."
            image={ecommerceImg}
            link="https://ziyo-craft.vercel.app/"
          />

          {/* IMS */}
          <PortfolioCard
            title="Inventory Management System (IMS)"
            desc="Aplikasi manajemen inventaris berbasis web dan desktop untuk mengelola produk, kategori, pesanan, keuangan, dan stok."
            image={imsImg}
            link="https://vyo15.github.io/Inventory-App"
          />

          {/* OBJECT DETECTION */}
          <PortfolioCard
            title="Object Detection System"
            desc="Sistem deteksi objek berbasis computer vision untuk mengenali dan menganalisis objek secara real-time, digunakan untuk proses monitoring dan analisis data."
            image={deteksiImg}
            link="https://drive.google.com/file/d/11k8_4vKWj0fnG107EW2NeVfgmmI71c1P/view"
          />
        </div>
      </div>
    </section>
  );
}
