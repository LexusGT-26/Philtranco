import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Destinations from "@/components/Destinations";
import TeamBanner from "@/components/TeamBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Nav />
      <Hero />
      <About />
      <Features />
      <Destinations />
      <TeamBanner />
      <Footer />
    </>
  );
}
