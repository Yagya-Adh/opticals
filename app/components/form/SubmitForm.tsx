"use client";

import {
  CalendarDateRangeIcon,
  EnvelopeIcon,
  HomeModernIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Button from "../button/Button";

interface IFormProps {
  onSubmitHand: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SubmitForm = ({ onSubmitHand }: IFormProps) => {
  return (
    <form className="grid grid-cols-1 gap-10 relative " onSubmit={onSubmitHand}>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex-row flex items-center  border-b border-optixColor-optTextMain">
          <label htmlFor="name">
            <UserIcon className="w-4 h-4" />
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="p-2 bg-transparent focus:outline-none "
            placeholder="FullName"
          />
        </div>

        <div className="flex-row flex items-center border-b border-optixColor-optTextMain">
          <label htmlFor="email">
            <EnvelopeIcon className="w-4 h-4" />
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="p-2 bg-transparent focus:outline-none "
            placeholder="EmailAddress"
          />
        </div>

        <div className="flex-row flex items-center border-b border-optixColor-optTextMain">
          <label htmlFor="date">
            <CalendarDateRangeIcon className="w-4 h-4" />
          </label>
          <input
            type="text"
            name="date"
            id="date"
            className="p-2 bg-transparent focus:outline-none "
            placeholder="Date"
          />
        </div>

        <div className="flex-row flex items-center border-b border-optixColor-optTextMain">
          <label htmlFor="phonenumber">
            <PhoneIcon className="w-4 h-4" />
          </label>
          <input
            type="tel"
            name="phonenumber"
            id="phonenumber"
            className="p-2 bg-transparent focus:outline-none "
            placeholder="PhoneNumber"
          />
        </div>
      </div>

      <div className="flex flex-row items-center border-b border-optixColor-optTextMain w-full p-2">
        <label htmlFor="address">
          <HomeModernIcon className="w-4 h-4" />
        </label>
        <textarea
          name="address"
          id="address"
          className="p-2 bg-transparent focus:outline-none items-center w-full"
          placeholder="Address"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <Button text="SUBMIT NOW" variant="dark" />
      </div>
    </form>
  );
};

export default SubmitForm;
