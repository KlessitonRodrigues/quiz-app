import ProgressLine from 'src/lib/base/progress/progressLine';

export const Description = (props: Props.QuizPanel) => {
  const { question, currentCount = 0, totalCount = 0 } = props;
  return (
    <div className="flex flex-col w-full">
      <div className="mb-6">
        Question {currentCount} of {totalCount}
      </div>
      <b className="h-full text-3xl">{question}</b>
      <div>
        <ProgressLine progress={(currentCount * 100) / totalCount} />
      </div>
    </div>
  );
};
