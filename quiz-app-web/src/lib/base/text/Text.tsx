import { getText, replaceText } from "src/utils/i18n";

const Text = (props: Props.Text) => {
  const { path, replace } = props;
  const text = getText(path);

  if (replace) return <>{replaceText(text, replace)}</>;
  else return <>{text}</>;
};

export default Text;
