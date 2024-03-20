import React from "react";

type WeekGridProps = {
  weeks: any[];
  weeksUntilBirthInFirstYear: number;
  weeksUsed: number;
  hoveredCard: { birthday: string; eventDate: string } | null;
  getWeekNumber: (birthday: string, eventDate: string) => number;
};

export const WeekGrid = React.memo(
  React.forwardRef<HTMLDivElement, WeekGridProps>(
    (
      {
        weeks,
        weeksUntilBirthInFirstYear,
        weeksUsed,
        hoveredCard,
        getWeekNumber,
      },
      ref
    ) => {
      return (
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(52, 1fr)",
          }}
          ref={ref}
        >
          {weeks.map((_, i) => {
            const isHovered =
              hoveredCard &&
              i ===
                weeksUntilBirthInFirstYear +
                  getWeekNumber(hoveredCard.birthday, hoveredCard.eventDate);
            const isBeforeBirth = i < weeksUntilBirthInFirstYear;
            const isPast =
              i >= weeksUntilBirthInFirstYear &&
              i < weeksUntilBirthInFirstYear + weeksUsed;
            const isFuture = i >= weeksUntilBirthInFirstYear + weeksUsed;
            const isCurrent = i === weeksUntilBirthInFirstYear + weeksUsed - 1;

            return (
              <div
                key={i}
                className={`border border-white dark:border-gray-900 h-[8px] ${
                  isHovered
                    ? "bg-red-400"
                    : isBeforeBirth
                    ? "bg-gray-300 dark:bg-gray-700"
                    : isCurrent
                    ? "bg-green-500 dark:bg-green-500"
                    : isPast
                    ? "bg-gray-500"
                    : isFuture
                    ? "bg-gray-200 dark:bg-gray-700"
                    : ""
                }`}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={isCurrent ? "You are here." : undefined}
              />
            );
          })}
        </div>
      );
    }
  )
);
