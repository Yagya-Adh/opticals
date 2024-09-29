import Image, { StaticImageData } from "next/image";
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

const Marquee = () => {
  return (
    <div className="flex pt-20 max-w-screen-xl items-center ">
      {marquee?.map((listMarquee) => (
        <div
          key={listMarquee.id}
          className="rounded-xl overflow-hidden mx-4 scroll-auto"
        >
          <Image
            src={listMarquee.image}
            alt="marquee_image"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Marquee;
