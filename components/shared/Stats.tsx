import { formatNumber } from "@/lib/utils";
import { BadgeCounts } from "@/types";
import Image from "next/image";
import React from "react";

interface StatsCardProps {
  imgUrl: string;
  value: number;
  title: string;
}
const StatsCard = ({ imgUrl, value, title }: StatsCardProps) => {
  return (
    <div className="light-border background-light900_dark300 flex flex-wrap items-center justify-start gap-4 rounded-md border p-6 shadow-light-300 dark:shadow-dark-200 ">
      <Image src={imgUrl} alt={title} width={40} height={50} />
      <div className="">
        <p className="paragraph-semibold text-dark200_light900">{value}</p>
        <p className="body-medium text-dark400_light700">{title}</p>
      </div>
    </div>
  );
};

interface Props {
  totalQuestions: number;
  totalAnswers: number;
  badges: BadgeCounts;
  reputation: number;
}
const Stats = ({ totalAnswers, totalQuestions, badges, reputation }: Props) => {
  return (
    <div className="mt-10">
      <h4 className="h3-semibold text-dark200_light900">
        Stats - {reputation}
      </h4>
      <div className="mt-5 grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-4">
        <div className="light-border background-light900_dark300 flex flex-wrap items-center justify-evenly gap-4 rounded-md border p-6 shadow-light-300 dark:shadow-dark-200 ">
          <div className="">
            <p className="paragraph-semibold text-dark200_light900">
              {formatNumber(totalQuestions)}
            </p>
            <p className="body-medium text-dark400_light700">Question</p>
          </div>
          <div className="">
            <p className="paragraph-semibold text-dark200_light900">
              {formatNumber(totalAnswers)}
            </p>
            <p className="body-medium text-dark400_light700">Answer</p>
          </div>
        </div>
        <StatsCard
          imgUrl="/assets/icons/gold-medal.svg"
          value={badges.GOLD}
          title="Gold Bagde"
        />

        <StatsCard
          imgUrl="/assets/icons/silver-medal.svg"
          value={badges.SILVER}
          title="Silver Bagde"
        />

        <StatsCard
          imgUrl="/assets/icons/bronze-medal.svg"
          value={badges.BRONZE}
          title="Bronze Bagde"
        />
      </div>
    </div>
  );
};

export default Stats;
