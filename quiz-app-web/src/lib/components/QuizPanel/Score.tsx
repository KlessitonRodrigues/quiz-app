import WideButton from "src/lib/base/buttons/WideButton";
import Link from "next/link";
import { PageTitle } from "../Header/PageTitle";
import { usePathname } from "next/navigation";

export const Score = (props: Props.QuizPanelScore) => {
  const { score, totalCount } = props;
  const pathname = usePathname();

  return (
    <>
      <div className="flex flex-col w-full">
        <p className="mb-6 text-4xl">Quiz Completed</p>
        <h3 className="h-full text-4xl">You scored...</h3>
      </div>
      <div className="flex-center gap-1 flex-col w-full">
        <div className="flex-center gap-2 flex-col w-full bg-color7 p-8 rounded-lg">
          <PageTitle pathname={pathname} />
          <div className=" text-color3 text-9xl">{score}</div>
          <p>out of {totalCount}</p>
        </div>
        <Link className="w-full" href="/">
          <WideButton label="Play Again" />
        </Link>
      </div>
    </>
  );
};
