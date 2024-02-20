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
        const newAge =
          (Date.now() - birthdate.getTime()) / 1000 / 60 / 60 / 24 / 365;
        setAge(newAge);
        // Save the new age to localStorage
        localStorage.setItem("lastAge", newAge.toString());
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
