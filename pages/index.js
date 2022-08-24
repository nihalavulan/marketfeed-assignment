import About from "../components/About";
import Layout from "../components/common/Layout";
import Features from "../components/Features";
import Hero from "../components/Hero";
import JoinDiscord from "../components/JoinDiscord";
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
      </Layout>
    </>
  );
}
