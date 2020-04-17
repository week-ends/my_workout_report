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
        code: "pullup",
        name: "Pull Up",
        setList: [
          { set: 1, reps: 8, weight: 0 },
          { set: 2, reps: 8, weight: 0 },
          { set: 3, reps: 12, weight: 40 },
          { set: 4, reps: 12, weight: 40 },
          { set: 5, reps: 12, weight: 40 },
        ],
      },
      {
        code: "sidelateralraise",
        name: "Side Lateral Raise",
        setList: [
          { set: 1, reps: 12, weight: 10 },
          { set: 2, reps: 12, weight: 10 },
          { set: 3, reps: 12, weight: 8 },
          { set: 4, reps: 12, weight: 8 },
          { set: 5, reps: 12, weight: 8 },
          { set: 6, reps: 12, weight: 6 },
          { set: 7, reps: 12, weight: 6 },
          { set: 8, reps: 20, weight: 3 },
        ],
      },
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
