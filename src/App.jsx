import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillEducation from "./components/skill/SkillEducation";
import SkillTools from "./components/skill/SkillTools";
import Portofolio from "./components/portofolio/Portofolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SkillEducation />
      <SkillTools />
      <Portofolio />
      <Contact />
      <Footer />
    </>
  );
}
