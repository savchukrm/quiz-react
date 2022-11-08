const questions = [
  {
    title: 'What does CSS stand for?',
    variants: [
      'Computer Style Sheets',
      'Cascading Style Sheets  ',
      'Creative Style Sheets',
    ],
    correct: 1,
  },
  {
    title: 'What is the correct HTML for referring to an external style sheet?',
    variants: [
      '<stylesheet> mystyle.css </stylesheet>',
      '<style src="mystyle.css">',
      '<link rel="stylesheet" type="text/css" href="mystyle.css">',
    ],
    correct: 2,
  },
  {
    title: 'How do you add a background color for all <h1> elements?',
    variants: [
      'all.h1 {background-color:#FFFFFF;}',
      'h1 {background-color:#FFFFFF;}  ',
      'h1.all {background-color:#FFFFFF;}',
    ],
    correct: 1,
  },
  {
    title: 'How do you display hyperlinks without an underline?',
    variants: [
      'a {text-decoration:none;}  ',
      'a {text-decoration:no-underline;}',
      'a {underline:none;}',
    ],
    correct: 0,
  },
  {
    title: 'How do you make each word in a text start with a capital letter?',
    variants: [
      'text-style:capitalize',
      'text-transform:capitalize',
      'transform:capitalize',
    ],
    correct: 1,
  },
  {
    title: 'Which property is used to change the font of an element?',
    variants: ['font-weight', 'font-style', 'font-family'],
    correct: 2,
  },
  {
    title: 'How do you make the text bold?',
    variants: ['style:bold;', 'font:bold;', 'font-weight:bold;  '],
    correct: 2,
  },
  {
    title: 'How do you select an element with id `demo?`',
    variants: ['*demo', '.demo', '#demo'],
    correct: 2,
  },
  {
    title: 'How do you group selectors?',
    variants: [
      'Separate each selector with a space',
      'Separate each selector with a comma',
      'Separate each selector with a plus sign',
    ],
    correct: 1,
  },
  {
    title: 'What is the default value of the position property?',
    variants: ['static', 'absolute', 'relative'],
    correct: 0,
  },
];

export default questions;
