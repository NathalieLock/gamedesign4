import Intro from "@/components/intro";
import Team from "@/components/team";
import Demo from "@/components/demo";
import SectionDivider from "@/components/section-divider";
import Story from "@/components/story";
import Download from "@/components/download";
import Features from "@/components/features";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider image="/ROBOT.webp" />
      <Team />
      <SectionDivider image="/DRAGON.webp" />
      <Story />
      <Features />
      <SectionDivider image="/MUSH_LIGHT.webp" />
      <Demo />
      <SectionDivider image="/FOX.webp" />
      <Download />
    </main>
  );
}
