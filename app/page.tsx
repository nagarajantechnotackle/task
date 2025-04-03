import Header from "./components/Header";
import Banner from "./components/Banner";
import CarBrandSection from "./components/CarBrands";
import BrandsCarousel from "./components/Brands";
import CarService from "./components/service";
import MobileCarServices from "./components/mobileService";
import CarBrandSectionMobile from "./components/CarBrandsMobile";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <div className="desktop-view">
      <CarBrandSection />
        <CarService />
      </div>
      <div className="mobile-view">
        <MobileCarServices />
        <CarBrandSectionMobile />
      </div>
      <BrandsCarousel />
    </main>
  );
}
