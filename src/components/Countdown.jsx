import { useEffect, useState } from "react";
import "./Countdown.css";

const Countdown = ({ countdownTime }) => {
  const [time, setTime] = useState(countdownTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((value) => value - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  let seconds = time;
  const days = Math.floor(seconds / (24 * 60 * 60));
  seconds %= 24 * 60 * 60;
  const hours = Math.floor(seconds / (60 * 60));
  seconds %= 60 * 60;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  return (
    <section className="countdown">
      <div className="countdown__number countdown__number--days">
        {days < 10 ? `0${days}` : days}
      </div>
      <div className="countdown__number countdown__number--hours">{hours}</div>
      <div className="countdown__number countdown__number--minutes">
        {minutes}
      </div>
      <div className="countdown__number countdown__number--seconds">
        {seconds}
      </div>
      <div className="countdown__text">DAYS</div>
      <div className="countdown__text">HOURS</div>
      <div className="countdown__text">MINUTES</div>
      <div className="countdown__text">SECONDS</div>
    </section>
  );
};

export default Countdown;
