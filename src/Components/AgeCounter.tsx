import React, { useEffect, useState } from "react";

export const AgeCounter = React.memo(
  ({
    birthdate,
    width,
    tooNarrowForTwoColumns,
  }: {
    birthdate: Date;
    width: number;
    tooNarrowForTwoColumns: boolean;
  }) => {
    // Get the last age from localStorage or set it to 0 if it doesn't exist
    const lastAge = localStorage.getItem("lastAge") || "0";
    const [age, setAge] = useState(parseFloat(lastAge));

    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date();
        let age = now.getFullYear() - birthdate.getFullYear();
        const m = now.getMonth() - birthdate.getMonth();
        if (m < 0 || (m === 0 && now.getDate() < birthdate.getDate())) {
          age--;
        }
        const lastBirthday = new Date(
          now.getFullYear(),
          birthdate.getMonth(),
          birthdate.getDate()
        );
        const nextBirthday = new Date(
          now.getFullYear() + 1,
          birthdate.getMonth(),
          birthdate.getDate()
        );
        const yearFraction =
          (now.getTime() - lastBirthday.getTime()) /
          (nextBirthday.getTime() - lastBirthday.getTime());
        setAge(age + yearFraction);
        // Save the new age to localStorage
        localStorage.setItem("lastAge", (age + yearFraction).toString());
      }, 100);
      return () => clearInterval(interval);
    }, [birthdate]);
    return (
      <div className="font-medium leading-[45px] text-[60px]">
        {age.toFixed(width < 800 ? 9 : width < 871 ? width / 100 : 9)}
      </div>
    );
  }
);
