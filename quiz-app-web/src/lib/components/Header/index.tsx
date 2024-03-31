import Image from 'next/image';

import accessibilityIcon from 'src/lib/assets/svg/fluent_accessibility-16-regular.svg';
import moonIcon from 'src/lib/assets/svg/fluent_weather-moon-16-regular.svg';
import sunIcon from 'src/lib/assets/svg/fluent_weather-sunny-16-regular.svg';
import Switch from 'src/lib/base/inputs/Switch';

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex-center gap-1">
        <div className="bg-color1 bg-opacity-10 p-1 rounded-lg">
          <Image width={28} src={accessibilityIcon} alt="accessibility icon" />
        </div>
        <h1 className="text-2xl font-bold">Accessibility</h1>
      </div>
      <div>
        <Switch leftIcon={sunIcon} rightIcon={moonIcon} />
      </div>
    </div>
  );
};

export default Header;
