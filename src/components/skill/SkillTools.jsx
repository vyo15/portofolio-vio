import SkillSlider from "./SkillSlider";
import ToolSlider from "./ToolSlider";

export default function SkillTools() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <SkillSlider />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Tools</h2>
          <ToolSlider />
        </div>
      </div>
    </section>
  );
}
