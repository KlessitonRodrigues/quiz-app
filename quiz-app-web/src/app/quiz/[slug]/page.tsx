import CirclesBG from "src/lib/base/background/Circles";
import Page from "src/lib/base/containers/Page";
import Header from "src/lib/components/Header";
import QuizPanel from "src/lib/components/QuizPanel";
import { getQuizzesByType } from "./handlers";

const QuizPage = async (props: any) => {
  const { params } = props;
  const quizzes = await getQuizzesByType(params.slug);

  return (
    <Page>
      <Header />
      <QuizPanel quizzes={quizzes} />
      <CirclesBG />
    </Page>
  );
};

export default QuizPage;
