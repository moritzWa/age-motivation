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
];

const Card = ({ age, name, verb, what }: MotivationCardsType) => (
  <div className="pb-4 text-gray-600 dark:text-gray-400 max-h-80">
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
    <div className="">
      {cards.map((c) => (
        <Card {...c} />
      ))}
    </div>
  );
}

export default MotivationCards;
