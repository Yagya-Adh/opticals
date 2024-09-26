// import Image from "next/image";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";

interface InavBar {
  id: number;
  name: string;
}

const navBar: InavBar[] = [
  { id: 1, name: "SHOP" },
  { id: 2, name: "OUR STORY" },
  { id: 3, name: "COLLECTION" },
  { id: 4, name: "REVIEW" },
  { id: 5, name: "BLOGS" },
  { id: 6, name: "CONTACT" },
];

export default function Home() {
  return (
    <>
      <NavBar nav={navBar} />

      <Footer />
    </>
  );
}
