const today = new Date();
const dateString = today.toLocaleDateString("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

export default [
  {
    key: "1",
    createdAt: dateString,
    dayName: dayName,
    workoutList: [
      {
        code: "squat",
        name: "Squat",
        setList: [
          { set: 1, weight: 20, reps: 20 },
          { set: 2, weight: 40, reps: 6 },
          { set: 3, weight: 60, reps: 2 },
          { set: 4, weight: 75, reps: 5 },
          { set: 5, weight: 80, reps: 5 },
          { set: 6, weight: 85, reps: 5 },
          { set: 7, weight: 85, reps: 5 },
        ],
      },
      {
        code: "benchpress",
        name: "BenchPress",
        setList: [
          { set: 1, weight: 20, reps: 20 },
          { set: 2, weight: 40, reps: 6 },
          { set: 3, weight: 60, reps: 2 },
          { set: 4, weight: 75, reps: 5 },
        ],
      },
      {
        code: "deadlift",
        name: "Deadlift",
        setList: [
          { set: 1, weight: 20, reps: 20 },
          { set: 2, weight: 40, reps: 6 },
          { set: 3, weight: 60, reps: 2 },
          { set: 4, weight: 75, reps: 5 },
          { set: 5, weight: 80, reps: 5 },
          { set: 6, weight: 85, reps: 5 },
          { set: 7, weight: 85, reps: 5 },
        ],
      },
    ],
  },
  {
    key: "2",
    createdAt: dateString,
    dayName: dayName,
    workoutList: [
      {
        code: "ohp",
        name: "OverHeadPress",
        setList: [
          { set: 1, weight: 20, reps: 20 },
          { set: 2, weight: 40, reps: 6 },
          { set: 3, weight: 60, reps: 2 },
          { set: 4, weight: 75, reps: 5 },
        ],
      },
      {
        code: "pullup",
        name: "PullUp",
        setList: [
          { set: 1, weight: 20, reps: 20 },
          { set: 2, weight: 40, reps: 6 },
          { set: 3, weight: 60, reps: 2 },
          { set: 4, weight: 75, reps: 5 },
        ],
      },
      {
        code: "latpulldown",
        name: "LatPullDown",
        setList: [
          { set: 1, weight: 20, reps: 20 },
          { set: 2, weight: 40, reps: 6 },
          { set: 3, weight: 60, reps: 2 },
        ],
      },
    ],
  },
];
