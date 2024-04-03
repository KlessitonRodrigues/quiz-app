import moonIcon from "src/lib/assets/svg/fluent_weather-moon-16-regular.svg";
import sunIcon from "src/lib/assets/svg/fluent_weather-sunny-16-regular.svg";
import Switch from "src/lib/base/inputs/Switch";
import If from "src/lib/base/containers/If";

import AccessibilityIcon from "src/lib/assets/svg/fluent_accessibility-16-regular.svg";
import HtmlIcon from "src/lib/assets/svg/fluent_code-16-regular.svg";
import JsIcon from "src/lib/assets/svg/fluent_javascript-16-regular.svg";
import CssIcon from "src/lib/assets/svg/fluent_paint-brush-16-regular.svg";
import Image from "next/image";

const Header = (props: Props.Header) => {
  const { pathname = "" } = props;

  const pageIcon: Record<string, string> = {
    "/quiz/html": HtmlIcon,
    "/quiz/css": CssIcon,
    "/quiz/javascript": JsIcon,
    "/quiz/accessibility": AccessibilityIcon,
  };

  return (
    <div className="flex justify-between w-full">
      <div className="flex-center gap-1">
        <If check={!!pageIcon[pathname]}>
          <>
            <div className="bg-opacity-10 p-1 rounded-lg">
              <Image width={28} src={pageIcon[pathname]} alt="" />
            </div>
            <h1 className="text-2xl font-bold">Accessibility</h1>
          </>
        </If>
      </div>

      <div>
        <Switch leftIcon={sunIcon} rightIcon={moonIcon} />
      </div>
    </div>
  );
};

export default Header;
