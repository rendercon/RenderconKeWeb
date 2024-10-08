import { useState, useEffect } from 'react';

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function CountdownTimer() {
  // Set the date we're counting down to
  const countDownDate = new Date('October 3, 2025 08:00:00').getTime();

  // State for holding time left
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTimeLeft());

  function calculateTimeLeft(): TimeRemaining {
    const now = new Date().getTime();
    const difference = countDownDate - now;

    let timeRemaining: TimeRemaining;

    if (difference > 0) {
      timeRemaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeRemaining = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeRemaining;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timer if the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center space-x-4 text-center text-white p-4 mt-4 mb-8 mx-auto bg-purple-500 rounded-lg w-fit items-center">
      {timeLeft.days + timeLeft.hours + timeLeft.minutes + timeLeft.seconds > 0 ? (
        <>
          <div>
            <p className="text-xl font-bold">{timeLeft.days}</p>
            <p className="text-xs text-black">Days</p>
          </div>
          <div>
            <p className="text-xl font-bold">{timeLeft.hours}</p>
            <p className="text-xs text-black">Hours</p>
          </div>
          <div>
            <p className="text-xl font-bold">{timeLeft.minutes}</p>
            <p className="text-xs text-black">Minutes</p>
          </div>
          <div>
            <p className="text-xl font-bold">{timeLeft.seconds}</p>
            <p className="text-xs text-black">Seconds</p>
          </div>
        </>
      ) : (
        <p className="text-2xl font-bold">Event Ended!!</p>
      )}
    </div>
  );
}

export default CountdownTimer;
