import Header from "./components/Header";
import Banner from "./components/Banner";
import CarBrandSection from "./components/CarBrands";
import BrandsCarousel from "./components/Brands";
import CarService from "./components/service";
import MobileCarServices from "./components/mobileService";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <CarBrandSection />
      <div className="desktop-view">
        <CarService />
      </div>
      <div className="mobile-view">
        <MobileCarServices />
      </div>
      <BrandsCarousel />
    </main>
  );
}
