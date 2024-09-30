"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

interface IContactQuestion {
  id: number;
  question: string;
  define: string;
}

const data: IContactQuestion[] = [
  {
    id: 1,
    question: "How do I know if a frame will fit me?",
    define:
      "We provide detailed measurements for each frame, including lens width, bridge width, and temple length. You can use these measurements to compare against your current glasses or use our virtual try-on feature to see how the frames look on your face.",
  },
  {
    id: 2,
    question: "Do you offer prescription lenses?",
    define:
      "Blue light blocking technology helps reduce eye strain and fatigue caused by prolonged exposure to digital screens. Many of our glasses feature blue light blocking lenses, which filter out harmful blue light while maintaining visual clarity.",
  },
  {
    id: 3,
    question:
      "What is blue light blocking technology & do your glasses have it?",
    define:
      "Yes, we stand behind the quality of our products. All of our glasses come with a one-year warranty against manufacturing defects. If you encounter any issues with your glasses within the warranty period, please contact our customer service team for assistance.",
  },
  {
    id: 4,
    question: "How do I care for my glasses?",
    define:
      "Proper care is essential for maintaining the longevity of your glasses. We recommend cleaning your lenses regularly with a lens cleaner and microfiber cloth to remove dirt and smudges.",
  },
  {
    id: 5,
    question: "Do you offer warranty coverage for your glasses?",
    define:
      "Yes, we stand behind the quality of our products. All of our glasses come with a one-year warranty against manufacturing defects. If you encounter any issues with your glasses within the warranty period, please contact our customer service team for assistance.",
  },
  {
    id: 6,
    question: "How long does shipping take?",
    define:
      "Yes, we offer prescription lenses for most of our frames. During the ordering process, you'll have the option to enter your prescription details, including sphere, cylinder, and axis values.",
  },
];

const HaveAnyQuestion: React.FC = () => {
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setActiveQuestionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="flex flex-col items-center justify-center scroll-smooth">
      {data?.map((list) => (
        <div className="flex flex-col border-b w-full pb-10" key={list.id}>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleQuestion(list.id)}
          >
            <h2 className="text-xl">{list.question}</h2>
            <span className="text-light ">
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
