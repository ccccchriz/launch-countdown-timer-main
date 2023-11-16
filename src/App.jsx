import Countdown from "./components/Countdown";
import "./App.css";

export default function App() {
  // 14 days in seconds
  const countdownTime = 14 * 24 * 60 * 60;

  return (
    <>
      <h2 className="page__title">WE'RE LAUNCHING SOON</h2>
      <Countdown countdownTime={countdownTime} />
    </>
  );
}
