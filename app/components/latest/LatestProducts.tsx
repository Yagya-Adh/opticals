import { StaticImageData } from "next/image";
import clearVue from "../../assets/images/latestProducts/clearVue.jpg";
import slimFrame from "../../assets/images/latestProducts/SlimFrame.jpg";
import bronze from "../../assets/images/latestProducts/BronzePlated.jpg";
import rimSpectacle from "../../assets/images/latestProducts/RimSpectacle.jpg";

import SectionTag from "../sectionstag/SectionTag";
import ImageGlassess from "../ImageCard/ImageGlassess";
import LatestCard from "./LatestCard";

interface PropsData {
  id: number;
  image: StaticImageData;
  title: string;
  price: number;
}
const data: PropsData[] = [
  { id: 1, image: clearVue, title: "ClearVue Vision", price: 110.0 },
  { id: 2, image: slimFrame, title: "ClearVue Vision", price: 126.0 },
  { id: 3, image: bronze, title: "ClearVue Vision", price: 165.0 },
  { id: 4, image: rimSpectacle, title: "ClearVue Vision", price: 220.0 },
];

const LatestProducts = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 py-10 ">
      <SectionTag name="EXPLORE PRODUCTS" head="Latest Products" />
      <div className="grid gird:cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center py-10 px-20">
        {data?.map((passProp) => (
          <ImageGlassess passProp={passProp} key={passProp.id} />
        ))}
      </div>
      <LatestCard />
    </div>
  );
};

export default LatestProducts;
