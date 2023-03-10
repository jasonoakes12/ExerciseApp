import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise";

const exercises = [
  {
    name: "Pushups",
    type: "repetition",
    component: <RepetitionExercise name="Pushups" />
  },
  {
    name: "Plank",
    type: "duration",
    component: <DurationExercise name="Plank" />
  },
  {
    name: "Squats",
    type: "repetition",
    component: <RepetitionExercise name="Squats" />
  },
  {
    name: "Running",
    type: "duration",
    component: <DurationExercise name="Running" />
  },
  {
    name: "Laps",
    type: "duration",
    component: <RunningExercise name="Laps" />
  },
];

function App() {
  const [currentExercise, setCurrentExercise] = useState(null);

  const handleExerciseClick = (exercise) => {
    setCurrentExercise(exercise.component);
  };

  const renderExerciseMenu = () => {
    return exercises.map((exercise, index) => {
      return (
        <button key={index} onClick={() => handleExerciseClick(exercise)}>
          {exercise.name}
        </button>
      );
    });
  };

  return (
    <div>
      <h1>Lab 6 Exercise App</h1>
      <div>
        {currentExercise ? (
          <div>

            {currentExercise}
          </div>
        ) : (
          <div>
            <h2>Choose an exercise!</h2>
            {renderExerciseMenu()}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;