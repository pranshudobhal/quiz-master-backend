const allQuizzes = [
  {
    name: 'Marvel Cinematic Universe',
    playTime: 5,
    totalPoints: 50,
    totalQuestions: 5,
    description: 'Avengers, assemble!',
    imageURL: 'https://www.denofgeek.com/wp-content/uploads/2019/04/3515432-endgamedek-1.jpg?resize=768%2C432',
    questions: [
      {
        question: 'What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?',
        points: 10,
        negativePoints: 5,
        options: [
          {
            text: '2005',
            isRight: false,
          },
          {
            text: '2008',
            isRight: true,
          },
          {
            text: '2010',
            isRight: false,
          },
          {
            text: '2012',
            isRight: false,
          },
        ],
      },
      {
        question: 'The Flerkens are a race of extremely dangerous aliens that resembles what?',
        points: 10,
        negativePoints: 5,
        options: [
          {
            text: 'Cats',
            isRight: true,
          },
          {
            text: 'Ducks',
            isRight: false,
          },
          {
            text: 'Reptiles',
            isRight: false,
          },
          {
            text: 'Raccoons',
            isRight: false,
          },
        ],
      },
      {
        question: 'What is the alien race Loki sends to invade Earth in The Avengers?',
        points: 10,
        negativePoints: 5,
        options: [
          {
            text: 'The Chitauri',
            isRight: true,
          },
          {
            text: 'The Skrulls',
            isRight: false,
          },
          {
            text: 'The Kree',
            isRight: false,
          },
          {
            text: 'The Flerkens',
            isRight: false,
          },
        ],
      },
      {
        question: 'What fake name does Natasha use when she first meets Tony?',
        points: 10,
        negativePoints: 5,
        options: [
          {
            text: 'Natalie Rushman',
            isRight: true,
          },
          {
            text: 'Natalia Romanoff',
            isRight: false,
          },
          {
            text: 'Nicole Rohan',
            isRight: false,
          },
          {
            text: 'Naya Rabe',
            isRight: false,
          },
        ],
      },
      {
        question: 'Where does Peggy tell Steve she wants to meet him for a dance, before he plunges into the ice?',
        points: 10,
        negativePoints: 5,
        options: [
          {
            text: 'The Cotton Club',
            isRight: false,
          },
          {
            text: 'The Stork Club',
            isRight: true,
          },
          {
            text: 'El Morocco',
            isRight: false,
          },
          {
            text: 'The Copacabana',
            isRight: false,
          },
        ],
      },
    ],
  },
  {
    name: 'DC Comics',
    playTime: 5,
    imageURL: 'https://www.denofgeek.com/wp-content/uploads/2014/09/justice-league-movie-team-photo.jpg?resize=768%2C432',
    totalPoints: 50,
    description: 'Only a true DC fan can complete this quiz. Can you?',
    totalQuestions: 5,
    questions: [
      {
        question: 'Which 3 Super Heros are considered part of the Holy Trinity?',
        points: 10,
        negativePoints: 5,
        options: [
          {
            text: 'Superman, Flash, Hawkgirl',
            isRight: false,
          },
          {
            text: 'Batman, Superman, Wonderwoman',
            isRight: true,
          },
          {
            text: 'Batman, Supergirl, Zatanna',
            isRight: false,
          },
          {
            text: 'Robin, Starfire, Cyborg',
            isRight: false,
          },
        ],
      },
      {
        question: 'Exactly How many Earths are there?',
        points: 10,
        negativePoints: 5,
        options: [
          {
            text: '1',
            isRight: false,
          },
          {
            text: '52',
            isRight: false,
          },
          {
            text: '1,052',
            isRight: false,
          },
          {
            text: 'Infinite',
            isRight: true,
          },
        ],
      },
      {
        question: 'In the television series Young Justice, who are the four young heros who wanted to join the Justice League?',
        points: 10,
        negativePoints: 5,
        options: [
          {
            text: 'Robin, Cyborg, Raven, Zatanna',
            isRight: false,
          },
          {
            text: 'Robin, Speedy, Aqualad, Beast Boy',
            isRight: false,
          },
          {
            text: 'Aqualad, Robin, Kid Flash, Speedy',
            isRight: true,
          },
          {
            text: 'Robin, Aqualad, Kid Flash, Starfire',
            isRight: false,
          },
        ],
      },
      ,
      {
        question: 'In what year was DC Comics Created?',
        points: 10,
        negativePoints: 5,
        options: [
          {
            text: '1927',
            isRight: false,
          },
          {
            text: '1904',
            isRight: false,
          },
          {
            text: '1934',
            isRight: true,
          },
          {
            text: '1955',
            isRight: false,
          },
        ],
      },
      {
        question: 'What is the name of the street where Martha and Thomas Wayne were murdered?',
        points: 10,
        negativePoints: 5,
        options: [
          {
            text: 'Park Ave',
            isRight: false,
          },
          {
            text: 'Crime Alley',
            isRight: true,
          },
          {
            text: 'Muddy Lane',
            isRight: false,
          },
          {
            text: 'Crime Street',
            isRight: false,
          },
        ],
      },
    ],
  },
  {
    name: 'Football',
    playTime: 5,
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/1200px-Football_iu_1996.jpg',
    description: 'You think you know everything about football? Come test it out!',
    totalPoints: 50,
    totalQuestions: 5,
    questions: [
      {
        question: 'Which of the following country has won the Football world Cup maximum times?',
        points: 10,
        negativePoints: 5,
        options: [
          {
            text: 'Germany',
            isRight: false,
          },
          {
            text: 'Italy',
            isRight: false,
          },
          {
            text: 'Argentina',
            isRight: false,
          },
          {
            text: 'Brazil',
            isRight: true,
          },
        ],
      },
      {
        question: 'Who among the following players has scored the highest number of goals in a Football World Cup?',
        points: 10,
        negativePoints: 5,
        options: [
          {
            text: 'Jurgen Klinsmann',
            isRight: false,
          },
          {
            text: 'Miroslav Klose',
            isRight: true,
          },
          {
            text: 'Diego Maradona',
            isRight: false,
          },
          {
            text: 'Pele',
            isRight: false,
          },
        ],
      },
      {
        question: 'Paul, a marine creature, which supposedly predicted the outcome of many matches in World Cup 2010 was a/an',
        points: 10,
        negativePoints: 5,
        options: [
          {
            text: 'Jelly fish',
            isRight: false,
          },
          {
            text: 'Walrus',
            isRight: false,
          },
          {
            text: 'Octopus',
            isRight: true,
          },
          {
            text: 'Seal',
            isRight: false,
          },
        ],
      },
      {
        question: "Who of the following won the World Cup both as the captain and manager of his country's team?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            text: 'Diego Maradona',
            isRight: false,
          },
          {
            text: 'Pele',
            isRight: false,
          },
          {
            text: 'Franz Beckenbauer',
            isRight: true,
          },
          {
            text: 'Jupp Derwall',
            isRight: false,
          },
        ],
      },
      {
        question: 'Who was awarded the Golden Glove award for the best goalkeeper at the World Cup 2014?',
        points: 10,
        negativePoints: 5,
        options: [
          {
            text: 'Manuel Neuer',
            isRight: true,
          },
          {
            text: 'Iker Casillas',
            isRight: false,
          },
          {
            text: 'Keylor Navas',
            isRight: false,
          },
          {
            text: 'Sergio Romero',
            isRight: false,
          },
        ],
      },
    ],
  },
];

module.exports = allQuizzes;
