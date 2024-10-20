import React, { createContext, useState } from "react";

export const FitnessItems = createContext();

export default function FitnessContextProvider({ children }) {
  const [completed, setCompleted] = useState([]);
  const [workout, setWorkout] = useState(15);
  const [calories, setCalories] = useState(700);
  const [minutes, setMinutes] = useState(45);
  return (
    <FitnessItems.Provider
      value={{
        completed,
        setCompleted,
        workout,
        setWorkout,
        calories,
        setCalories,
        minutes,
        setMinutes,
      }}
    >
      {children}
    </FitnessItems.Provider>
  );
}
