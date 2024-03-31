import Image from 'next/image';

import AccessibilityIcon from 'src/lib/assets/svg/fluent_accessibility-16-regular.svg';
import HtmlIcon from 'src/lib/assets/svg/fluent_code-16-regular.svg';
import JsIcon from 'src/lib/assets/svg/fluent_javascript-16-regular.svg';
import CssIcon from 'src/lib/assets/svg/fluent_paint-brush-16-regular.svg';
import CirclesBG from 'src/lib/base/background/Circles';
import Page from 'src/lib/base/containers/Page';
import Radio from 'src/lib/base/inputs/Radio';
import Header from 'src/lib/components/Header';

const HomePage = () => {
  return (
    <Page>
      <Header />
      <div className="flex gap-16 max-w-5xl w-full">
        <div className="w-full">
          <p>Wellcome to the</p>
          <p>Frontend Quiz</p>
          <p>Pick a subject to get started</p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Radio
            icon={<Image width={28} src={HtmlIcon} alt="" />}
            iconBg="bg-color8 bg-opacity-10"
            index=".."
            label="HTML"
            value=""
          />
          <Radio
            icon={<Image width={28} src={CssIcon} alt="" />}
            iconBg="bg-color9 bg-opacity-10"
            index=".."
            label="CSS"
            value=""
          />
          <Radio
            icon={<Image width={28} src={JsIcon} alt="" />}
            iconBg="bg-color5 bg-opacity-20"
            index=".."
            label="Javascript"
            value=""
          />
          <Radio
            icon={<Image width={28} src={AccessibilityIcon} alt="" />}
            iconBg="bg-color1 bg-opacity-10"
            index=".."
            label="Accessibility"
            value=""
          />
        </div>
      </div>
      <CirclesBG />
    </Page>
  );
};

export default HomePage;
