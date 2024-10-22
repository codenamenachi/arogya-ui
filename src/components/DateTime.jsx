import React from "react";
import { useState, useEffect } from "react";

export const useDate = () => {
  const locale = "en";
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })} ${today.getFullYear()}\n\n`;

  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
  } `;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return {
    date,
    time,
    wish,
  };
};

export const CurrentDateTimeWish = () => {
  return (
    <>
      <span className="landing-header-date">{useDate().date}</span>
      <span className="landing-header-time">{useDate().time}</span>
      <span className="landing-header-wish">{useDate().wish}</span>
    </>
  );
};
