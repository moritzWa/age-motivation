import { FC, FormEvent, useState } from "react";

interface SettingsProps {
  onSave: (settings: { birthdate: string; lifeExpectancy: number }) => void;
  currentSettings: { birthdate: string; lifeExpectancy: number } | null;
}

const Settings: FC<SettingsProps> = ({ onSave, currentSettings }) => {
  const [birthdate, setBirthdate] = useState(currentSettings?.birthdate || "");
  const [lifeExpectancy, setLifeExpectancy] = useState(
    currentSettings?.lifeExpectancy || 85
  );
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSave({ birthdate, lifeExpectancy });
  };

  return (
    <div className="flex items-start justify-center w-full h-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center h-full text-gray-900 dark:text-gray-200 max-w-80"
      >
        <label className="mb-4">
          Date of Birth:
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="p-2 ml-2 text-gray-900 bg-white border border-gray-300 dark:bg-gray-800 dark:text-gray-200"
          />
        </label>
        <label className="mb-4">
          Life Expectancy:
          <input
            type="number"
            value={lifeExpectancy}
            onChange={(e) => setLifeExpectancy(parseInt(e.target.value))}
            className="p-2 ml-2 text-gray-900 bg-white border border-gray-300 dark:bg-gray-800 dark:text-gray-200 w-[123px]"
          />
        </label>
        <a
          className="pb-5"
          href="https://www.blueprintincome.com/tools/life-expectancy-calculator-how-long-will-i-live/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Life expectancy calculator
        </a>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Settings;
