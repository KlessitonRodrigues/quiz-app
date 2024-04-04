"use client";

import { useState } from "react";
import { Description } from "./Description";
import { Options } from "./Options";
import { Score } from "./Score";
import If from "src/lib/base/containers/If";

const QuizPanel = (props: Props.QuizPanel) => {
  const { quizzes = [] } = props;
  const [currentQuiz, setQuiz] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const quiz = quizzes[currentQuiz];

  const onSubmitQuiz = async (value: string) => {
    const isCorrect = value === quiz.answer;
    if (isCorrect) setScore(score + 1);
    setShowResult(true);
  };

  const onNextQuiz = async () => {
    if (currentQuiz === quizzes.length + 1) return;
    setQuiz(currentQuiz + 1);
    setShowResult(false);
  };

  return (
    <div className="flex gap-28 max-w-5xl w-full">
      <If check={quiz && currentQuiz < quizzes.length}>
        <>
          <Description
            question={quiz?.question}
            totalCount={quizzes?.length}
            currentCount={currentQuiz + 1}
          />
          <Options
            result={quiz?.answer}
            options={quiz?.options}
            showResult={showResult}
            onSubmitResult={onSubmitQuiz}
            onNextQuiz={onNextQuiz}
          />
        </>
      </If>
      <If check={currentQuiz >= quizzes.length}>
        <Score score={score} totalCount={quizzes.length} />
      </If>
    </div>
  );
};

export default QuizPanel;
