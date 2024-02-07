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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center h-full text-gray-900 dark:text-gray-200"
    >
      <label className="mb-4">
        Date of Birth:
        <div className="relative">
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="p-2 pl-8 ml-2 text-gray-900 bg-white dark:bg-gray-800 dark:text-gray-200"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="absolute w-6 h-6 text-gray-500 transform -translate-y-1/2 left-2 top-1/2 dark:text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m4-2v6m4 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2z"
            />
          </svg>
        </div>
      </label>
      <label className="mb-4">
        Life Expectancy:
        <input
          type="number"
          value={lifeExpectancy}
          onChange={(e) => setLifeExpectancy(parseInt(e.target.value))}
          className="p-2 ml-2 text-gray-900 bg-white appearance-none dark:bg-gray-800 dark:text-gray-200"
        />
      </label>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        Save
      </button>
    </form>
  );
};

export default Settings;
