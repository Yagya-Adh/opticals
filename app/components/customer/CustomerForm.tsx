import {
  EnvelopeIcon,
  UserIcon,
  CalendarDateRangeIcon,
  PhoneIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";
import Button from "../button/Button";
import Image, { StaticImageData } from "next/image";
import freecheck from "../../assets/images/checkup/freecheck.jpg";
import expertdoctor from "../../assets/images/checkup/expertdoctor.jpg";
import discounteyewear from "../../assets/images/checkup/discounteyewear.jpg";
import focusLogo from "../../assets/images/checkup/focus.svg";
import expertLogo from "../../assets/images/checkup/expert.svg";
import discountLogo from "../../assets/images/checkup/discount.svg";

interface ICheckupData {
  id: number;
  title: string;
  slug: string;
  image: StaticImageData;
  logo: StaticImageData;
  order: string;
}

const checkUpData: ICheckupData[] = [
  {
    id: 1,
    title: "Free Eye Check-Up",
    slug: "Our expert optometrists provide thorough assessments to ensure your eyes are healthy and your vision is sharp.",
    image: freecheck,
    logo: focusLogo,
    order: "order-0",
  },
  {
    id: 1,
    title: "Expert Doctor",
    slug: "Experience the expertise of our skilled doctors with our complimentary eye check-up service.",
    image: expertdoctor,
    logo: expertLogo,
    order: "order-2",
  },
  {
    id: 1,
    title: "Discount On Eyewear",
    slug: "Enjoy savings on stylish eyewear with our exclusive discount offer. Don't miss out shop now.",
    image: discounteyewear,
    logo: discountLogo,
    order: "order-0",
  },
];

const CustomerForm = () => {
  return <FormComponent />;
};

export default CustomerForm;

const FormComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className=" bg-optixColor-optPrimaryBg ">
        <div className="p-10">
          <EyeCheckUp />
        </div>
      </div>

      <div className="bg-optixColor-optbg">
        <div className="grid grid-cols-1 items-center gap-10 p-10 ">
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-3xl">Get free eye-check up at your home</h1>
            <p className="text-sm max-w-xl p-10">
              Experience the professional eye care right at your doorstep with
              our complimentary home eye-check service. Schedule your free
              eye-check today and take the first step towards clearer vision.
            </p>
          </div>

          <div>
            <form className="grid grid-cols-2 gap-5 relative px-20">
              <div className="flex py-2 border-b border-optixColor-optTextMain">
                <label htmlFor="name">
                  <UserIcon className="size-10" />
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="p-2 bg-transparent focus:outline-none "
                  placeholder="FullName"
                />
              </div>

              <div className="flex py-2 border-b border-optixColor-optTextMain">
                <label htmlFor="email">
                  <EnvelopeIcon className="size-10" />
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="p-2 bg-transparent focus:outline-none "
                  placeholder="EmailAddress"
                />
              </div>

              <div className="flex py-2 border-b border-optixColor-optTextMain">
                <label htmlFor="date">
                  <CalendarDateRangeIcon className="size-10" />
                </label>
                <input
                  type="text"
                  name="date"
                  id="date"
                  className="p-2 bg-transparent focus:outline-none "
                  placeholder="Date"
                />
              </div>

              <div className="flex py-2 border-b border-optixColor-optTextMain">
                <label htmlFor="phonenumber">
                  <PhoneIcon className="size-10" />
                </label>
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  className="p-2 bg-transparent focus:outline-none "
                  placeholder="PhoneNumber"
                />
              </div>

              <div className=" col-span-2 flex py-2 border-b border-optixColor-optTextMain">
                <label htmlFor="address">
                  <HomeModernIcon className="size-10" />
                </label>
                <textarea
                  name="address"
                  id="address"
                  className="p-2 bg-transparent focus:outline-none  w-full"
                  placeholder="Address"
                ></textarea>
              </div>

              <div className=" absolute right-0 bottom-0">
                <Button text="SUBMIT NOW" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const EyeCheckUp = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-2  w-full items-center">
        {checkUpData?.map((checksList) => (
          <div className="grid grid-cols-2 " key={checksList.id}>
            <div
              className={`bg-white flex flex-col p-4 
                
                ${checksList.order}
                `}
            >
              <div className="flex items-center">
                <Image src={checksList.logo} className="" />
                <h1 className="text-xl ms-1">{checksList.title}</h1>
              </div>
              <p>{checksList.slug}</p>
            </div>
            <Image src={checksList.image} className="" />
          </div>
        ))}
      </div>
    </>
  );
  `26t5`;
};
