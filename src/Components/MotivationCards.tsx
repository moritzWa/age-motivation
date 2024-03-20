import { MotivationCardsType } from "./successfulPeopleData";

interface MotivationCardsProps {
  setHoveredCard: (
    newState: { eventDate: string; birthday: string } | null
  ) => void;
  allRandomCards: MotivationCardsType[];
}

interface CardProps extends MotivationCardsType {
  setHoveredCard: (
    newState: { eventDate: string; birthday: string } | null
  ) => void;
}

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

const MotivationCards = ({
  setHoveredCard,
  allRandomCards,
}: MotivationCardsProps) => {
  const cardsSortedByAge = allRandomCards.sort(
    (a, b) =>
      new Date(a.eventDate).getTime() -
      new Date(a.birthday).getTime() -
      (new Date(b.eventDate).getTime() - new Date(b.birthday).getTime())
  );

  return (
    <div className="">
      {cardsSortedByAge.map((c) => (
        <Card {...c} setHoveredCard={setHoveredCard} />
      ))}
    </div>
  );
};

export default MotivationCards;
