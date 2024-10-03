"use client";
import Image, { StaticImageData } from "next/image";
import freecheck from "../../assets/images/checkup/freecheck.jpg";
import expertdoctor from "../../assets/images/checkup/expertdoctor.jpg";
import discounteyewear from "../../assets/images/checkup/discounteyewear.jpg";
import focusLogo from "../../assets/images/checkup/focus.svg";
import expertLogo from "../../assets/images/checkup/expert.svg";
import discountLogo from "../../assets/images/checkup/discount.svg";
import SubmitForm from "../form/SubmitForm";
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
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      <div className=" bg-optixColor-optPrimaryBg lg:p-10 p-5">
        <EyeCheckUp />
      </div>

      <div className="bg-optixColor-optbg">
        <div className="grid grid-cols-1 items-center gap-10 p-10 ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl min-w-sm max-w-screen-sm">
              Get free eye-check up at your home
            </h1>
            <p className="text-sm max-w-2xl p-5 font-sans">
              Experience the professional eye care right at your doorstep with
              our complimentary home eye-check service. Schedule your free
              eye-check today and take the first step towards clearer vision.
            </p>
          </div>

          <div>
            <SubmitForm
              onSubmitHand={(e) => {
                e.preventDefault();
                alert("form submitted");
              }}
            />
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
                <Image
                  src={checksList.logo}
                  alt="formcheck_logo"
                  className="onject-cover"
                />
                <h1 className="text-xl ms-1">{checksList.title}</h1>
              </div>
              <p className="font-sans"> {checksList.slug}</p>
            </div>
            <Image
              src={checksList.image}
              alt="formcheck_image"
              className="onject-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
};
