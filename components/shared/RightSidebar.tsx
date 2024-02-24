import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const hotQuestions = [
  {
    _id: "1",
    title:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
  },
  {
    _id: "2",
    title: "Is it only me or the font is bolder than necessary??",
  },
  {
    _id: "3",
    title: "Can I get the course for free?",
  },
  {
    _id: "4",
    title: "Redux Toolkit Not Updating State as Expected",
  },
  {
    _id: "5",
    title: "Async/Await Function Not Handling Errors Properly",
  },
];

const popularTags = [
  { _id: "1", name: "javascript", totalQuestions: 5 },
  { _id: "2", name: "React", totalQuestions: 3 },
  { _id: "3", name: "Next", totalQuestions: 2 },
  { _id: "4", name: "Vue", totalQuestions: 7 },
  { _id: "5", name: "Redux", totalQuestions: 10 },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div className="">
        <h3 className="h3-bold text-dark200_light900">Top Question</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                width={20}
                height={20}
                alt="chevron right"
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;