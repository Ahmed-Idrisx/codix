import AboutSection from "@/features/home/components/About";
import Contact from "@/features/home/components/Contact";
import Courses from "@/features/home/components/Courses";
import FAQ from "@/features/home/components/FAQ";
import FeaturesSection from "@/features/home/components/Features";
import Hero from "@/features/home/components/Hero";
import LatestArticles from "@/features/home/components/LatestArticles";
import Partners from "@/features/home/components/Partners";
import Testimonials from "@/features/home/components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <AboutSection />
      <Courses />
      <Partners />
      <Testimonials />
      <LatestArticles />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
