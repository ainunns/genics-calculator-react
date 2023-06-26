import { useState } from "react";
import Button from "./components/Button";
import { evaluate } from "mathjs";

export default function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");

  const clear = () => {
    setExpression("");
    setResult("0");
  };

  const backspace = () => {
    if (expression === "") return;
    setExpression(expression.slice(0, -1));
    if (result.length === 1) return setResult("0");
    setResult(result.slice(0, -1));
  };

  const addExpression = (value) => {
    setExpression((prev) => prev + value);
  };

  const addResult = (value) => {
    setResult((prev) => (result === "0" ? value : prev + value));
    addExpression(value);
  };

  const addOperator = (value) => {
    addExpression(value);
    setResult("0");
  };

  const calculate = () => {
    try {
      setResult(evaluate(expression));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <main className="w-full my-6 lg:my-20 font-roboto">
      <section className="w-80 md:w-96 px-4 py-6 rounded-2xl mx-auto bg-[#FBFBFB] drop-shadow-2xl">
        <div className="py-10">
          <h3 className="text-gray-500 text-4xl overflow-x-auto overflow-y-hidden">
            {expression}
          </h3>
          <h1 className="text-black text-8xl mt-2 overflow-x-auto overflow-y-hidden">
            {result}
          </h1>
        </div>
        <div className="grid grid-cols-4 grid-rows-5 gap-3 md:gap-4">
          <Button label="CE" variant="primary" funcOnClick={clear} />
          <Button label="C" variant="primary" funcOnClick={backspace} />
          <Button
            label="/"
            variant="primary"
            funcOnClick={() => addOperator("/")}
          />
          <Button
            label="*"
            variant="primary"
            funcOnClick={() => addOperator("*")}
          />
          <Button
            label="7"
            variant="primary"
            funcOnClick={() => addResult("7")}
          />
          <Button
            label="8"
            variant="primary"
            funcOnClick={() => addResult("8")}
          />
          <Button
            label="9"
            variant="primary"
            funcOnClick={() => addResult("9")}
          />
          <Button
            label="-"
            variant="primary"
            funcOnClick={() => addOperator("-")}
          />
          <Button
            label="4"
            variant="primary"
            funcOnClick={() => addResult("4")}
          />
          <Button
            label="5"
            variant="primary"
            funcOnClick={() => addResult("5")}
          />
          <Button
            label="6"
            variant="primary"
            funcOnClick={() => addResult("6")}
          />
          <Button
            label="+"
            variant="primary"
            funcOnClick={() => addOperator("+")}
          />
          <Button
            label="1"
            variant="primary"
            funcOnClick={() => addResult("1")}
          />
          <Button
            label="2"
            variant="primary"
            funcOnClick={() => addResult("2")}
          />
          <Button
            label="3"
            variant="primary"
            funcOnClick={() => addResult("3")}
          />
          <Button
            label="="
            variant="success"
            className="row-span-2"
            funcOnClick={calculate}
          />
          <Button
            label="0"
            variant="primary"
            funcOnClick={() => addResult("0")}
            className="col-span-2"
          />
          <Button
            label="."
            variant="primary"
            funcOnClick={() => addResult(".")}
          />
        </div>
      </section>
    </main>
  );
}
