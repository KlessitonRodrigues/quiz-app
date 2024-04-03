import Image from "next/image";
import React from "react";
import { pageInfo } from "src/utils/constants/pages";

export const PageTitle = (props: Props.PageTitle) => {
  const { pathname } = props;
  const page = pageInfo[pathname];
  if (!pageInfo) return <div></div>;

  return (
    <div className="flex-center gap-1">
      <div className={`bg-opacity-10 p-1 rounded-lg bg-${page?.bg}`}>
        <Image width={28} src={page?.icon} alt="" />
      </div>
      <h1 className="text-2xl">{page?.title}</h1>
    </div>
  );
};
