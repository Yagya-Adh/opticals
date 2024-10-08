import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";
import couple from "../../assets/images/marquee/couple.jpg";
import modelGirl from "../../assets/images/marquee/model_girl.jpg";
import rayban from "../../assets/images/marquee/rayban.jpg";
import greenBan from "../../assets/images/marquee/green_rayban.jpg";
import behindGags from "../../assets/images/marquee/behind_glasses.jpg";
import refelectGags from "../../assets/images/marquee/reflect_gagass.jpg";
import menFocus from "../../assets/images/marquee/men_focus.jpg";
import pinkBan from "../../assets/images/marquee/pinkgagg.jpg";

interface Imarquee {
  id: number;
  image: StaticImageData;
}
const marquee: Imarquee[] = [
  { id: 1, image: couple },
  { id: 2, image: modelGirl },
  { id: 3, image: rayban },
  { id: 4, image: greenBan },
  { id: 5, image: behindGags },
  { id: 6, image: refelectGags },
  { id: 7, image: menFocus },
  { id: 8, image: pinkBan },
];

const MarqueeSlide = () => {
  return (
    <div className="flex pt-20 items-center flex-row">
      <Marquee loop={0} speed={100}>
        {marquee?.map((listMarquee) => (
          <div key={listMarquee.id} className="overflow-hidden scale-70 m-4">
            <Image
              src={listMarquee.image}
              alt="marquee_image"
              className="rounded-xl"
            />
          </div>
        ))}
        {marquee?.map((listMarquee) => (
          <div key={listMarquee.id} className="overflow-hidden scale-70 m-4">
            <Image
              src={listMarquee.image}
              alt="marquee_image"
              className="rounded-xl"
            />
          </div>
        ))}
        {marquee?.map((listMarquee) => (
          <div key={listMarquee.id} className="overflow-hidden scale-70 m-4">
            <Image
              src={listMarquee.image}
              alt="marquee_image"
              className="rounded-xl"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSlide;
