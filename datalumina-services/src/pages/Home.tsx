import ClientsLogos from "../components/Homecomp/ClientsLogos";
import HeroSection from "../components/Homecomp/HomeHero";
import HomeServices from "../components/Homecomp/HomeServices";
import HomeGIT from "../components/Homecomp/HomeGIT";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <ClientsLogos />
      <HomeServices />
      <HomeGIT />
    </div>
  );
}