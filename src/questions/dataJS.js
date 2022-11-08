const questions = [
  {
    title: 'Where is the correct place to insert a JavaScript?',
    variants: [
      'The <head> section',
      'The <body> section',
      'Both the <head> section and the <body> section are correct',
    ],
    correct: 2,
  },
  {
    title:
      'What is the correct syntax for referring to an external script called "xxx.js"?',
    variants: [
      '<script href="xxx.js">',
      '<script src="xxx.js">',
      '<script name="xxx.js">',
    ],
    correct: 1,
  },
  {
    title: 'How do you call a function named "myFunction"?',
    variants: [
      'myFunction()',
      'call myFunction()',
      'call function myFunction()',
    ],
    correct: 0,
  },
  {
    title:
      'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    variants: ['if (i <> 5)', 'if (i != 5)', 'if i =! 5 then'],
    correct: 1,
  },
  {
    title: 'How does a WHILE loop start?',
    variants: [
      'while i = 1 to 10',
      'while (i <= 10; i++)',
      'while (i <= 10)  ',
    ],
    correct: 2,
  },
  {
    title: 'How do you round the number 7.25, to the nearest integer?',
    variants: ['Math.rnd(7.25)', 'rnd(7.25)', 'Math.round(7.25)  '],
    correct: 2,
  },
  {
    title: 'How do you find the number with the highest value of x and y?',
    variants: ['Math.ceil(x, y)', 'Math.max(x, y)', 'ceil(x, y)'],
    correct: 1,
  },
  {
    title: 'Which operator is used to assign a value to a variable?',
    variants: ['=', '*', '-'],
    correct: 0,
  },
  {
    title: 'What is the correct way to write a JavaScript array?',
    variants: [
      'var colors = "red", "green", "blue"',
      'var colors = ["red", "green", "blue"]  ',
      'var colors = (1:"red", 2:"green", 3:"blue")',
    ],
    correct: 1,
  },
  {
    title: 'How does a FOR loop start?',
    variants: [
      'for (i = 0; i <= 5)',
      'for (i = 0; i <= 5; i++)  ',
      'for (i <= 5; i++)',
    ],
    correct: 1,
  },
];

export default questions;
