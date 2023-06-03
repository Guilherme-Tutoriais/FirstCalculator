import CalcButtonNumber from "./components/CalcButton";
import CalcButtonOperator from "./components/CalcButtonOperator";

const Calculator = () => {
  const handleNumber = () => {
    console.log("number");
  };
  const handleOperator = () => {
    console.log("operator");
  };

  return (
    <>
      <p>calculadora</p>
      <div>
        <CalcButtonNumber label="7" />
        <CalcButtonNumber label="8" />
        <CalcButtonNumber label="9" />
        <CalcButtonOperator label="*" />
      </div>
      <div>
        <CalcButtonNumber label="4" />
        <CalcButtonNumber label="5" />
        <CalcButtonNumber label="6" />
        <CalcButtonOperator label="-/" />
      </div>
      <div>
        <CalcButtonNumber label="1" />
        <CalcButtonNumber label="2" />
        <CalcButtonNumber label="3" />
        <CalcButtonOperator label="-" />
      </div>
      <div>
        <CalcButtonOperator label="C" />
        <CalcButtonNumber label="0" />
        <CalcButtonOperator label="=" />
        <CalcButtonOperator label="+" />
      </div>
    </>
  );
};

export default Calculator;
