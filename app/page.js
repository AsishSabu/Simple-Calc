"use client";
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
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-slate-300">
      <div className="p-6 w-full max-w-sm  bg-white shadow-lg rounded-lg">
        <h1 className="font-bold text-3xl text-center mb-6 text-gray-800">Calculator</h1>
        <div className="mb-4">
          <input
            type="text"
            className="w-full text-right text-lg font-bold h-12 bg-gray-200 rounded-t-md p-2"
            value={expression}
            readOnly
            disabled
          />
          <input
            type="text"
            className="w-full text-right text-2xl font-bold h-14 bg-gray-300 rounded-b-md p-2"
            value={result}
            readOnly
            disabled
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((b, index) => (
            <button
              key={index}
              className="p-4 font-bold text-xl bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 active:bg-gray-400 transition-all focus:outline-none"
              onClick={() => handleClick(b)}
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
