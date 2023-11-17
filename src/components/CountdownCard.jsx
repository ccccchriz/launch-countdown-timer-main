import "./CountdownCard.css";

const CountdownCard = ({ time, title }) => {
  if (time < 10) time = "0" + time;

  return (
    <div className="countdowncard">
      <div className="countdowncard__number">
        <div className="countdowncard__top"></div>
        <div className="countdowncard__circle countdowncard__circle-left"></div>
        <div className="countdowncard__circle countdowncard__circle-right"></div>
        <span>{time}</span>
      </div>
      <div className="countdowncard__text">{title}</div>
    </div>
  );
};

export default CountdownCard;
