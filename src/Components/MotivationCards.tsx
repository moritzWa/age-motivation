// import KanyeWestColledgeDropout from "../Images/KanyeWestColledgeDropout.jpg";
// import SteveJobsPlayingGame from "../Images/SteveJobsPlayingGame.png";

type MotivationCardsType = {
  age: number;
  name: string;
  verb: string;
  what: string;
};

const cards: MotivationCardsType[] = [
  {
    age: 25,
    name: "Steve Jobs",
    verb: "takes public",
    what: "Apple",
  },
  {
    age: 26,
    name: "Kanye West",
    verb: "releases",
    what: "College Dropout",
  },
  {
    age: 19,
    name: "Mark Zuckerberg",
    verb: "launches",
    what: "Facebook",
  },
  {
    age: 20,
    name: "Bill Gates",
    verb: "founds",
    what: "Microsoft",
  },
  {
    age: 27,
    name: "Elon Musk",
    verb: "sold",
    what: "Zip2",
  },
  {
    age: 28,
    name: "Elon Musk",
    verb: "co-founds",
    what: "PayPal",
  },
  {
    age: 25,
    name: "Larry Page and Sergey Brin",
    verb: "start",
    what: "Google",
  },
  {
    age: 21,
    name: "Evan Spiegel",
    verb: "co-founded",
    what: "Snapchat",
  },
  {
    age: 37,
    name: "Travis Kalanick",
    verb: "co-founds",
    what: "Uber",
  },
];

const Card = ({ age, name, verb, what }: MotivationCardsType) => (
  <div className="pb-4 text-gray-600 dark:text-gray-300 max-h-80">
    <div>
      <span className="font-medium text-gray-900 dark:text-gray-100">
        {name}
      </span>{" "}
      {verb}{" "}
      <span className="font-medium text-gray-900 dark:text-gray-100">
        {what}
      </span>{" "}
      at age {age}
    </div>
    {/* <img src={image} alt={name} className="object-contain w-full" /> */}
  </div>
);

function MotivationCards() {
  return (
    <div className="h-full">
      {cards.map((c) => (
        <Card {...c} />
      ))}
    </div>
  );
}

export default MotivationCards;
