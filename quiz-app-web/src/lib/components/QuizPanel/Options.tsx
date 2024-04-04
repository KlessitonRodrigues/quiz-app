import { useMemo, useState } from "react";
import WideButton from "src/lib/base/buttons/WideButton";
import If from "src/lib/base/containers/If";
import Radio from "src/lib/base/inputs/Radio";
import { getText } from "src/utils/i18n";

export const Options = (props: Props.QuizPanelOptions) => {
  const {
    options = [],
    result = "",
    showResult,
    onSubmitResult,
    onNextQuiz,
  } = props;
  const [selected, setSelected] = useState(-1);
  const quizResult = options.indexOf(result);

  const onNext = () => {
    onNextQuiz && onNextQuiz();
    setSelected(-1);
  };

  const optButtons = useMemo(() => {
    return options.map((option, index) => {
      return (
        <Radio
          key={index}
          index={String.fromCharCode(65 + index)}
          label={option}
          onClick={() => !showResult && setSelected(index)}
          selected={index === selected}
          correct={index === quizResult}
          error={index !== quizResult && index === selected}
          noColor={!showResult}
        />
      );
    });
    // eslint-disable-next-line
  }, [options, selected, showResult]);

  return (
    <div className="flex-center gap-1 flex-col w-full">
      <div className="flex flex-col gap-4 w-full">{optButtons}</div>
      <If check={!showResult}>
        <WideButton
          label={getText("quiz_submit_button")}
          onClick={() => onSubmitResult && onSubmitResult(options[selected])}
        />
      </If>
      <If check={!!showResult}>
        <WideButton label={getText("quiz_next_button")} onClick={onNext} />
      </If>
    </div>
  );
};
