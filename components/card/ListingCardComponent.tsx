"use client";

import { List, Avatar } from "flowbite-react";

type PropsType = {
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
  };
  onClick?: () => void;
};

export function ListCardComponent({
  title,
  price,
  image,
  rating,
  onClick,
}: PropsType) {
  return (
    <List
      unstyled
      className="max-w-md divide-y divide-gray-200 dark:divide-gray-700"
    >
      <List.Item className="pb-3 sm:pb-4">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
              {title}
            </p>
            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
              {rating.rate}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {price}
          </div>
        </div>
      </List.Item>
    </List>
  );
}
