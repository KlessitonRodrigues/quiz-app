import Image from 'next/image';

const Switch = (props: Props.Switch) => {
  const { leftIcon, rightIcon } = props;

  return (
    <label className="flex-center cursor-pointer">
      <span>{leftIcon && <Image width={18} src={leftIcon} alt="" />}</span>
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="relative w-9 h-5 bg-color1 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-color7 dark:peer-focus:ring-purple-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-color6 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-color7 after:border-color7 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-color1"></div>
      <span>{rightIcon && <Image width={18} src={rightIcon} alt="" />}</span>
    </label>
  );
};

export default Switch;
