import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = ({ city, timeZone }) => {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
    ampm: "AM",
  });

  const [isDaytime, setIsDaytime] = useState(true); // default daylight

  useEffect(() => {
    const updateClock = () => {
      const currentDateTime = new Date(
        new Date().toLocaleString("en-US", { timeZone })
      );
      const hours = currentDateTime.getHours();
      const minutes = currentDateTime.getMinutes();
      const seconds = currentDateTime.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";

      // check day or night
      const isDaytimeNow = hours >= 6 && hours < 18;

      if (isDaytimeNow !== isDaytime) {
        setIsDaytime(isDaytimeNow);
      }

      setTime({
        hours: hours % 12 || 12, // 0 saati 12 olarak göster
        minutes,
        seconds,
        ampm,
      });
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, [isDaytime, timeZone]);

  return (
    <div className={`clock ${isDaytime ? "daytime" : "nighttime"}`}>
      <h2>{city}</h2>
      <div className="timezone">({timeZone})</div>

      <div className="timearea">
        <span className="hours">{time.hours}</span>:
        <span className="minutes">
          {time.minutes < 10 ? "0" : ""}
          {time.minutes}
        </span>
        :
        <span className="seconds">
          {time.seconds < 10 ? "0" : ""}
          {time.seconds}
        </span>{" "}
      </div>
      <span className="ampm">{time.ampm}</span>
    </div>
  );
};

export default Clock;
