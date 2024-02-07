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
  const weeksUntilBirthInFirstYear = Math.floor(
    (new Date().getTime() -
      new Date(new Date().getFullYear(), 0, 1).getTime()) /
      1000 /
      60 /
      60 /
      24 /
      7
  );

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const weeksUsed = Math.floor(age * 52);
  const weeksLeft = lifeExpectancy * 52 - weeksUsed;
  const totalWeeks = weeksUntilBirthInFirstYear + weeksUsed + weeksLeft;
  const getWeekNumber = (birthday: string, eventDate: string) => {
    const birth = new Date(birthday);
    const event = new Date(eventDate);
    const diff = event.getTime() - birth.getTime();
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.floor(diff / oneWeek);
  };

  const weeksAlive = Math.floor(
    (Date.now() - birthdate.getTime()) / 1000 / 60 / 60 / 24 / 7
  );
  const daysAlive = Math.floor(
    (Date.now() - birthdate.getTime()) / 1000 / 60 / 60 / 24
  );

  // Calculate total weeks of life expectancy
  const weeks = Array.from({ length: totalWeeks });

  const WeekUI = () => {
    return (
      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(52, 1fr)",
        }}
      >
        {weeks.map((_, i) => {
          const isHovered =
            hoveredCard &&
            i ===
              weeksUntilBirthInFirstYear +
                getWeekNumber(hoveredCard.birthday, hoveredCard.eventDate);
          const isBeforeBirth = i < weeksUntilBirthInFirstYear;
          const isPast =
            i >= weeksUntilBirthInFirstYear &&
            i < weeksUntilBirthInFirstYear + weeksUsed;
          const isFuture = i >= weeksUntilBirthInFirstYear + weeksUsed;
          const isCurrent = i === weeksUntilBirthInFirstYear + weeksUsed - 1;

          return (
            <div
              key={i}
              className={`border border-white dark:border-gray-900 h-[8px] ${
                isHovered
                  ? "bg-red-400"
                  : isBeforeBirth
                  ? "bg-gray-300 dark:bg-gray-700"
                  : isCurrent
                  ? "bg-green-500 dark:bg-green-500"
                  : isPast
                  ? "bg-gray-500"
                  : isFuture
                  ? "bg-gray-200 dark:bg-gray-700"
                  : ""
              }`}
              data-tooltip-content={isCurrent ? "You are here." : undefined}
            />
          );
        })}
      </div>
    );
  };

  const MiniStat = ({
    countedEntity,
    variable,
  }: {
    countedEntity: string;
    variable: number;
  }) => (
    <div className="grid grid-flow-col gap-2">
      <span className="text-gray-600 dark:text-gray-300">{countedEntity}</span>
      <span className="font-medium text-gray-900 dark:text-gray-100">
        {variable}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="grid grid-cols-2 m-auto mt-24 mb-12 gap-11 px-11 max-w-7xl">
        <div className="flex flex-col">
          <Tooltip id="my-tooltip" />
          <div className="flex justify-between gap-2 mb-5 text-gray-900 dark:text-gray-200">
            <div className="font-medium leading-[45px] text-[60px]">
              {age.toFixed(width < 871 ? width / 100 - 1 : 9)}
            </div>
            <div className="flex flex-col justify-between text-sm leading-5">
              <MiniStat countedEntity="Day" variable={daysAlive} />
              <MiniStat countedEntity="Week" variable={weeksAlive} />
            </div>
          </div>
          <WeekUI />
        </div>
        <div className="w-full">
          <MotivationCards setHoveredCard={setHoveredCard} />
        </div>
      </div>
      <div className="flex justify-end p-4 text-xs text-gray-500 dark:text-gray-400">
        <p>Settings</p>
        <span className="px-2">•</span>
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
  );
}

export default App;
