import React, { useEffect, useState } from "react";

interface CountdownProps {
  endDate: string; // Formato: "DD/MM/YYYY HH:mm"
}

const Countdown: React.FC<CountdownProps> = ({ endDate }) => {
  const formatNumber = (value: number) =>
    value < 10 ? `0${value}` : `${value}`;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDateTime = new Date(
        endDate.replace(
          /(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})/,
          "$3-$2-$1T$4:$5:00Z"
        )
      );
      const difference = endDateTime.getTime() - new Date().getTime();

      if (difference <= 0) {
        // Se a data de término já passou, retornamos zeros
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft());
    };

    const timer = setInterval(updateCountdown, 1000);

    // Certifique-se de limpar o intervalo ao desmontar o componente
    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <span>
      {timeLeft.days}D : {formatNumber(timeLeft.hours)} :{" "}
      {formatNumber(timeLeft.minutes)} : {formatNumber(timeLeft.seconds)}
    </span>
  );
};

export default Countdown;
