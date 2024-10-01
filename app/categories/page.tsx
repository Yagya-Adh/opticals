import Image, { StaticImageData } from "next/image";
import navRouts from "../router.json";
import NavBar from "../components/navbar/NavBar";
import SectionTag from "../components/sectionstag/SectionTag";
import ShareText from "../components/share/ShareText";
import Marquee from "../components/blogs/Marquee";
import Footer from "../components/footer/Footer";
import menswear from "../assets/images/category/meneyewear.jpg";
import womenGa from "../assets/images/category/womeneyewear.jpg";
import kidGa from "../assets/images/category/kidga.jpg";
import computerGa from "../assets/images/category/computerga.jpg";
import contactGa from "../assets/images/category/contactlens.jpg";
import sunGa from "../assets/images/category/sunglasses.jpg";
import Button from "../components/button/Button";
import visionGirlGa from "../assets/images/category/getvision.png";
import burberryGa from "../assets/images/category/burberry4.png";
interface IcardData {
  id: number;
  image: StaticImageData;
  heading: string;
  subHeading: string;
}
const data: IcardData[] = [
  {
    id: 1,
    image: menswear,
    heading: "Men’s Eyewear",
    subHeading: "84+ Premium Design Collection",
  },
  {
    id: 2,
    image: womenGa,
    heading: "Women’s Eyewear",
    subHeading: "40+ Ethic Goggles Collection",
  },
  {
    id: 3,
    image: kidGa,
    heading: "Kid’s Glasses",
    subHeading: "25+ Cartoon Theme Collection",
  },
  {
    id: 4,
    image: computerGa,
    heading: "Computer Glasses",
    subHeading: "15+ Unique Designs",
  },
  {
    id: 5,
    image: contactGa,
    heading: "Contact Lenses",
    subHeading: "25+ Different Variant Designs",
  },
  {
    id: 6,
    image: sunGa,
    heading: "Sunglasses",
    subHeading: "12+ Best Ever Cool Designs",
  },
];

const Categories = () => {
  return (
    <>
      <NavBar nav={navRouts} />
      <div className="items-center max-w-screen-2xl mx-auto px-5 gap-y-20 py-10">
        <SectionTag name="EXPLORE" head="Browse by Category" view="no" />
        <CategoryHeaderCard />
        <CartCategory />
        <ShareText />
        <Marquee />
      </div>
      <Footer />
    </>
  );
};

export default Categories;

const CartCategory = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 overflow-hidden py-10">
      {data?.map((list) => (
        <div
          className="rounded-lg flex flex-col items-center relative overflow-hidden"
          key={list.id}
        >
          <Image
            src={list.image}
            alt="cart_grid_"
            className="relative scale-95"
          />
          <div className="text-center  absolute bottom-2 flex flex-col items-center justify-center text-white p-10  w-full overflow-x-hidden">
            <div className="bg-gradient-to-b from-white-50 to-black blur-2xl p-20 absolute bottom-0 w-[95%] z-20"></div>
            <h1 className="text-2xl shadow-2xl z-20">Men'EyeWear</h1>
            <h2 className=" shadow-2xl z-20">
              {"84+ Premium Design Collection"}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

const categoyheadData = [
  {
    id: 1,
    image: visionGirlGa,
    title: "New Classic Wear",
    slug: "Get the vision you deserve",
    discount: "",
    background: "bg-[#e5eee9]",
  },
  {
    id: 1,
    image: burberryGa,
    title: "",
    slug: "Burberry Eyeglasses Look",
    discount: "Flat 24% off",
    background: "bg-[#e6eff4]",
  },
];
const CategoryHeaderCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {categoyheadData?.map((categoryitem) => (
          <div
            className={`flex items-end border rounded-md ${
              categoryitem.background && categoryitem.background
            }`}
            key={categoryitem.id}
          >
            <div className="p-10 pb-20">
              <div>
                <h1 className="font-light text-sm">{categoryitem.title}</h1>
                <h2 className="text-2xl">{categoryitem.slug}</h2>
              </div>
              <Button text="SHOP NOW" variant="primary-noborder" />
            </div>
            <div>
              <Image
                src={categoryitem.image}
                alt="category_"
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
