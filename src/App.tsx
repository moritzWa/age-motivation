import React, { useEffect, useMemo, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AgeCounter } from "./Components/AgeCounter";
import MotivationCards from "./Components/MotivationCards";
import { MotivationalQuotes } from "./Components/MotivationalQuote";
import Settings from "./Components/Settings";
import { WeekGrid } from "./Components/WeekGrid";
import { MotivationCardsType, cards } from "./Components/successfulPeopleData";

function App() {
  // settings
  const [settings, setSettings] = useState<{
    birthdate: string;
    lifeExpectancy: number;
    showSuccessfulPeople: boolean;
    showMotivationalQuotes: boolean;
  } | null>(() => {
    const savedSettings = localStorage.getItem("settings");
    return savedSettings ? JSON.parse(savedSettings) : null;
  });

  const [showSettings, setShowSettings] = useState(!settings);

  const birthdate = new Date(settings?.birthdate || "1998-12-13");
  const lifeExpectancy = settings?.lifeExpectancy || 88;

  const handleSave = (newSettings: {
    birthdate: string;
    lifeExpectancy: number;
    showSuccessfulPeople: boolean;
    showMotivationalQuotes: boolean;
  }) => {
    setSettings(newSettings);
    localStorage.setItem("settings", JSON.stringify(newSettings));
    setShowSettings(false);
  };

  const handleOpenSettings = () => {
    setShowSettings(true);
  };

  // resizing logic
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  // card hovering
  const [hoveredCard, setHoveredCard] = useState<{
    eventDate: string;
    birthday: string;
  } | null>(null);

  const weeksUntilBirthInFirstYear = useMemo(
    () =>
      Math.floor(
        (new Date().getTime() -
          new Date(new Date().getFullYear(), 0, 1).getTime()) /
          1000 /
          60 /
          60 /
          24 /
          7
      ),
    []
  );

  // main stats
  const age = (Date.now() - birthdate.getTime()) / 1000 / 60 / 60 / 24 / 365;
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

  // weeks logic
  const weeksAlive = Math.floor(
    (Date.now() - birthdate.getTime()) / 1000 / 60 / 60 / 24 / 7
  );
  const daysAlive = Math.floor(
    (Date.now() - birthdate.getTime()) / 1000 / 60 / 60 / 24
  );
  const [weeks, setWeeks] = useState([]);
  useEffect(() => {
    setWeeks(Array.from({ length: totalWeeks }));
  }, [totalWeeks]);
  // cards display
  const [allRandomCards, setAllRandomCards] = useState<MotivationCardsType[]>(
    []
  );
  const motivationalQuotesRef = useRef<HTMLDivElement>(null);
  const weekGridRef = useRef<HTMLDivElement>(null);
  const gridItemHeight = 8; // height of each grid item in pixels
  const gridGapHeight = 1; // height of each grid gap in pixels
  const numColumns = 52;

  const numRows = Math.ceil(totalWeeks / numColumns);
  const gridHeight = numRows * gridItemHeight + (numRows - 1) * gridGapHeight;

  useEffect(() => {
    const quoteHeight = motivationalQuotesRef.current?.offsetHeight || 0;
    const numberOfCards =
      settings?.showMotivationalQuotes && settings.showSuccessfulPeople
        ? Math.floor((gridHeight - quoteHeight) / 40) - 2
        : Math.floor(gridHeight / 40) - 1;

    const generateCards = () => {
      return cards.sort(() => 0.5 - Math.random()).slice(0, numberOfCards);
    };
    setAllRandomCards(generateCards());
  }, [gridHeight, settings]);

  // Settings UI
  if (showSettings) {
    return <Settings onSave={handleSave} currentSettings={settings} />;
  }

  if (!settings) {
    return <Settings onSave={handleSave} currentSettings={null} />;
  }

  const tooNarrowForTwoColumns = width < 950;

  const MiniStat = React.memo(
    ({
      countedEntity,
      variable,
    }: {
      countedEntity: string;
      variable: number;
    }) => (
      <div className="grid grid-flow-col gap-2">
        <span className="text-gray-600 dark:text-gray-300">
          {countedEntity}
        </span>
        <span className="font-medium tracking-normal text-gray-900 dark:text-gray-100">
          {variable}
        </span>
      </div>
    )
  );

  return (
    <div className="flex flex-col justify-between h-full">
      <div
        className={`grid m-auto mt-24 mb-12 gap-11 max-w-7xl
      ${
        tooNarrowForTwoColumns ||
        (!settings.showSuccessfulPeople && !settings.showMotivationalQuotes)
          ? " grid-cols-1 "
          : " grid-cols-2 px-11 "
      }${tooNarrowForTwoColumns && " w-[500px]"}
      `}
      >
        <div
          className={`flex flex-col ${width > 1080 && "w-[500px]"}
          ${width > 1150 && "w-[520px]"}
          ${width > 1250 && "w-[574px]"}
        `}
        >
          <Tooltip id="my-tooltip" />
          <div className="flex justify-between gap-2 mb-5 text-gray-900 dark:text-gray-200">
            <AgeCounter birthdate={birthdate} width={width} />
            {width > 1090 && (
              <div className="flex flex-col justify-between text-sm leading-4">
                <MiniStat countedEntity="Day" variable={daysAlive} />
                <MiniStat countedEntity="Week" variable={weeksAlive} />
              </div>
            )}
          </div>
          <WeekGrid
            weeks={weeks}
            weeksUntilBirthInFirstYear={weeksUntilBirthInFirstYear}
            weeksUsed={weeksUsed}
            hoveredCard={hoveredCard}
            getWeekNumber={getWeekNumber}
            ref={weekGridRef}
          />
        </div>

        <div className="flex flex-col justify-between h-fullw-full">
          {!tooNarrowForTwoColumns && settings.showSuccessfulPeople && (
            <MotivationCards
              setHoveredCard={setHoveredCard}
              allRandomCards={allRandomCards}
            />
          )}
          {!tooNarrowForTwoColumns && settings.showMotivationalQuotes && (
            <MotivationalQuotes ref={motivationalQuotesRef} />
          )}
        </div>
      </div>
      <div className="flex justify-end p-4 text-xs text-gray-500 dark:text-gray-400">
        <p
          onClick={handleOpenSettings}
          className="cursor-pointer hover:text-gray-700"
        >
          Settings
        </p>
        <span className="px-2"></span>
        <a
          href="https://chromewebstore.google.com/detail/age-motivation/febbcejjonlekadhjeldcljckdibjobk/reviews"
          className="text-gray-500 dark:text-gray-400 hover:text-gray-700"
          target="_blank noopener noreferrer"
        >
          Review
        </a>
        <span className="px-2"></span>
        <p>
          Made by{" "}
          <a
            href="https://x.com/MoritzW42/"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
            target="_blank noopener noreferrer"
          >
            Moritz W.
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
