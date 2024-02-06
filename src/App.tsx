import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import MotivationCards from "./Components/MotivationCards";

function App() {
  const birthdate = new Date("1998-12-13");
  const [age, setAge] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAge((Date.now() - birthdate.getTime()) / 1000 / 60 / 60 / 24 / 365);
    }, 1000);
    return () => clearInterval(interval);
  }, [birthdate]);

  const lifeExpectancy = 85;
  const weeksUntilBirthdayInFirstYearAlive = Math.floor(
    (new Date().getTime() -
      new Date(new Date().getFullYear(), 0, 1).getTime()) /
      1000 /
      60 /
      60 /
      24 /
      7
  );
  const weeksUsed = Math.floor(age * 52);
  const weeksLeft = lifeExpectancy * 52 - weeksUsed;

  return (
    <div className="grid grid-cols-2 gap-6 px-6 m-auto mt-32 mb-12 max-w-7xl">
      <div className="flex flex-col">
        <Tooltip id="my-tooltip" />
        <div className="grid grid-cols-2 gap-2">
          <div className="mb-5 text-[45px] font-medium">{age.toFixed(9)}</div>
          <div
            className="mb-5 text-[45px] font-medium text-right"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Life expectancy - age"
          >
            {(lifeExpectancy - age).toFixed(9)}
          </div>
        </div>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(52, 1fr)",
          }}
        >
          {Array.from(
            { length: weeksUntilBirthdayInFirstYearAlive },
            (_, i) => (
              <div
                key={i}
                className="border border-white bg-slate-300 h-[8px]"
              />
            )
          )}
          {Array.from({ length: weeksUsed - 1 }, (_, i) => (
            <div key={i} className="border border-white bg-slate-500 h-[8px]" />
          ))}
          <div
            key="current"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="You are here."
            className="border border-white bg-green-500 h-[8px]"
          />
          {Array.from({ length: weeksLeft }, (_, i) => (
            <div key={i} className="border border-white bg-slate-300 h-[8px]" />
          ))}
        </div>
      </div>
      <div className="w-full">
        <MotivationCards />
      </div>
    </div>
  );
}

export default App;
