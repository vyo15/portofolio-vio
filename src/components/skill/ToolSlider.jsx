import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {
  SiArduino,
  SiXampp,
  SiCanva,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

import { RiFileExcel2Line } from "react-icons/ri";

import { FaWindows, FaLinux, FaGithub, FaFileWord } from "react-icons/fa";

const tools = [
  { name: "Windows", icon: FaWindows },
  { name: "Linux", icon: FaLinux },
  { name: "GitHub", icon: FaGithub },
  { name: "Arduino", icon: SiArduino },
  { name: "XAMPP", icon: SiXampp },
  { name: "Visual Studio", icon: BiLogoVisualStudio },
  { name: "Canva", icon: SiCanva },
  { name: "Adobe Premiere Pro", icon: SiAdobepremierepro },
  { name: "Adobe Photoshop", icon: SiAdobephotoshop },
  { name: "Adobe Illustrator", icon: SiAdobeillustrator },
  { name: "Excel", icon: RiFileExcel2Line },
  { name: "Word", icon: FaFileWord },
];

export default function ToolSlider() {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={16}
      slidesPerView={2.5}
      breakpoints={{
        640: { slidesPerView: 3.5 },
        1024: { slidesPerView: 5 },
      }}
    >
      {tools.map((item) => (
        <SwiperSlide key={item.name}>
          <div className="h-28 rounded-xl bg-slate-100 border flex flex-col items-center justify-center gap-2 hover:bg-slate-200 transition">
            <item.icon className="text-3xl text-slate-700" />
            <span className="text-sm font-medium text-slate-800">
              {item.name}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
