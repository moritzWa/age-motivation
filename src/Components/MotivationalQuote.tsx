const quotes = [
  {
    quote:
      "One way to remember who you are is to remember who your heroes are.",
    author: "Steve Jobs",
  },
];

export const MotivationalQuotes = () => {
  return (
    <div className="flex flex-col h-full text-5xl font-bold">
      <span className="text-gray-900 dark:text-gray-100">
        {quotes[0].quote}
      </span>
      <span className="pt-5 text-3xl font-medium text-gray-700 dark:text-gray-300">
        — {quotes[0].author}
      </span>
    </div>
  );
};
