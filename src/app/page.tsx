import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Work } from "@/components/site/work";
import { Projects } from "@/components/site/projects";
import { BlogTeaser } from "@/components/site/blog-teaser";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Projects />
        <BlogTeaser />
      </main>
      <Footer />
    </>
  );
}
