import { useState } from "react";
import CalcButtonNumber from "./components/CalcButtonNumber";
import CalcButtonOperator from "./components/CalcButtonOperator";
import doCalculation from "./utils/doCalculation";

interface Display {
  current: string;
  total: string;
  isInitial: boolean;
  operation: string;
}

const Calculator = () => {
  const [display, setDisplay] = useState<Display>({
    current: "0",
    total: "0",
    isInitial: true,
    operation: "",
  });
  const handleNumber = (value: string) => {
    let newValue = value;
    if (display.isInitial == false) {
      newValue = display.current + value;
    }
    setDisplay({
      current: newValue,
      total: display.total,
      isInitial: false,
      operation: display.operation,
    });
  };
  const handleOperator = (op: string) => {
    const total = doCalculation(
      display.operation,
      parseInt(display.total),
      parseInt(display.current)
    );
    setDisplay({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      operation: op,
    });
  };
  const handleClear = () => {
    setDisplay({
      current: "0",
      total: "0",
      isInitial: true,
      operation: "",
    });
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
        <CalcButtonOperator value="C" onClick={handleClear} />
        <CalcButtonNumber value="0" onClick={handleNumber} />
        <CalcButtonOperator value="=" onClick={handleOperator} />
        <CalcButtonOperator value="+" onClick={handleOperator} />
      </div>
    </>
  );
};

export default Calculator;
