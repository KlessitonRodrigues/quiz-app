declare namespace Props {
  type Switch = {
    onToggle?: () => void;
    checked?: boolean;
    leftIcon?: string;
    rightIcon?: string;
  };

  type Radio = {
    index?: string;
    icon?: React.ReactElement;
    iconBg?: string;
    label?: string;
    value?: string;
    onClick?: () => void;
    selected?: boolean;
    error?: boolean;
    correct?: boolean;
    noColor?: boolean;
  };

  type ProgressLine = {
    progress?: number;
  };

  type QuizPanel = {
    quizzes?: Api.Quiz[];
  };

  type QuizPanelDescription = {
    question?: string;
    currentCount?: number;
    totalCount?: number;
  };

  type QuizPanelOptions = {
    result?: string;
    options?: string[];
    showResult?: boolean;
    onSubmitResult?: (value: string) => void;
    onNextQuiz?: () => void;
  };

  type Button = {
    label?: string;
    onClick?: () => void;
  };

  type If = {
    check?: boolean;
    true?: React.ReactElement;
    false?: React.ReactElement;
    children?: React.ReactElement;
  };
}
