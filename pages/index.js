import About from "../components/About";
import Layout from "../components/common/Layout";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Hero from "../components/Hero";
import JoinDiscord from "../components/JoinDiscord";
import Process from "../components/Process";
import Programs from "../components/Programs";

export default function Home() {
  return (
    <>
      <Layout title={"breakOut University"}>
        <Hero />
        <Features />
        <About />
        <JoinDiscord />
        <Programs />
        <Process />
        <Faq />
      </Layout>
    </>
  );
}
