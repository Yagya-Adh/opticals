"use client";
import Image from "next/image";
import SectionTag from "../sectionstag/SectionTag";
import imgs from "../../assets/images/iconGlassess.svg";
import women from "../../assets/images/customers/lady.jpg";
import men from "../../assets/images/customers/men.jpg";

const data = [
  {
    id: 1,
    name: "Leslie Alexander",
    title: "Manager, USA",
    description:
      "I've been searching for the perfect pair of glasses for ages, and I finally found them with Optix. The fit is impeccable, and the lenses are so clear it's like seeing the world in HD! Plus.",
    image: women,
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    title: "Student, NY",
    description:
      "I was a bit skeptical about buying glasses online, but after reading the rave reviews about Optix, I decided to give it a try. And I'm so glad I did! Not only are the glasses stylish and comfortable.",
    image: men,
  },
];

const CustomerReview = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto px-5 py-10">
      <SectionTag name="TESTIMONIALS" head="Customers Review" />
      <ConstumersViews />
    </div>
  );
};

export default CustomerReview;

const ConstumersViews = () => {
  return (
    <div className="grid grid-cols-2 gap-10 py-10">
      {data?.map((reviews) => (
        <div
          className="flex flex-col border w-full rounded-xl px-10 py-20"
          key={reviews.id}
        >
          <div className="flex items-center mb-10">
            <Image
              src={reviews.image}
              alt="img_"
              className="me-4 rounded-full size-12 "
            />
            <div className="flex flex-col ">
              <h1>{reviews.name}</h1>
              <h3>{reviews.title}</h3>
            </div>
          </div>
          <p className="">{reviews.description}</p>
        </div>
      ))}
    </div>
  );
};
