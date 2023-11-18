import { useEffect, useState } from "react";
import "./Countdown.css";
import CountdownCard from "./CountdownCard";

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
      <CountdownCard time={days} title="DAYS" />
      <CountdownCard time={hours} title="HOURS" />
      <CountdownCard time={minutes} title="MINUTES" />
      <CountdownCard time={seconds} title="SECONDS" />
    </section>
  );
};

export default Countdown;
