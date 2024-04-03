import Image from "next/image";
import If from "../containers/If";

import checkmarkIcon from "src/lib/assets/svg/fluent_checkmark-circle-16-regular.svg";
import dismissIcon from "src/lib/assets/svg/fluent_dismiss-circle-16-regular-1.svg";

const Radio = (props: Props.Radio) => {
  const {
    index,
    label,
    icon,
    iconBg,
    selected,
    error,
    correct,
    noColor,
    onClick,
  } = props;

  let color = "color6";
  if (selected) color = "color1";
  if (!noColor && correct) color = "color9";
  if (!noColor && error) color = "color8";

  let textcolor = "color2";
  if (selected) textcolor = "color7";
  if (!noColor && (correct || error)) textcolor = "color7";

  return (
    <button
      type="button"
      className={`flex-center p-3 rounded-2xl bg-color7 shadow-sm border-2 border-${color} w-full transition-all`}
      onClick={() => onClick && onClick()}
    >
      <div className={`bg-${iconBg || color} text-${textcolor} rounded-md`}>
        <div className="icon flex-center justify-center w-10 h-10">
          <b>{icon || index}</b>
        </div>
      </div>
      <div className="flex-center w-full px-2">
        <p className="flex items-start w-full text-left font-bold">{label}</p>
        <div className="w-10">
          <If check={!noColor && !!error}>
            <Image src={dismissIcon} alt="" />
          </If>
          <If check={!noColor && !!correct}>
            <Image src={checkmarkIcon} alt="" />
          </If>
        </div>
      </div>
    </button>
  );
};

export default Radio;
