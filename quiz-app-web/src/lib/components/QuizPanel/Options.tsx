import WideButton from 'src/lib/base/buttons/WideButton';
import Radio from 'src/lib/base/inputs/Radio';

export const Options = () => {
  return (
    <div className="flex-center gap-1 flex-col w-full">
      <div className="flex flex-col gap-4 w-full">
        <Radio index="D" label="Option 4" value="4" />
        <Radio index="D" label="Option 4" value="4" />
        <Radio index="D" label="Option 4" value="4" />
        <Radio index="D" label="Option 4" value="4" />
      </div>
      <WideButton label="Submit Answer" />
    </div>
  );
};
