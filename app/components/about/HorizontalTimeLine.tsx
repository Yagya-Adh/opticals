"use client";
import journeyTime from "../../../journeyTime.json";
interface IYears {
  id: number;
  year: number;
  isStart: boolean;
  isEnd: boolean;
}
const YEARS: IYears[] = journeyTime;
const HorizontalTimeLine = () => {
  return (
    <>
      <div className="flex flex-row items-center py-5">
        {YEARS?.map((time) => (
          <div key={time.id} className="flex items-center">
            <h1
              className={`rounded-full border border-stone-300 px-5  py-1 font-serif
            ${time.isStart ? "bg-black text-white" : ""}
              
            `}
            >
              {time.year}
            </h1>
            {!time.isEnd ? (
              <div className="border-stone-300 border-b w-10"></div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default HorizontalTimeLine;
