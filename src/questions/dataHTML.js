const questions = [
  {
    title: 'Who is making the Web standards?',
    variants: ['Mozilla', 'The World Wide Web Consortium ', 'Microsoft'],
    correct: 1,
  },
  {
    title: 'What is the correct HTML for adding a background color?',
    variants: [
      '<body style="background-color:yellow;">',
      '<body bg="yellow">',
      '<background> yellow </background>',
    ],
    correct: 0,
  },
  {
    title: 'How can you open a link in a new tab/browser window?',
    variants: [
      '<a href="url" target="_blank">  ',
      '<a href="url" new>',
      '<a href="url" target="new">',
    ],
    correct: 0,
  },
  {
    title: 'How can you make a numbered list?',
    variants: ['<ul>', '<ol>', '<list>'],
    correct: 1,
  },
  {
    title: 'What is the correct HTML for making a text input field?',
    variants: [
      '<input type="textfield">',
      '<input type="text">  ',
      '<textfield>',
    ],
    correct: 1,
  },
  {
    title: 'What is the correct HTML for making a text area?',
    variants: [
      '<textarea>  ',
      '<input type="textarea">  ',
      '<input type="textbox">',
    ],
    correct: 0,
  },
  {
    title: 'What is the correct HTML for inserting a background image?',
    variants: [
      '<body bg="background.gif">',
      '<background img="background.gif">',
      '<body style="background-image:url(background.gif)">  ',
    ],
    correct: 2,
  },
  {
    title: 'Which HTML element defines the title of a document?',
    variants: ['<head>', '<title>', '<meta>'],
    correct: 1,
  },
  {
    title: 'Graphics defined by SVG is in which format?',
    variants: ['XML', 'HTML', 'CSS'],
    correct: 0,
  },
  {
    title: 'How can you make a bulleted list?',
    variants: ['<ul>', '<list>', '<ol>'],
    correct: 0,
  },
];

export default questions;
