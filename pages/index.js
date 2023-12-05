import dynamic from "next/dynamic";
import Head from "next/head";
import { CommentSection } from "../src/components/comment";
// import { DrawSection } from "../src/components/draw";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { HeroSection } from "../src/components/hero";
import { ProjectSection } from "../src/components/project";
import { Curriculum } from "../src/components/curriculum/Curriculum";
import { Skills } from "../src/components/skills/Skills";

// dynamic import Memory Section
const DynamicMemorySection = dynamic(() => import("../src/components/memory"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <Head>
        <title>Guillaume Gemelas, Développeur web et mobile</title>
        <meta
          name="description"
          content="This is Guillaume Gemelas Portfolio as freelance web and mobile Javascript developper"
          key="desc"
        />
      </Head>
      <div className="flex flex-col gap-40">
        <Header />
        <HeroSection />
        <Skills />
        <ProjectSection />
        <Curriculum />
        <DynamicMemorySection />
        {/* <DrawSection /> */}
        <CommentSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
