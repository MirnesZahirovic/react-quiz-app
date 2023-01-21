const questions = [
  {
    id: "q1",
    question: "In which town is the Royal Shakespeare Theatre Situated?",
    answers: [
      {
        id: "a1",
        answer: "Ashton-under-Lyne",
        correct: false,
      },
      {
        id: "a2",
        answer: "Berwick-upon-Tweed",
        correct: false,
      },
      {
        id: "a3",
        answer: "Newcastle-upon-Tyne",
        correct: false,
      },
      {
        id: "a4",
        answer: "Stratford-upon-Avon",
        correct: true,
      },
    ],
  },
  {
    id: "q2",
    question:
      "When we unburden ourselves of worry by talking about it, we are said to 'get it off our...' what?",
    answers: [
      {
        id: "a1",
        answer: "Head",
        correct: false,
      },
      {
        id: "a2",
        answer: "Chest",
        correct: true,
      },
      {
        id: "a3",
        answer: "Stomach",
        correct: false,
      },
      {
        id: "a4",
        answer: "Lap",
        correct: false,
      },
    ],
  },
  {
    id: "q3",
    question: "What is butterscotch?",
    answers: [
      {
        id: "a1",
        answer: "Shortbread",
        correct: false,
      },
      {
        id: "a2",
        answer: "Pavement game",
        correct: false,
      },
      {
        id: "a3",
        answer: "Garden flower",
        correct: false,
      },
      {
        id: "a4",
        answer: "Brittle toffee",
        correct: true,
      },
    ],
  },
  {
    id: "q4",
    question:
      "Which piece of kit do you normally associate with British sportsman Mike Atherton?",
    answers: [
      {
        id: "a1",
        answer: "Cricket bat",
        correct: true,
      },
      {
        id: "a2",
        answer: "Golf club",
        correct: false,
      },
      {
        id: "a3",
        answer: "Hockey stick",
        correct: false,
      },
      {
        id: "a4",
        answer: "Squash racquet",
        correct: false,
      },
    ],
  },
  {
    id: "q5",
    question:
      "What are the first names of the Olympic medal winners Torvill and Dean?",
    answers: [
      {
        id: "a1",
        answer: "Elizabeth and Michael",
        correct: false,
      },
      {
        id: "a2",
        answer: "Hilary and Timothy",
        correct: false,
      },
      {
        id: "a3",
        answer: "Jayne and Christopher",
        correct: true,
      },
      {
        id: "a4",
        answer: "Joanne and Nicholas",
        correct: false,
      },
    ],
  },
  {
    id: "q6",
    question: "In which country is the city and naval base of Cadiz?",
    answers: [
      {
        id: "a1",
        answer: "Spain",
        correct: true,
      },
      {
        id: "a2",
        answer: "Hungary",
        correct: false,
      },
      {
        id: "a3",
        answer: "Italy",
        correct: false,
      },
      {
        id: "a4",
        answer: "Tunisia",
        correct: false,
      },
    ],
  },
  {
    id: "q7",
    question: "What is the nickname of Southampton Football Club?",
    answers: [
      {
        id: "a1",
        answer: "Devils",
        correct: false,
      },
      {
        id: "a2",
        answer: "Angels",
        correct: false,
      },
      {
        id: "a3",
        answer: "Saints",
        correct: true,
      },
      {
        id: "a4",
        answer: "Sinners",
        correct: false,
      },
    ],
  },
  {
    id: "q8",
    question: "Lesbanon is a country on which continent?",
    answers: [
      {
        id: "a1",
        answer: "Africa",
        correct: false,
      },
      {
        id: "a2",
        answer: "Asia",
        correct: true,
      },
      {
        id: "a3",
        answer: "South America",
        correct: false,
      },
      {
        id: "a4",
        answer: "Europe",
        correct: false,
      },
    ],
  },
  {
    id: "q9",
    question: "Which of these is a novel by Oliver Goldsmith?",
    answers: [
      {
        id: "a1",
        answer: "The Pastor of York",
        correct: false,
      },
      {
        id: "a2",
        answer: "The Bishop of Barnsley",
        correct: false,
      },
      {
        id: "a3",
        answer: "The Curate of Sheffield",
        correct: false,
      },
      {
        id: "a4",
        answer: "The Vicar of Wakefield",
        correct: true,
      },
    ],
  },
  {
    id: "q10",
    question:
      "Which of these US states does not have a coastline on the gulf of Mexico?",
    answers: [
      {
        id: "a1",
        answer: "Florida",
        correct: false,
      },
      {
        id: "a2",
        answer: "Mississippi",
        correct: false,
      },
      {
        id: "a3",
        answer: "New Mexico",
        correct: true,
      },
      {
        id: "a4",
        answer: "Texas",
        correct: false,
      },
    ],
  },
  {
    id: "q11",
    question: "What is a 'siskin'?",
    answers: [
      {
        id: "a1",
        answer: "Seed pod",
        correct: false,
      },
      {
        id: "a2",
        answer: "Barrel",
        correct: false,
      },
      {
        id: "a3",
        answer: "Bird",
        correct: true,
      },
      {
        id: "a4",
        answer: "Leather pouch",
        correct: false,
      },
    ],
  },
  {
    id: "q12",
    question: "In Greek mythology, what was left in Pandora's box?",
    answers: [
      {
        id: "a1",
        answer: "Faith",
        correct: false,
      },
      {
        id: "a2",
        answer: "Hope",
        correct: true,
      },
      {
        id: "a3",
        answer: "Charity",
        correct: false,
      },
      {
        id: "a4",
        answer: "Justice",
        correct: false,
      },
    ],
  },
  {
    id: "q13",
    question: "Who founded the Jesuits, also known as the Society of Jesus?",
    answers: [
      {
        id: "a1",
        answer: "Martin Luther",
        correct: false,
      },
      {
        id: "a2",
        answer: "John Calvin",
        correct: false,
      },
      {
        id: "a3",
        answer: "Ignatius de Loyola",
        correct: true,
      },
      {
        id: "a4",
        answer: "Thomas Aquinas",
        correct: false,
      },
    ],
  },
  {
    id: "q14",
    question: "Who is the patron saint of Spain?",
    answers: [
      {
        id: "a1",
        answer: "Saint James",
        correct: true,
      },
      {
        id: "a2",
        answer: "Saint John",
        correct: false,
      },
      {
        id: "a3",
        answer: "Saint Benedict",
        correct: false,
      },
      {
        id: "a4",
        answer: "Saint Peter",
        correct: false,
      },
    ],
  },
  {
    id: "q15",
    question:
      "In 1912, former US President Theodore Roosevelt was a candidate for which political party?",
    answers: [
      {
        id: "a1",
        answer: "Bull Moose",
        correct: false,
      },
      {
        id: "a2",
        answer: "Bull Dog",
        correct: false,
      },
      {
        id: "a3",
        answer: "Bull Elephant",
        correct: false,
      },
      {
        id: "a4",
        answer: "Bull Frog",
        correct: false,
      },
    ],
  },
];

export default questions;
