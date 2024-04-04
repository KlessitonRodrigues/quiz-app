"use client";

import Image from "next/image";
import Link from "next/link";

import AccessibilityIcon from "src/lib/assets/svg/fluent_accessibility-16-regular.svg";
import HtmlIcon from "src/lib/assets/svg/fluent_code-16-regular.svg";
import JsIcon from "src/lib/assets/svg/fluent_javascript-16-regular.svg";
import CssIcon from "src/lib/assets/svg/fluent_paint-brush-16-regular.svg";
import CirclesBG from "src/lib/base/background/Circles";
import Page from "src/lib/base/containers/Page";
import Radio from "src/lib/base/inputs/Radio";
import Header from "src/lib/components/Header";

const HomePage = () => {
  return (
    <Page>
      <Header />
      <div className="flex flex-col gap-16 max-w-5xl w-full md:flex-row">
        <div className="flex flex-col gap-4 w-full">
          <p className="text-5xl">Wellcome to the</p>
          <h1 className="text-5xl">Frontend Quiz</h1>
          <p>Pick a subject to get started</p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Link href="/quiz/html">
            <Radio
              icon={<Image width={28} src={HtmlIcon} alt="" />}
              iconBg="color8 bg-opacity-10"
              index=".."
              label="HTML"
              value=""
              noColor
            />
          </Link>
          <Link href="/quiz/css">
            <Radio
              icon={<Image width={28} src={CssIcon} alt="" />}
              iconBg="color9 bg-opacity-10"
              index=".."
              label="CSS"
              value=""
            />
          </Link>
          <Link href="/quiz/javascript">
            <Radio
              icon={<Image width={28} src={JsIcon} alt="" />}
              iconBg="color5 bg-opacity-20"
              index=".."
              label="Javascript"
              value=""
            />
          </Link>
          <Link href="/quiz/accessibility">
            <Radio
              icon={<Image width={28} src={AccessibilityIcon} alt="" />}
              iconBg="color1 bg-opacity-10"
              index=".."
              label="Accessibility"
              value=""
            />
          </Link>
        </div>
      </div>
      <CirclesBG />
    </Page>
  );
};

export default HomePage;
