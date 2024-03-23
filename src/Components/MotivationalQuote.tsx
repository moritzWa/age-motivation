import React from "react";
import { quotes } from "./quotesData";

export const MotivationalQuotes = React.forwardRef<HTMLDivElement>(
  (props, ref) => {
    return (
      <div className="flex flex-col h-auto text-5xl font-bold" ref={ref}>
        <span className="text-gray-900 dark:text-gray-100">
          {quotes[0].quote}
        </span>
        {quotes[0].author && (
          <span className="pt-5 text-3xl font-medium text-gray-700 dark:text-gray-300">
            — {quotes[0].author}
          </span>
        )}
      </div>
    );
  }
);
