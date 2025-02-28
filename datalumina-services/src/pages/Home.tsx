import ClientsLogos from "../components/Homecomp/ClientsLogos";
import HeroSection from "../components/Homecomp/HomeHero";
import HomeServices from "../components/Homecomp/HomeServices";
import HomeGIT from "../components/Homecomp/HomeGIT";
import HExpertise from "../components/Homecomp/HExpertise";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <ClientsLogos />
      <HomeServices />
      <HExpertise />
      <HomeGIT />
    </div>
  );
}
