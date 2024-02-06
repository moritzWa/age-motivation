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
    what: "Apple ($1.2B)",
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
  {
    age: 26,
    name: "Albert Einstein",
    verb: "publishes",
    what: "Theory of Relativity",
  },
  {
    age: 30,
    name: "Alexander Hamilton",
    verb: "drafts",
    what: "The Federalist Papers",
  },
  {
    age: 25,
    name: "Isaac Asimov",
    verb: "published",
    what: "Foundation",
  },
  {
    age: 21,
    name: "Walt Disney",
    verb: "founds",
    what: "Disney",
  },
  {
    age: 29,
    name: "George Lucas",
    verb: "starts writing",
    what: "Star Wars",
  },
  {
    age: 23,
    name: "Daniel Ek",
    verb: "launches",
    what: "Spotify",
  },
  {
    age: 25,
    name: "Drew Houston",
    verb: "launches",
    what: "Dropbox",
  },
  {
    age: 26,
    name: "Brian Chesky",
    verb: "launches",
    what: "Airbnb",
  },
  {
    age: 26,
    name: "Albert Einstein",
    verb: "publishes",
    what: "Theory of Relativity",
  },
  {
    age: 35,
    name: "Abraham H. Maslow",
    verb: "publishes",
    what: "A Theory of Human Motivation",
  },
];

const cardsSortedByAge = cards.sort((a, b) => a.age - b.age);

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
      {cardsSortedByAge.map((c) => (
        <Card {...c} />
      ))}
    </div>
  );
}

export default MotivationCards;
