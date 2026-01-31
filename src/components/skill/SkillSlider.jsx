import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaNetworkWired,
  FaServer,
  FaTools,
  FaBug,
} from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Tailwind CSS", icon: RiTailwindCssFill },
  { name: "IT Support", icon: FaTools },
  { name: "Helpdesk", icon: FaBug },
  { name: "Networking", icon: FaNetworkWired },
  { name: "Server", icon: FaServer },
];

export default function SkillSlider() {
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
      {skills.map((item) => (
        <SwiperSlide key={item.name}>
          <div className="h-28 rounded-xl bg-sky-50 border border-sky-100 flex flex-col items-center justify-center gap-2 hover:bg-sky-100 transition">
            <item.icon className="text-3xl text-sky-700" />
            <span className="text-sm font-medium text-sky-900">
              {item.name}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
