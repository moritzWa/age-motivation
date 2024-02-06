import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import MotivationCards from "./Components/MotivationCards";

function App() {
  const birthdate = new Date("1998-12-13");
  const [age, setAge] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<{
    eventDate: string;
    birthday: string;
  } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAge((Date.now() - birthdate.getTime()) / 1000 / 60 / 60 / 24 / 365);
    }, 100);
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

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="grid grid-cols-2 m-auto mt-24 mb-12 gap-11 px-11 max-w-7xl">
      <div className="flex flex-col">
        <Tooltip id="my-tooltip" />
        <div className="flex justify-between text-[60px] gap-2 leading-10 dark:text-gray-200 text-gray-900">
          <div className="mb-5 font-medium">
            {age.toFixed(width < 871 ? width / 100 - 1 : 9)}
          </div>
          {/* <div
            className="mb-5 font-medium text-right"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Life expectancy - age"
          >
            {(lifeExpectancy - age).toFixed(9)}
          </div> */}
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
                className="border border-white dark:border-gray-900 bg-gray-300 dark:bg-gray-700 h-[8px]"
              />
            )
          )}
          {Array.from({ length: weeksUsed - 1 }, (_, i) => (
            <div
              key={i}
              className="border border-white dark:border-gray-900 bg-gray-500 h-[8px]"
            />
          ))}
          <div
            key="current"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="You are here."
            className="border border-white dark:border-gray-900 bg-green-500 dark:bg-green-500 h-[8px]"
          />
          {Array.from({ length: weeksLeft }, (_, i) => (
            <div
              key={i}
              className="border border-white dark:border-gray-900 bg-gray-200 dark:bg-gray-700 h-[8px]"
            />
          ))}
        </div>
      </div>
      <div className="w-full">
        <MotivationCards setHoveredCard={setHoveredCard} />
        <div className="flex justify-end text-xs text-gray-500 dark:text-gray-400">
          <p>
            Made by{" "}
            <a
              href="https://x.com/MoritzW42/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              Moritz W.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
