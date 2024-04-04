const ProgressLine = (props: Props.ProgressLine) => {
  const { progress } = props;

  return (
    <div className="w-full p-0.5 bg-color7 rounded-full h-2.5 max-w-md m-auto md:max-w-sm">
      <div
        className="bg-color1 h-1.5 rounded-full transition-all"
        style={{ width: `${progress || 0}%` }}
      ></div>
    </div>
  );
};

export default ProgressLine;
