const WideButton = (props: Props.Button) => {
  const { label, onClick } = props;
  return (
    <button className="flex-center justify-center h-14 bg-color1 hover:bg-opacity-70 rounded-2xl w-full">
      <b className="text-color7">{label}</b>
    </button>
  );
};

export default WideButton;
