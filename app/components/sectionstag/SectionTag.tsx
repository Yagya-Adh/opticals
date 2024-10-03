"use client";
import Image from "next/image";
import iconLogo from "../../assets/images/iconGlassess.svg";
import ArrowButton from "../button/ArrowButton";

interface ISectionTagProps {
  name: string;
  head: string;
  view?: string | "mo";
}

const SectionTag = ({ name, head, view }: ISectionTagProps) => {
  const handleClick = () => {
    return alert("Clicked");
  };

  if (view === "no") {
    return (
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center ">
            <Image src={iconLogo} alt="icon_" className="me-1 size-6" />
            <span className="font-light  ">{name}</span>
          </div>
          <h1 className="text-4xl my-4">{head}</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="flex items-center ">
          <Image src={iconLogo} alt="icon_" className="me-1 size-6" />
          <span className="font-light  ">{name}</span>
        </div>
        <h1 className="text-4xl my-4">{head}</h1>
      </div>

      <div>
        {name !== "TESTIMONIALS" ? (
          <button
            onClick={handleClick}
            className="text-sm text-optixColor-optTextMuted hover:text-optixColor-opttitle transition-all ease-in-out duration-500"
          >
            {"View All"}
          </button>
        ) : (
          <>
            <ArrowButton
              variant="double"
              ClickHandle={() => alert("Thank you for click!")}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SectionTag;
