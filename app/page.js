"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");

  const buttons = [
    7,
    8,
    9,
    "/",
    4,
    5,
    6,
    "*",
    1,
    2,
    3,
    "-",
    0,
    ".",
    "=",
    "+",
    "C",
  ];
  const handleClick = (b) => {
    if (b === "=") {
      try {
        const evalResult = eval(expression).toString();
        setResult(evalResult);
        setExpression(evalResult);
      } catch (error) {
        setResult("Error");
      }
    } else if (b === "C") {
      setResult("");
      setExpression("");
    } else {
      setExpression(expression + b.toString());
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center border border-spacing-2 border-black h-screen bg-slate-200">
        <div className="p-12 h-screen md:h-fit w-screen md:w-fit bg-gray-100 rounded-xl">
          <h1 className="font-bold text-3xl mx-auto text-center mb-10 ">
            Calculator
          </h1>
          <div className="rounded-t-xl  ">
            <div>
              <input
                type="text"
                className="w-full font-bold text-xl h-14 bg-slate-200 rounded-t-xl"
                value={expression}
                readOnly
                disabled
              />
              <input
                type="text"
                className="w-full h-14  font-bold text-xl"
                value={result}
                readOnly
                disabled
              />
            </div>
            <div className="grid grid-cols-4 w-full bg-[#DFF2EB] rounded-b-xl">
              {buttons.map((b, index) => (
                <div
                  className="col-span-1 mx-auto p-4 text-xl font-bold text-center border border-spacing-1 w-full hover:bg-gray-500"
                  key={index}
                  onClick={() => handleClick(b)}
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
