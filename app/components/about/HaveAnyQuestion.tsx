"use client";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import haveQuestion from "../../../haveQuestion.json";
interface IContactQuestion {
  id: number;
  question: string;
  define: string;
}
const data: IContactQuestion[] = haveQuestion;
const HaveAnyQuestion: React.FC = () => {
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);
  const toggleQuestion = (id: number) => {
    setActiveQuestionId((prevId) => (prevId === id ? null : id));
  };
  return (
    <div className="flex flex-col items-center justify-center scroll-smooth">
      {data?.map((list) => (
        <div className="flex flex-col border-b w-full pb-10 py-4" key={list.id}>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleQuestion(list.id)}
          >
            <h2 className="text-xl">{list.question}</h2>
            <span className="text-light">
              {activeQuestionId !== list.id ? (
                <PlusIcon className="size-5 text-gray-600 transition-all ease-in-out duration-700" />
              ) : (
                <MinusIcon className="size-5 text-gray-600 transition-all ease-in-out duration-700" />
              )}
            </span>
          </div>
          {activeQuestionId === list.id && (
            <div className="mt-2">
              <p className="font-sans">{list.define}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HaveAnyQuestion;
