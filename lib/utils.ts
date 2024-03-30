import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";
import { BADGE_CRITERIA } from "@/constants";
import { BadgeCounts } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const currentDate = new Date();
  const createdDate = new Date(createdAt);

  const timeDifference = currentDate.getTime() - createdDate.getTime();
  const secondsDifference = Math.floor(timeDifference / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  let result;

  for (const [intervalName, seconds] of Object.entries(intervals)) {
    const intervalCount = Math.floor(secondsDifference / seconds);

    if (intervalCount > 0) {
      result =
        intervalCount === 1
          ? `${intervalCount} ${intervalName}`
          : `${intervalCount} ${intervalName}s`;

      result += " ago";
      break;
    }
  }

  return result || "Just now";
};
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num.toString();
  }
};

export const getJoinedDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
interface UrlQueryParams {
  params: string;
  key: string;
  value: string | null;
}
export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};
interface removeUrlQueryParams {
  params: string;
  keysToRemove: string[];
}
export const removeKeysFromQuery = ({
  params,
  keysToRemove,
}: removeUrlQueryParams) => {
  const currentUrl = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete currentUrl[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};

interface BadgeParam {
  criteria: {
    type: keyof typeof BADGE_CRITERIA;
    count: number;
  }[];
}
export const assignBadges = (params: BadgeParam) => {
  const badgeCounts: BadgeCounts = {
    GOLD: 0,
    SILVER: 0,
    BRONZE: 0,
  };
  const { criteria } = params;

  criteria.forEach((item) => {
    const { type, count } = item;
    const bagdgeLevels: any = BADGE_CRITERIA[type];

    Object.keys(bagdgeLevels).forEach((level: any) => {
      if (count >= bagdgeLevels[level]) {
        badgeCounts[level as keyof BadgeCounts] += 1;
      }
    });
  });
  return badgeCounts;
};
