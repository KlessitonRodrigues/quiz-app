import Image from "next/image";
import WideButton from "src/lib/base/buttons/WideButton";

import accessibilityIcon from "src/lib/assets/svg/fluent_accessibility-16-regular.svg";
import Link from "next/link";

export const Score = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <p className="mb-6 text-4xl">Quiz Completed</p>
        <h3 className="h-full text-4xl">You scored...</h3>
      </div>
      <div className="flex-center gap-1 flex-col w-full">
        <div className="flex-center gap-2 flex-col w-full bg-color7 p-8 rounded-lg">
          <div className="flex-center gap-1">
            <div className="bg-color1 bg-opacity-10 p-1 rounded-lg">
              <Image width={28} src={accessibilityIcon} alt="" />
            </div>
            <h1 className="text-2xl font-bold">Accessibility</h1>
          </div>
          <div className=" text-color3 text-9xl">10</div>
          <p>out of 10</p>
        </div>
        <Link className="w-full" href="/">
          <WideButton label="Play Again" />
        </Link>
      </div>
    </>
  );
};
