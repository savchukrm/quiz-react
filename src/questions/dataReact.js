const questions = [
  {
    title: 'What is the correct command to create a new React project?',
    variants: [
      'npx create-react-app',
      'npm create-react-app',
      'npx create-react-app myReactApp  ',
    ],
    correct: 2,
  },
  {
    title: 'The component is...',
    variants: ['part of an application or page', 'application', 'data type'],
    correct: 0,
  },
  {
    title: 'How many components can there be on the site?',
    variants: ['No more than 10', 'No more than 30', 'Unlimited quantity'],
    correct: 2,
  },
  {
    title: 'How do properties differ from states?',
    variants: [
      'States can be changed, properties cannot',
      'States for working with values, properties for working with functions',
      'Properties can be changed, states cannot',
    ],
    correct: 0,
  },
  {
    title:
      'When rendering a list using the JavaScript map() method, what is required for each element rendered?',
    variants: ['data-index', 'index', 'key'],
    correct: 2,
  },
  {
    title:
      'Which operator can be used to conditionally render a React component?',
    variants: ['&&', '!!', '||'],
    correct: 0,
  },
  {
    title: 'What tool does React use to compile JSX?',
    variants: ['ReactDOM', 'JSX Compiler', 'Babel'],
    correct: 2,
  },
  {
    title: 'What command is used to start the React local development server?',
    variants: ['npm run dev', 'npm serve', 'npm start'],
    correct: 2,
  },
  {
    title: 'A copy of the `real` DOM that is kept in memory is called what?',
    variants: ['Virtual DOM', 'React DOM', 'Shadow DOM'],
    correct: 0,
  },
  {
    title:
      'Which method is responsible for the output of information through the React JS component?',
    variants: ['console', 'render', 'react'],
    correct: 1,
  },
];

export default questions;
