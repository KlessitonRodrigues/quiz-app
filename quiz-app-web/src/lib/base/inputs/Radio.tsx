const Radio = (props: Props.Radio) => {
  const { index, label, icon, iconBg } = props;

  return (
    <div className="flex-center p-3 rounded-2xl bg-color7 cursor-pointer shadow-sm">
      <div className={`flex-center justify-center w-10 h-10 rounded-md ${iconBg || 'bg-color6'}`}>
        <b>{icon || index}</b>
      </div>
      <div>{label}</div>
    </div>
  );
};

export default Radio;
