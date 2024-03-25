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
        let ageAsIFBornOnFirstDayOfYear =
          now.getFullYear() - birthdate.getFullYear();
        const monthToBirthdayMonth = now.getMonth() - birthdate.getMonth();

        if (
          monthToBirthdayMonth < 0 ||
          (monthToBirthdayMonth === 0 && now.getDate() <= birthdate.getDate())
        ) {
          ageAsIFBornOnFirstDayOfYear--;
        }
        const thisYearsBirthday = new Date(
          now.getFullYear() -
            (monthToBirthdayMonth < 0 ||
            (monthToBirthdayMonth === 0 && now.getDate() < birthdate.getDate())
              ? 1
              : 0),
          birthdate.getMonth(),
          birthdate.getDate()
        );
        const nextYearsBirthday = new Date(
          now.getFullYear() + 1,
          birthdate.getMonth(),
          birthdate.getDate()
        );
        const fractionOfYearSinceLastBirthday =
          (now.getTime() - thisYearsBirthday.getTime()) /
          (nextYearsBirthday.getTime() - thisYearsBirthday.getTime());

        setAge(ageAsIFBornOnFirstDayOfYear + fractionOfYearSinceLastBirthday);

        // Save the new age to localStorage
        localStorage.setItem(
          "lastAge",
          (
            ageAsIFBornOnFirstDayOfYear + fractionOfYearSinceLastBirthday
          ).toString()
        );
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
