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
  };

  type ProgressLine = {
    progress?: number;
  };

  type QuizPanel = {
    question?: string;
    options?: Radio[];
    totalCount?: number;
    currentCount?: number;
  };

  type Button = {
    label?: string;
    onClick?: () => void;
  };
}
