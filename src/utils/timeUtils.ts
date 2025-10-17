/**
 * Formats time from seconds to MM:SS format
 * @param seconds - Time in seconds
 * @returns Formatted time string in MM:SS format
 */
export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
};

/**
 * Calculates elapsed time from total duration and remaining time
 * @param totalDuration - Total game duration in seconds
 * @param timeLeft - Remaining time in seconds
 * @returns Formatted elapsed time string in MM:SS format
 */
export const getElapsedTime = (totalDuration: number, timeLeft: number): string => {
  const elapsed = totalDuration - timeLeft;
  return formatTime(elapsed);
};

/**
 * Gets the total game duration (45 minutes in seconds)
 */
export const GAME_DURATION = 45 * 60; // 45 minutes in seconds