import { useEffect, useState } from "react";

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
  const totalWeeksInGrid = 98 * 52;
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
    <div className="grid grid-cols-2 gap-4 px-5 m-auto mt-32 mb-12 max-w-7xl">
      <div className="flex flex-col">
        <div className="mb-5 text-6xl font-medium">{age.toFixed(9)}</div>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(52, 1fr)",
            // gridTemplateRows: "repeat(98, 1fr)",
          }}
        >
          {/* {map small div for every week that is left */}
          {/* {Array.from({ length: totalWeeksInGrid }, (_, i) => (
            <div key={i} className="border border-white bg-slate-300 h-[7px]" />
          ))} */}
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
            className="border border-white bg-green-500 h-[8px]"
          />
          {Array.from({ length: weeksLeft }, (_, i) => (
            <div key={i} className="border border-white bg-slate-300 h-[8px]" />
          ))}
        </div>
      </div>
      <div className="w-full">bla</div>
    </div>
  );
}

export default App;
