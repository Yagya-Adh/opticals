import React from "react";

interface Iheading2 {
  id: number;
  heads: string;
}

interface IfootergridData {
  id: number;
  heading1: string;
  heading2: Iheading2[];
}

const footergridData: IfootergridData[] = [
  {
    id: 1,
    heading1: "CATEGORIES",
    heading2: [
      { id: 1, heads: "Men’s Eyewear" },
      { id: 2, heads: "Women’s Eyewear" },
      { id: 3, heads: "Kid’s Glasses" },
      { id: 4, heads: "Computer Glasses" },
      { id: 5, heads: "Contact Lenses" },
      { id: 6, heads: "Sunglasses" },
    ],
  },

  {
    id: 2,
    heading1: "PAGES",
    heading2: [
      { id: 1, heads: "Men’s Eyewear" },
      { id: 2, heads: "Blogs" },
      { id: 3, heads: "Reviews" },
      { id: 4, heads: "FAQs" },
      { id: 5, heads: " Stories" },
    ],
  },
  {
    id: 3,
    heading1: "RESOURCES",
    heading2: [
      { id: 1, heads: " Privacy " },
      { id: 2, heads: "Terms & Customizs" },
      { id: 3, heads: "Privacy " },
      { id: 4, heads: "Computer  " },
    ],
  },
  {
    id: 4,
    heading1: "CONTACTS",
    heading2: [
      { id: 1, heads: "2972 Westheimer Rd. Santa Ana, Illinois 85486" },
      { id: 2, heads: "support@example." },
    ],
  },
];
const Footer = () => {
  return (
    <div className="flex">
      {/* foot1 */}
      <div className="flex flex-col">
        <h1>Optix Eyewear Pvt. Ltd</h1>
        <p>
          With a commitment to quality, innovation, and customer satisfaction,
          we offer a curated collection of eyewear.
        </p>
        <h2>info@example.com</h2>
      </div>
      support@example.com (239) 555-0108
      {/* foot2 */}
    
  );
    </div>
};

export default Footer;
/* 
 


Resources
Privacy Policy
Terms & Conditions
Return Policy
License
CONTACT
2972 Westheimer Rd. Santa Ana, Illinois 85486
support@example.com
(239) 555-0108
Optix
Instagram
YouTube
Twitter
LinkedIn
© 2024 Optix. Designed by Nixar. Powered by Webflow.
Arrow
Back To Top
Webflow Icon

*/
