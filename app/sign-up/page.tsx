"use client";

import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import navRouts from "../router.json";
const SignUp = () => {
  return (
    <>
      <NavBar nav={navRouts} />
      <div className="max-w-screen-2xl  min-w-96 mx-auto">
        <div className="w-[50%] mx-auto lg:p-20 md:p-10">
          <div className="text-center mb-3">
            <h1 className="text-6xl">Sign Up</h1>
          </div>
          <SignUpForm />
          <div className="flex text-stone-800 items-center pt-4 justify-between w-full text-xl">
            <span>Already have an account?</span>
            <button className="underline">LogIn</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;

const SignUpForm = () => {
  const handleSubmit = () => {
    return alert("Form submitted");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="border-b border-b-stone-400  my-3 text-stone-800 text-xl flex flex-col ">
        <label htmlFor="name">Email</label>
        <input
          type="text"
          className="bg-transparent focus:outline-none "
          id="email"
          name="email"
        />
      </div>

      <div className="border-b border-b-stone-400 my-3 text-stone-800 text-xl flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="bg-transparent focus:outline-none "
          id="name"
          name="name"
        />
      </div>

      <div className="border-b border-b-stone-400 my-3 text-stone-800 text-xl flex flex-col">
        <label htmlFor="name">Password</label>
        <input
          type="text"
          className="bg-transparent focus:outline-none "
          id="password"
          name="password"
        />
      </div>

      <div className="flex text-stone-800 items-center py-1 pt-5">
        <input type="checkbox" name="agree" id="agree" className="size-4" />
        <p className="font-sans max-w-screen-sm text-xl  ms-2">
          By creating an account, I agree to this website&apos;s{" "}
          <span className="underline"> privacy policy</span> and
          <span className="underline">terms of service</span>
        </p>
      </div>

      <div className="flex text-stone-800 items-center py-1 pb-4">
        <input type="checkbox" name="market" id="market" className="size-4" />
        <p className="font-sans max-w-screen-sm  min-w-96 text-xl  ms-2">
          I consent to receive marketing emails.
        </p>
      </div>

      <Button text="SIGN UP" variant="dark" />
    </form>
  );
};
