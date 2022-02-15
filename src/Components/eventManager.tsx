// semi-generic event blocks

const gym = {
  title: 'Gym',
  duration: 1.5,
  desc: '',
  color: 'slategray',
};

const morning = {
  title: 'Morning Routine',
  duration: 1.5,
  desc: '',
  color: '',
};

const morningCode = {
  title: 'LIPIMS',
  duration: 3,
  desc: '',
  color: '',
};

const lunch = {
  title: 'Lunch',
  duration: 1,
  desc: '',
  color: '',
};

const afternoonCode = {
  title: 'LIPIMS/REALM',
  duration: 3,
  desc: '',
  color: '',
};

const dailyClean = {
  title: 'Daily Cleans',
  duration: 0.5,
  desc: '',
  color: '',
};

const dusk = {
  title: 'LIPIMS/REALM or Gaming',
  duration: 2,
  desc: '',
  color: '',
};

const dinner = {
  title: 'Dinner',
  duration: 0.5,
  desc: '',
  color: '',
};

const afterDark = {
  title: 'After Dark',
  duration: 2,
  desc: '',
  color: '',
};

const nightly = {
  title: 'Nightly Routine',
  duration: 1,
  desc: '',
  color: '',
};

const sleeping = {
  title: 'Just Sleeping',
  duration: 8,
  desc: '',
  color: '',
};

const workEventChunk = [
  sleeping,
  nightly,
  afterDark,
  dusk,
  dailyClean,
  afternoonCode,
  lunch,
  morningCode,
  morning,
  gym,
];

const eventBlock = [workEventChunk];

export default eventBlock;
