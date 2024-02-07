type MotivationCardsType = {
  age?: number; // note this is unnecessary, but keeping it for code readability
  name: string;
  verb: string;
  what: string;
  birthday: string;
  eventDate: string;
};

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
    age: 21,
    name: "Palmer Luckey",
    verb: "sells",
    what: "Oculus VR to Facebook ($2B)",
    birthday: "1992-09-19",
    eventDate: "2014-03-25",
  },
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
  {
    age: 32,
    name: "David Deutsch",
    verb: "publishes",
    what: "seminal work on Quantum Theory",
    birthday: "1953-05-18",
    eventDate: "1985-07-08",
  },
  {
    name: "Blaise Pascal",
    verb: "invents",
    what: "the mechanical calculator",
    birthday: "1623-06-19",
    eventDate: "1642-01-01",
  },
  {
    name: "Jeff Bezos",
    verb: "founds",
    what: "Amazon",
    birthday: "1964-01-12",
    eventDate: "1994-07-05",
  },
  {
    name: "Jeff Bezos",
    verb: "scales",
    what: "Amazon to $148M in ARR",
    birthday: "1964-01-12",
    eventDate: "1997-01-01",
  },
  {
    name: "Pierre Omidyar",
    verb: "launches",
    what: "eBay",
    birthday: "1967-06-21",
    eventDate: "1995-09-03",
  },
  {
    name: "Thomas Edison",
    verb: "invents",
    what: "the phonograph",
    birthday: "1847-02-11",
    eventDate: "1878-02-19",
  },
  {
    name: "Marie Curie",
    verb: "discovers",
    what: "Radium",
    birthday: "1867-11-07",
    eventDate: "1898-12-21",
  },
  {
    name: "Ayn Rand",
    verb: "publishes",
    what: "The Fountainhead",
    birthday: "1905-02-02",
    eventDate: "1957-10-09",
  },
  {
    name: "Matt Damon",
    verb: "writes and starrs in",
    what: "Good Will Hunting",
    birthday: "1970-10-08",
    eventDate: "1997-12-05",
  },
  {
    name: "Ada Lovelace",
    verb: "writes",
    what: "the first computer program",
    birthday: "1815-12-10",
    eventDate: "1843-01-01",
  },
  {
    name: "Taylor Wilson",
    verb: "builds",
    what: "a nuclear fusion reactor",
    birthday: "1994-05-07",
    eventDate: "2008-03-01",
  },
  {
    name: "Patrick Collison",
    verb: "sells",
    what: "Auctomatic (first company) for $5 million",
    birthday: "1988-09-09",
    eventDate: "2008-03-01",
  },
  {
    name: "Elon Musk",
    verb: "sells",
    what: "Blastar (first computer game)",
    birthday: "1971-06-28",
    eventDate: "1983-01-01",
  },
  {
    name: "Srinivasa Ramanujan",
    verb: "independently developed and investigated",
    what: "Bernoulli numbers",
    birthday: "1887-12-22",
    eventDate: "1911-12-01",
  },
  {
    name: "Rosalind Franklin",
    verb: "co-discovers",
    what: "the helix structure of DNA",
    birthday: "1920-07-25",
    eventDate: "1953-04-25",
  },
  {
    name: "Markus Persson",
    verb: "creates",
    what: "Minecraft",
    birthday: "1979-06-01",
    eventDate: "2009-05-17",
  },
  {
    name: "Linus Torvalds",
    verb: "creates",
    what: "Linux kernel",
    birthday: "1969-12-28",
    eventDate: "1991-09-17",
  },
  {
    name: "James Cameron",
    verb: "directs",
    what: "Titanic",
    birthday: "1954-08-16",
    eventDate: "1997-12-19",
  },
  {
    name: "Larry Ellison",
    verb: "co-founds",
    what: "Oracle",
    birthday: "1944-08-17",
    eventDate: "1977-06-16",
  },
  {
    name: "Mark Cuban",
    verb: "sells",
    what: "Broadcast.com to Yahoo ($5.7B)",
    birthday: "1958-07-31",
    eventDate: "1999-04-01",
  },
  {
    name: "Michael Dell",
    verb: "founds",
    what: "Dell",
    birthday: "1965-02-23",
    eventDate: "1984-05-03",
  },
];

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
      className="pb-4 text-base text-gray-600 cursor-pointer hover:underline decoration-red-200 dark:text-gray-300 max-h-80 hover:underline-offset-2"
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
