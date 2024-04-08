import moment from "moment";
import React, { useEffect, useState } from "react";

export const AgeCounter = React.memo(
  ({ birthdate, width }: { birthdate: Date; width: number }) => {
    const [age, setAge] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        const now = moment();
        const birth = moment(birthdate);
        const years = now.diff(birth, "years");
        birth.add(years, "years");

        let age = years;
        if (now.isAfter(birth)) {
          const diff = now.diff(birth, "milliseconds");
          const yearInMilliseconds = moment
            .duration(1, "year")
            .asMilliseconds();
          age += diff / yearInMilliseconds;
        }

        setAge(age);
        localStorage.setItem("lastAge", age.toString());
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
