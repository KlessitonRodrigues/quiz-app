import { PropsWithChildren } from "react";

const Page = (props: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center gap-20 p-4 pt-16 max-w-6xl m-auto fade-up">
      {props.children}
    </div>
  );
};

export default Page;
