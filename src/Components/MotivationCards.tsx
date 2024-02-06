// import KanyeWestColledgeDropout from "../Images/KanyeWestColledgeDropout.jpg";
// import SteveJobsPlayingGame from "../Images/SteveJobsPlayingGame.png";

type MotivationCardsType = {
  age: number;
  name: string;
  nameDoesEvent: string;
  //   exactDate: string;
  //   image: string;
};

const cards: MotivationCardsType[] = [
  {
    age: 25,
    name: "Steve Jobs",
    nameDoesEvent: "takes apple public",
    // exactDate: "Aug. 2, 2018",
    // image: SteveJobsPlayingGame,
  },
  {
    age: 26,
    name: "Kanye West",
    nameDoesEvent: "releases College Dropout",
    // image: KanyeWestColledgeDropout,
  },
];

const Card = ({ age, name, nameDoesEvent }: MotivationCardsType) => (
  <div className="pb-4 max-h-80">
    <div className="pb-2">
      {name} {nameDoesEvent} at age {age}
    </div>
    {/* <img src={image} alt={name} className="object-contain w-full" /> */}
  </div>
);

function MotivationCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((c) => (
        <Card {...c} />
      ))}
    </div>
  );
}

export default MotivationCards;
