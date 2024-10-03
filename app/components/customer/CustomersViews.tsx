"use client";
import Image from "next/image";
import women from "../../assets/images/customers/lady.jpg";
import men from "../../assets/images/customers/men.jpg";

const data = [
  {
    id: 1,
    name: "Jerome Bell",
    title: "Teacher, NY",
    description:
      "I've been a customer of Optix for years, and I keep coming back because their glasses never disappoint. The selection is fantastic, the prices are affordable, and the customer service is top-notch.",
    image: women,
  },
  {
    id: 2,
    name: "Leslie Alexander",
    title: "Manager, USA",
    description:
      "I've been searching for the perfect pair of glasses for ages, and I finally found them with Optix. The fit is impeccable, and the lenses are so clear it's like seeing the world in HD! Plus.",
    image: women,
  },
  {
    id: 3,
    name: "Brooklyn Simmons",
    title: "Student, NY",
    description:
      "I was a bit skeptical about buying glasses online, but after reading the rave reviews about Optix, I decided to give it a try. And I'm so glad I did! Not only are the glasses stylish and comfortable.",
    image: men,
  },
  {
    id: 4,
    name: "Cameron Williamson",
    title: "Architect, USA",
    description:
      "As someone who spends hours in front of a computer screen every day, I knew I needed a pair of blue light blocking glasses. I stumbled upon Optix and was impressed by their selection.",
    image: men,
  },

  {
    id: 5,
    name: "Ronald Richards",
    title: "Freelancer, FL",
    description:
      "I've been a loyal customer of Optix for years now & I keep coming back for more because their glasses never disappoint. The quality is top-notch, the designs are trendy yet timeless, and the prices are unbeatable.",
    image: men,
  },

  {
    id: 6,
    name: "Marvin McKinney",
    title: "Co-Worker, LS",
    description:
      "They offer a wide range of frames that accommodate high prescriptions, and their lens options are fantastic. I ordered a pair of prescription sunglasses, and they're perfect – stylish.",
    image: men,
  },
];

const CustomersViews = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
      {data?.map((reviews) => (
        <div
          className="flex flex-col border w-full rounded-xl px-10 py-10"
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
              <h3 className="text-sm text-gray-700">{reviews.title}</h3>
            </div>
          </div>
          <p className="font-sans">{reviews.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomersViews;
