import { motion, useReducedMotion } from "framer-motion";
import SkillLeft from "./SkillLeft";
import SkillRight from "./SkillRight";

export default function SkillEducation() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skill-education" className="pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          <aside className="lg:col-span-4">
            <SkillLeft />
          </aside>

          <main className="lg:col-span-8">
            <SkillRight />
          </main>
        </motion.div>
      </div>
    </section>
  );
}
