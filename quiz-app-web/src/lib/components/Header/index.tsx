import moonIcon from "src/lib/assets/svg/fluent_weather-moon-16-regular.svg";
import sunIcon from "src/lib/assets/svg/fluent_weather-sunny-16-regular.svg";
import Switch from "src/lib/base/inputs/Switch";

import { PageTitle } from "src/lib/base/text/PageTitle";

const Header = (props: Props.Header) => {
  const { pathname = "" } = props;

  return (
    <div className="flex justify-between w-full">
      <div className="flex-center gap-1">
        <PageTitle pathname={pathname} />
      </div>
      <div>
        <Switch leftIcon={sunIcon} rightIcon={moonIcon} />
      </div>
    </div>
  );
};

export default Header;
