import { useState } from "react"
import { useEffect } from "react";
import { formatDistanceStrict, parseISO, differenceInSeconds, differenceInMilliseconds } from 'date-fns';



export default function CountdownTimer()
{
    const targetDate = parseISO('2017-03-31T10:27:00Z');

    const calculateTimeLeft = () => {
    const currentDate = new Date();
    const difference = differenceInSeconds(currentDate, targetDate);

    if (difference <= 0) {
      return {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const years = Math.floor(difference / (60 * 60 * 24 * 30 * 12));
    const months = Math.floor((difference % (60 * 60 * 24 * 30 * 12)) / (60 * 60 * 24 * 30));
    const days = Math.floor((difference % (60 * 60 * 24 * 30)) / (60 * 60 * 24));
    const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((difference % (60 * 60)) / 60);
    const seconds = difference % 60;

    return {
      years,
      months,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

  }, []);

    return (
        <div className="container">
        {`${timeLeft.years} years, ${timeLeft.months} months, ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds`}
        </div>
    )
}