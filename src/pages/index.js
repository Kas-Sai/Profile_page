import Image from "next/image";
import Banner from "@/sections/Banner"; 
import ProfileDetail from "@/sections/ProfileDetail"; 
import Education from "@/sections/Education"; 
import Skills from "@/sections/Skills"; 
import FurtherInfo from "@/sections/FurtherInfo"; 
import Projects from "@/sections/Projects"; 
import Contact from "@/sections/Contact"; 
import Footer from "@/sections/Footer";
import ThemeToggle from "@/Components/ThemeToggle";
import ScrollToTop from "@/Components/ScrollToTop";

const Home = () => {
  return (
    <main className="bg-[linear-gradient(-14deg,#232020,#151212)]
    font-sans pb-10 sm:pb-20 md:pb-20 backdrop-blur-xl overflow-hidden ">
      
        <div className="max-w-5xl mx-auto shadow-2xl 
rounded-xl overflow-hidden bg-gradient-to-r from-[#333341] to-[#1d1a2c] backdrop-blur-md relative top-12">
      <Banner />
      <ProfileDetail />
      <Skills />
      <Education />
      <Projects />
      <FurtherInfo />
      <Contact />
      
      </div>
      <ScrollToTop />
    </main>
  );
};

export default Home;