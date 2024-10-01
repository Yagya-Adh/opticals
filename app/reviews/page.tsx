import navRouts from "../router.json";
import NavBar from "../components/navbar/NavBar";
import SectionTag from "../components/sectionstag/SectionTag";
// import ShareText from "../components/share/ShareText";
import Footer from "../components/footer/Footer";
import CustomersViews from "../components/customer/CustomersViews";
import Button from "../components/button/Button";
import CustomerForm from "../components/customer/CustomerForm";

const Reviews = () => {
  return (
    <>
      <NavBar nav={navRouts} />
      <div className="grid grid-cols-1 items-center max-w-screen-2xl mx-auto px-5 gap-y-20 py-10">
        <SectionTag name="TESTIMONIALS" head="Customers Review" view="no" />
        <div className="grid grid-cols-1 gap-10">
          <CustomersViews />
        </div>
        <div className="flex w-full justify-end">
          <Button text="NEXT" variant="next" />
        </div>
        <CustomerForm />
      </div>
      <Footer />
    </>
  );
};

export default Reviews;
