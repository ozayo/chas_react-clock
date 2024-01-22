import "./App.css";
import Clock from "./Clock";
import Timer from "./Timer";

const App = () => {
  return (
    <>
      <section>
        <h1>City's current time</h1>
        <p>Current time and day/night conditions of some cities.</p>
        <div className="timelist">
          <Clock city="Stockholm" timeZone="Europe/Stockholm" />
          <Clock city="Tokyo" timeZone="Asia/Tokyo" />
          <Clock city="New York" timeZone="America/New_York" />
          <Clock city="Hong Kong" timeZone="Hongkong" />
          <Clock city="London" timeZone="Europe/London" />
          <Clock city="Dubai" timeZone="Asia/Dubai" />
          <Clock city="Sydney" timeZone="Australia/Sydney" />
          <Clock city="Istanbul" timeZone="Europe/Istanbul" />
        </div>
      </section>
      <section>
        <h1>Timer</h1>
        <p>Simple timer with stop-resume and restart.</p>
        <div className="timerlist">
          <div className="timerbox">
            <h3>1 min</h3>
            <Timer initialSeconds={60} />
          </div>
          <div className="timerbox">
            <h3>5 min</h3>
            <Timer initialSeconds={300} />
          </div>
          <div className="timerbox">
            <h3>10 min</h3>
            <Timer initialSeconds={600} />
          </div>
          <div className="timerbox">
            <h3>15 min</h3>
            <Timer initialSeconds={900} />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
