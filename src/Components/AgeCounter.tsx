import React, { useEffect, useState } from "react";

export const AgeCounter = React.memo(
  ({ birthdate, width }: { birthdate: Date; width: number }) => {
    const [age, setAge] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setAge((Date.now() - birthdate.getTime()) / 1000 / 60 / 60 / 24 / 365);
      }, 100);
      return () => clearInterval(interval);
    }, [birthdate]);

    return (
      <div className="font-medium leading-[45px] text-[60px]">
        {age.toFixed(width < 871 ? width / 100 : 9)}
      </div>
    );
  }
);
