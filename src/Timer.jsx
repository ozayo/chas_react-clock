import React, { useState, useEffect } from "react";
import { FaPause, FaPlay, FaRedoAlt } from "react-icons/fa";
import "./Timer.css";

const Timer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused && seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds, isPaused]);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleReset = () => {
    setSeconds(initialSeconds);
    setIsPaused(false);
  };

  return (
    <div>
      <p className="timer">
        {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? "0" : ""}
        {seconds % 60}
      </p>
      <button onClick={handlePause} disabled={isPaused}>
        <FaPause />
      </button>
      <button onClick={handleResume} disabled={!isPaused}>
        <FaPlay />
      </button>
      <button onClick={handleReset}>
        <FaRedoAlt />
      </button>
    </div>
  );
};

export default Timer;
