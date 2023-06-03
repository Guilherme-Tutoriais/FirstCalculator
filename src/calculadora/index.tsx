import { useState } from "react";
import CalcButtonNumber from "./components/CalcButtonNumber";
import CalcButtonOperator from "./components/CalcButtonOperator";

interface Display {
  current: string;
  total: string;
  isInitial: boolean;
}

const Calculator = () => {
  const [display, setDisplay] = useState<Display>({
    current: "0",
    total: "0",
    isInitial: true,
  });
  const handleNumber = (value: string) => {
    let newValue = value;
    if (display.isInitial == false) {
      newValue = display.current + value;
    }
    setDisplay({ current: newValue, total: display.total, isInitial: false });
  };
  const handleOperator = (op: string) => {
    console.log(`operation: ${op}`);
  };
  const renderDisplay = () => {
    return display.current;
  };
  return (
    <>
      <div>{renderDisplay()}</div>
      <div>
        <CalcButtonNumber value="7" onClick={handleNumber} />
        <CalcButtonNumber value="8" onClick={handleNumber} />
        <CalcButtonNumber value="9" onClick={handleNumber} />
        <CalcButtonOperator value="*" onClick={handleOperator} />
      </div>
      <div>
        <CalcButtonNumber value="4" onClick={handleNumber} />
        <CalcButtonNumber value="5" onClick={handleNumber} />
        <CalcButtonNumber value="6" onClick={handleNumber} />
        <CalcButtonOperator value="/" onClick={handleOperator} />
      </div>
      <div>
        <CalcButtonNumber value="1" onClick={handleNumber} />
        <CalcButtonNumber value="2" onClick={handleNumber} />
        <CalcButtonNumber value="3" onClick={handleNumber} />
        <CalcButtonOperator value="-" onClick={handleOperator} />
      </div>
      <div>
        <CalcButtonOperator value="C" onClick={handleOperator} />
        <CalcButtonNumber value="0" onClick={handleNumber} />
        <CalcButtonOperator value="=" onClick={handleOperator} />
        <CalcButtonOperator value="+" onClick={handleOperator} />
      </div>
    </>
  );
};

export default Calculator;
