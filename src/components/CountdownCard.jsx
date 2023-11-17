import "./CountdownCard.css";

const CountdownCard = ({ time, title }) => {
  if (time < 10) time = "0" + time;

  return (
    <div className="countdowncard">
      <div className="countdowncard__number">
        <div className="top"></div>
        <div className="circle circle-left"></div>
        <div className="circle circle-right"></div>
        <span>{time}</span>
      </div>
      <div className="countdowncard__text">{title}</div>
    </div>
  );
};

export default CountdownCard;
