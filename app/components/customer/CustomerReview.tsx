"use client";
import SectionTag from "../sectionstag/SectionTag";
import CustomerForm from "./CustomerForm";
import CustomersViews from "./CustomersViews";

const CustomerReview = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto px-5 py-10">
      <SectionTag name="TESTIMONIALS" head="Customers Review" />
      <CustomersViews />
      <CustomerForm />
    </div>
  );
};

export default CustomerReview;
