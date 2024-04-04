import ProgressLine from "src/lib/base/progress/progressLine";
import Text from "src/lib/base/text/Text";

export const Description = (props: Props.QuizPanelDescription) => {
  const { question, currentCount = 0, totalCount = 0 } = props;

  return (
    <div className="flex flex-col gap-12 w-full md:gap-0">
      <div className="mb-6">
        <Text
          path="quiz_question_step"
          replace={{ "#count": currentCount, "#total": totalCount }}
        />
      </div>
      <b className="h-full text-3xl">{question}</b>
      <div>
        <ProgressLine progress={(currentCount * 100) / totalCount} />
      </div>
    </div>
  );
};
