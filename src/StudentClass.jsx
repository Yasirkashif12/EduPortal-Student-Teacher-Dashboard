const Classes = [
  {
    id: 1,
    name: "Class 1",
    subjects: [
      {
        id: 1,
        title: "Math",
        assignments: [
          { id: 101, title: "Assignment 1: Numbers", duedate: "2025-08-08", status: "pending" },
          { id: 102, title: "Assignment 2: Addition", duedate: "2025-08-09", status: "pending" },
          { id: 103, title: "Assignment 3: Subtraction", duedate: "2025-08-10", status: "pending" },
        ],
        quizzes: [
          { id: 201, title: "Quiz 1: Numbers", duedate: "2025-08-08", status: "pending" },
          { id: 202, title: "Quiz 2: Addition", duedate: "2025-08-09", status: "pending" },
          { id: 203, title: "Quiz 3: Subtraction", duedate: "2025-08-10", status: "pending" },
        ],
      },
      {
        id: 2,
        title: "Science",
        assignments: [
          { id: 104, title: "Assignment 1: Plants", duedate: "2025-08-08", status: "pending" },
          { id: 105, title: "Assignment 2: Animals", duedate: "2025-08-09", status: "pending" },
          { id: 106, title: "Assignment 3: Water Cycle", duedate: "2025-08-10", status: "pending" },
        ],
        quizzes: [
          { id: 204, title: "Quiz 1: Plants", duedate: "2025-08-08", status: "pending" },
          { id: 205, title: "Quiz 2: Animals", duedate: "2025-08-09", status: "pending" },
          { id: 206, title: "Quiz 3: Water Cycle", duedate: "2025-08-10", status: "pending" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Class 2",
    subjects: [
      {
        id: 3,
        title: "Math",
        assignments: [
          { id: 107, title: "Assignment 1: Multiplication", duedate: "2025-08-08", status: "pending" },
          { id: 108, title: "Assignment 2: Division", duedate: "2025-08-09", status: "pending" },
          { id: 109, title: "Assignment 3: Fractions", duedate: "2025-08-10", status: "pending" },
        ],
        quizzes: [
          { id: 207, title: "Quiz 1: Multiplication", duedate: "2025-08-08", status: "pending" },
          { id: 208, title: "Quiz 2: Division", duedate: "2025-08-09", status: "pending" },
          { id: 209, title: "Quiz 3: Fractions", duedate: "2025-08-10", status: "pending" },
        ],
      },
      {
        id: 4,
        title: "Science",
        assignments: [
          { id: 110, title: "Assignment 1: Rocks", duedate: "2025-08-08", status: "pending" },
          { id: 111, title: "Assignment 2: Soil", duedate: "2025-08-09", status: "pending" },
          { id: 112, title: "Assignment 3: Air", duedate: "2025-08-10", status: "pending" },
        ],
        quizzes: [
          { id: 210, title: "Quiz 1: Rocks", duedate: "2025-08-08", status: "pending" },
          { id: 211, title: "Quiz 2: Soil", duedate: "2025-08-09", status: "pending" },
          { id: 212, title: "Quiz 3: Air", duedate: "2025-08-10", status: "pending" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Class 3",
    subjects: [
      {
        id: 5,
        title: "Math",
        assignments: [
          { id: 113, title: "Assignment 1: Decimals", duedate: "2025-08-08", status: "pending" },
          { id: 114, title: "Assignment 2: Percentages", duedate: "2025-08-09", status: "pending" },
          { id: 115, title: "Assignment 3: Measurement", duedate: "2025-08-10", status: "pending" },
        ],
        quizzes: [
          { id: 213, title: "Quiz 1: Decimals", duedate: "2025-08-08", status: "pending" },
          { id: 214, title: "Quiz 2: Percentages", duedate: "2025-08-09", status: "pending" },
          { id: 215, title: "Quiz 3: Measurement", duedate: "2025-08-10", status: "pending" },
        ],
      },
      {
        id: 6,
        title: "Science",
        assignments: [
          { id: 116, title: "Assignment 1: States of Matter", duedate: "2025-08-08", status: "pending" },
          { id: 117, title: "Assignment 2: Energy", duedate: "2025-08-09", status: "pending" },
          { id: 118, title: "Assignment 3: Force", duedate: "2025-08-10", status: "pending" },
        ],
        quizzes: [
          { id: 216, title: "Quiz 1: States of Matter", duedate: "2025-08-08", status: "pending" },
          { id: 217, title: "Quiz 2: Energy", duedate: "2025-08-09", status: "pending" },
          { id: 218, title: "Quiz 3: Force", duedate: "2025-08-10", status: "pending" },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Class 4",
    subjects: [
      {
        id: 7,
        title: "Math",
        assignments: [
          { id: 119, title: "Assignment 1: Algebra Basics", duedate: "2025-08-08", status: "pending" },
          { id: 120, title: "Assignment 2: Geometry Shapes", duedate: "2025-08-09", status: "pending" },
          { id: 121, title: "Assignment 3: Symmetry", duedate: "2025-08-10", status: "pending" },
        ],
        quizzes: [
          { id: 219, title: "Quiz 1: Algebra Basics", duedate: "2025-08-08", status: "pending" },
          { id: 220, title: "Quiz 2: Geometry Shapes", duedate: "2025-08-09", status: "pending" },
          { id: 221, title: "Quiz 3: Symmetry", duedate: "2025-08-10", status: "pending" },
        ],
      },
      {
        id: 8,
        title: "Science",
        assignments: [
          { id: 122, title: "Assignment 1: Solar System", duedate: "2025-08-08", status: "pending" },
          { id: 123, title: "Assignment 2: Seasons", duedate: "2025-08-09", status: "pending" },
          { id: 124, title: "Assignment 3: Light", duedate: "2025-08-10", status: "pending" },
        ],
        quizzes: [
          { id: 222, title: "Quiz 1: Solar System", duedate: "2025-08-08", status: "pending" },
          { id: 223, title: "Quiz 2: Seasons", duedate: "2025-08-09", status: "pending" },
          { id: 224, title: "Quiz 3: Light", duedate: "2025-08-10", status: "pending" },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Class 5",
    subjects: [
      {
        id: 9,
        title: "Math",
        assignments: [
          { id: 125, title: "Assignment 1: Advanced Algebra", duedate: "2025-08-08", status: "pending" },
          { id: 126, title: "Assignment 2: Area & Perimeter", duedate: "2025-08-09", status: "pending" },
          { id: 127, title: "Assignment 3: Volume", duedate: "2025-08-10", status: "pending" },
        ],
        quizzes: [
          { id: 225, title: "Quiz 1: Advanced Algebra", duedate: "2025-08-08", status: "pending" },
          { id: 226, title: "Quiz 2: Area & Perimeter", duedate: "2025-08-09", status: "pending" },
          { id: 227, title: "Quiz 3: Volume", duedate: "2025-08-10", status: "pending" },
        ],
      },
      {
        id: 10,
        title: "Science",
        assignments: [
          { id: 128, title: "Assignment 1: Human Body", duedate: "2025-08-08", status: "pending" },
          { id: 129, title: "Assignment 2: Nervous System", duedate: "2025-08-09", status: "pending" },
          { id: 130, title: "Assignment 3: Circulatory System", duedate: "2025-08-10", status: "pending" },
        ],
        quizzes: [
          { id: 228, title: "Quiz 1: Human Body", duedate: "2025-08-08", status: "pending" },
          { id: 229, title: "Quiz 2: Nervous System", duedate: "2025-08-09", status: "pending" },
          { id: 230, title: "Quiz 3: Circulatory System", duedate: "2025-08-10", status: "pending" },
        ],
      },
    ],
  },
  
];
export default Classes
