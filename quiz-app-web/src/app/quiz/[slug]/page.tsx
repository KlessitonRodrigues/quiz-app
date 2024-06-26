"use client";

import CirclesBG from "src/lib/base/background/Circles";
import Page from "src/lib/base/containers/Page";
import Header from "src/lib/components/Header";
import QuizPanel from "src/lib/components/QuizPanel";
import { getQuizzesByType } from "./handlers";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const QuizPage = (props: any) => {
  const { params } = props;
  const [quizzes, setQuizzes] = useState<Api.Quiz[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const load = async () => {
      const quizzes = await getQuizzesByType(params.slug);
      setQuizzes(quizzes);
    };
    load();
  }, [params.slug]);

  return (
    <Page>
      <Header pathname={pathname} />
      <QuizPanel quizzes={quizzes} />
      <CirclesBG />
    </Page>
  );
};

export default QuizPage;
