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
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          className="p-2 ml-2 text-gray-900 bg-white dark:bg-gray-800 dark:text-gray-200"
        />
      </label>
      <label className="mb-4">
        Life Expectancy:
        <input
          type="number"
          value={lifeExpectancy}
          onChange={(e) => setLifeExpectancy(parseInt(e.target.value))}
          className="p-2 ml-2 text-gray-900 bg-white dark:bg-gray-800 dark:text-gray-200"
        />
      </label>
      <div className="pb-5">Life expectancy canculator</div>
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
