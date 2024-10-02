"use client";

interface IYears {
  id: number;
  year: number;
  isStart: boolean;
  isEnd: boolean;
}
const YEARS: IYears[] = [
  {
    id: 1,
    year: 2010,
    isStart: true,
    isEnd: false,
  },
  {
    id: 2,
    year: 2013,
    isStart: false,
    isEnd: false,
  },
  {
    id: 3,
    year: 2016,
    isStart: false,
    isEnd: false,
  },
  {
    id: 4,
    year: 2019,
    isStart: false,
    isEnd: false,
  },
  {
    id: 5,
    year: 2022,
    isStart: false,
    isEnd: true,
  },
];
const HorizontalTimeLine = () => {
  return (
    <>
      <div className="flex flex-row items-center py-5">
        {YEARS?.map((time) => (
          <div key={time.id} className="flex items-center">
            <h1
              className={`rounded-full border px-5  py-1 font-serif
            ${time.isStart ? "bg-black text-white" : ""}
              
            `}
            >
              {time.year}
            </h1>
            {!time.isEnd ? (
              <div className="border-black border-b w-10"></div>
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
