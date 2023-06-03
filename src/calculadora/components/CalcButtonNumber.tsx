const CalcButtonNumber = ({
  value,
  onClick,
}: {
  value: string;
  onClick?: any;
}) => {
  return <button onClick={() => onClick(value)}>{value}</button>;
};

export default CalcButtonNumber;
