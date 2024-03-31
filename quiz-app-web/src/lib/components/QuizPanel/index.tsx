import { Description } from './Description';
import { Options } from './Options';

const QuizPanel = (props: Props.QuizPanel) => {
  return (
    <div className="flex gap-28 max-w-5xl">
      <Description {...props} />
      <Options />
    </div>
  );
};

export default QuizPanel;
