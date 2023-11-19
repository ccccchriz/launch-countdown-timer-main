import { useRef } from "react";
import "./CountdownCard.css";

const CountdownCard = ({ time, title }) => {
  let prev = useRef(time);
  const animate = prev.current != time;

  prev.current = time;

  let prevNumber = 0;

  if (time == -1) prevNumber = 58;
  else if (time == 59) prevNumber = 0;
  else prevNumber = time + 1;

  if (title == "HOURS" && time == 23) prevNumber = "0";

  if (time < 10) time = "0" + time;
  if (prevNumber < 10) prevNumber = "0" + prevNumber;

  if (animate) {
    return (
      <div className="countdowncard" key={time}>
        <div className="countdown-container">
          <div className="countdowncard__number rotateBackward">
            <div className="countdowncard__top"></div>
            <div className="countdowncard__circle countdowncard__circle-left"></div>
            <div className="countdowncard__circle countdowncard__circle-right"></div>
            <span>{time}</span>
          </div>
          <div className="countdowncard__number rotateForward">
            <div className="countdowncard__top"></div>
            <div className="countdowncard__circle countdowncard__circle-left"></div>
            <div className="countdowncard__circle countdowncard__circle-right"></div>
            <span>{prevNumber}</span>
          </div>
          <div className="countdowncard__number">
            <div className="countdowncard__top"></div>
            <div className="countdowncard__circle countdowncard__circle-left"></div>
            <div className="countdowncard__circle countdowncard__circle-right"></div>
            <span>{prevNumber}</span>
          </div>
          <div className="countdowncard__number">
            <div className="countdowncard__top"></div>
            <div className="countdowncard__circle countdowncard__circle-left"></div>
            <div className="countdowncard__circle countdowncard__circle-right"></div>
            <span>{time}</span>
          </div>
          <div className="countdowncard__number countdowncard__number--take-space">
            <span></span>
          </div>
        </div>

        <div className="countdowncard__text">{title}</div>
      </div>
    );
  } else {
    return (
      <div className="countdowncard" key={time}>
        <div className="countdown-container">
          <div className="countdowncard__number">
            <div className="countdowncard__top"></div>
            <div className="countdowncard__circle countdowncard__circle-left"></div>
            <div className="countdowncard__circle countdowncard__circle-right"></div>
            <span>{time}</span>
          </div>
          <div className="countdowncard__number countdowncard__number--take-space">
            <span></span>
          </div>
        </div>
        <div className="countdowncard__text">{title}</div>
      </div>
    );
  }
};

export default CountdownCard;
