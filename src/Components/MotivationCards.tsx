// import KanyeWestColledgeDropout from "../Images/KanyeWestColledgeDropout.jpg";
// import SteveJobsPlayingGame from "../Images/SteveJobsPlayingGame.png";

type MotivationCardsType = {
  age: number;
  name: string;
  verb: string;
  what: string;
  birthday: string;
  eventDate: string;
};

// interface MotivationCardsProps {
// setHoveredCard: React.Dispatch<React.SetStateAction<{ eventDate: string, birthday: string } | null>>;
// }

interface MotivationCardsProps {
  setHoveredCard: (
    newState: { eventDate: string; birthday: string } | null
  ) => void;
}

interface CardProps extends MotivationCardsType {
  setHoveredCard: (
    newState: { eventDate: string; birthday: string } | null
  ) => void;
}

const cards: MotivationCardsType[] = [
  {
    age: 25,
    name: "Steve Jobs",
    verb: "takes public",
    what: "Apple ($1.2B)",
    birthday: "1955-02-24",
    eventDate: "1980-12-12",
  },
  {
    age: 26,
    name: "Kanye West",
    verb: "releases",
    what: "College Dropout",
    birthday: "1977-06-08",
    eventDate: "2004-02-10",
  },
  {
    age: 19,
    name: "Mark Zuckerberg",
    verb: "launches",
    what: "Facebook",
    birthday: "1984-05-14",
    eventDate: "2004-02-04",
  },
  {
    age: 20,
    name: "Bill Gates",
    verb: "co-founds",
    what: "Microsoft",
    birthday: "1955-10-28",
    eventDate: "1975-04-04",
  },
  {
    age: 27,
    name: "Elon Musk",
    verb: "sold",
    what: "Zip2",
    birthday: "1971-06-28",
    eventDate: "1999-02-12",
  },
  {
    age: 28,
    name: "Elon Musk",
    verb: "co-founds",
    what: "X.com",
    birthday: "1971-06-28",
    eventDate: "1999-03-01",
  },
  {
    age: 25,
    name: "Larry Page and Sergey Brin",
    verb: "start",
    what: "Google",
    birthday: "1973-03-26",
    eventDate: "1998-09-04",
  },
  {
    age: 21,
    name: "Evan Spiegel",
    verb: "co-founded",
    what: "Snapchat",
    birthday: "1990-06-04",
    eventDate: "2011-07-08",
  },
  {
    age: 37,
    name: "Travis Kalanick",
    verb: "co-founds",
    what: "Uber",
    birthday: "1976-08-06",
    eventDate: "2009-03-01",
  },
  {
    age: 26,
    name: "Albert Einstein",
    verb: "publishes",
    what: "Theory of Relativity",
    birthday: "1879-03-14",
    eventDate: "1905-06-30",
  },
  {
    age: 30,
    name: "Alexander Hamilton",
    verb: "drafts",
    what: "The Federalist Papers",
    birthday: "1755-01-11",
    eventDate: "1787-10-27",
  },
  {
    age: 25,
    name: "Isaac Asimov",
    verb: "published",
    what: "Foundation",
    birthday: "1920-01-02",
    eventDate: "1951-05-01",
  },
  {
    age: 21,
    name: "Walt Disney",
    verb: "founds",
    what: "Disney",
    birthday: "1901-12-05",
    eventDate: "1923-10-16",
  },
  {
    age: 29,
    name: "George Lucas",
    verb: "starts writing",
    what: "Star Wars",
    birthday: "1944-05-14",
    eventDate: "1973-01-01",
  },
  {
    age: 23,
    name: "Daniel Ek",
    verb: "launches",
    what: "Spotify",
    birthday: "1983-02-21",
    eventDate: "2006-10-07",
  },
  {
    age: 25,
    name: "Drew Houston",
    verb: "launches",
    what: "Dropbox",
    birthday: "1983-03-04",
    eventDate: "2007-06-01",
  },
  {
    age: 26,
    name: "Brian Chesky",
    verb: "launches",
    what: "Airbnb",
    birthday: "1981-08-29",
    eventDate: "2008-08-11",
  },
  {
    age: 35,
    name: "Abraham H. Maslow",
    verb: "publishes",
    what: "A Theory of Human Motivation",
    birthday: "1908-04-01",
    eventDate: "1943-07-01",
  },
];

// sort using event.getTime() - birth.getTime();
const cardsSortedByAge = cards.sort(
  (a, b) =>
    new Date(a.eventDate).getTime() -
    new Date(a.birthday).getTime() -
    (new Date(b.eventDate).getTime() - new Date(b.birthday).getTime())
);

const Card = ({
  name,
  verb,
  what,
  eventDate,
  birthday,
  setHoveredCard,
}: CardProps) => {
  const onMouseEnter = () => {
    if (!eventDate || !birthday) return;
    setHoveredCard({ eventDate, birthday });
  };

  const onMouseLeave = () => {
    setHoveredCard(null);
  };

  const age =
    new Date(eventDate).getFullYear() - new Date(birthday).getFullYear();

  return (
    <div
      className="pb-4 text-gray-600 cursor-pointer hover:underline decoration-red-200 dark:text-gray-300 max-h-80 hover:underline-offset-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
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
};

const MotivationCards = ({ setHoveredCard }: MotivationCardsProps) => {
  return (
    <div className="h-full">
      {cardsSortedByAge.map((c) => (
        <Card {...c} setHoveredCard={setHoveredCard} />
      ))}
    </div>
  );
};

export default MotivationCards;
