"use client";
import Image from "next/image";
import Button from "../button/Button";
import circleLine from "../../assets/images/card/circleline.svg";
import jeams from "../../assets/images/card/jeams.png";
import transparentGags from "../../assets/images/card/transparent.png";
import raybanGags from "../../assets/images/card/rayban.png";

const ShopCart = () => {
  return (
    <div className=" bg-optixColor-optCardPrimary rounded-md p-28 relative overflow-hidden">
      <div>
        <h1 className="text-3xl">Shop now for trendy eyewear styles!</h1>
        <p className="font-sans max-w-screen-sm pt-6 pb-2">
          From timeless classics to the latest fashion-forward designs, we offer
          a diverse range of frames to suit every taste and occasion.
        </p>
      </div>

      <div>
        <Button text="SHOP NOW" variant="dark" />
      </div>
      <Image
        src={circleLine}
        alt="line_"
        className=" absolute top-0 left-0 scale-100"
      />
      <Image
        src={circleLine}
        alt="line_"
        className="absolute bottom-0 right-0 size-80 -rotate-180 scale-110"
      />
      <Image
        src={transparentGags}
        alt="line_"
        className="absolute bottom-1 left-72 rotate-15 scale-50"
      />
      <Image
        src={raybanGags}
        alt="line_"
        className="absolute top-1 right-40 rotate-12 scale-50"
      />
      <Image
        src={jeams}
        alt="line_"
        className="absolute  bottom-1 right-1  -rotate-15 scale-50"
      />
    </div>
  );
};

export default ShopCart;
