import Blogs from "~/components/home/blogs";
import Me from "~/components/home/me";
import Projects from "~/components/home/projects";
import OpacityContent from "~/components/animated/opacity";
export default function Home() {
  return (
    <OpacityContent className="container mx-auto px-5 pt-16">
      <Me />
      <Blogs />
      <Projects />
    </OpacityContent>
  );
}
