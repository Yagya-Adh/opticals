import navRouts from "../router.json";
import NavBar from "../components/navbar/NavBar";
import SectionTag from "../components/sectionstag/SectionTag";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
import ShopCart from "../components/shop/ShopCart";
import ImageGlassess from "../components/ImageCard/ImageGlassess";
import { StaticImageData } from "next/image";
import clearVue from "../assets/images/latestProducts/clearVue.jpg";
import slimFrame from "../assets/images/latestProducts/SlimFrame.jpg";
import bronze from "../assets/images/latestProducts/BronzePlated.jpg";
import rimSpectacle from "../assets/images/latestProducts/RimSpectacle.jpg";

interface PropsData {
  id: number;
  image?: StaticImageData;
  title: string;
  price: number;
}
const data: PropsData[] = [
  { id: 1, image: clearVue, title: "ClearVue Vision", price: 110.0 },
  { id: 2, image: slimFrame, title: "ClearVue Vision", price: 126.0 },
  { id: 3, image: bronze, title: "ClearVue Vision", price: 165.0 },
  { id: 4, image: rimSpectacle, title: "ClearVue Vision", price: 220.0 },
];

const Products = () => {
  return (
    <>
      <NavBar nav={navRouts} />
      <div className="grid grid-cols-1 items-center max-w-screen-2xl mx-auto px-5 gap-y-20 py-10">
        <SectionTag name="OPTIX TRENDS" head="Latest Products" view="no" />
        <div className="grid gird:cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center py-10 px-20">
          {data?.map((passProp) => (
            <ImageGlassess passProp={passProp} key={passProp.id} />
          ))}
        </div>
        <div className="flex justify-end">
          <Button text="NEXT" variant="next" />
        </div>

        <div className="grid grid-cols-1  px-40">
          <ShopCart />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
