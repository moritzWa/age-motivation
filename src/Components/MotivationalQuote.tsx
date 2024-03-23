import React, { useState } from "react";
import { quotes } from "./quotesData";

export const MotivationalQuotes = React.forwardRef<HTMLDivElement>(
  (props, ref) => {
    const [randomQuote] = useState(
      quotes[Math.floor(Math.random() * quotes.length)]
    );

    return (
      <div
        className="flex flex-col h-auto text-5xl font-bold leading-snug tracking-tight"
        ref={ref}
      >
        <span className="text-gray-900 dark:text-gray-100">
          {randomQuote.quote}
        </span>
        {randomQuote.author && (
          <span className="pt-4 text-3xl font-semibold text-gray-700 dark:text-gray-300">
            — {randomQuote.author}
          </span>
        )}
      </div>
    );
  }
);
