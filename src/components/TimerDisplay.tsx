import React from "react";
import { useTimer } from "./TimerContext";
import { formatTime } from "@/utils/timeUtils";

const TimerDisplay: React.FC = () => {
  const { timeLeft } = useTimer();
  return (
    <div className="text-xl font-mono text-primary glow-text">
      TIME REMAINING: {formatTime(timeLeft)}
    </div>
  );
};

export default TimerDisplay;
