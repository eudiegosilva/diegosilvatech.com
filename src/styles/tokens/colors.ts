const base = {
  'base-white': '#ffffff',
  'base-black': '#000000',

  'base-gray-01': '#161616',
  'base-gray-02': '#1c1c1c',
  'base-gray-03': '#232323',
  'base-gray-04': '#282828',
  'base-gray-05': '#2e2e2e',
  'base-gray-06': '#343434',
  'base-gray-07': '#3e3e3e',
  'base-gray-08': '#505050',
  'base-gray-09': '#707070',
  'base-gray-10': '#7e7e7e',
  'base-gray-11': '#a0a0a0',
  'base-gray-12': '#ededed'
};

const neutral = {
  'neutral-white': '#ededef',
  'neutral-black': '#161618',

  'neutral-gray-01': '#161618',
  'neutral-gray-02': '#1c1c1f',
  'neutral-gray-03': '#232326',
  'neutral-gray-04': '#28282c',
  'neutral-gray-05': '#2e2e32',
  'neutral-gray-06': '#34343a',
  'neutral-gray-07': '#3e3e44',
  'neutral-gray-08': '#504f57',
  'neutral-gray-09': '#706f78',
  'neutral-gray-10': '#7e7d86',
  'neutral-gray-11': '#a09fa6',
  'neutral-gray-12': '#ededef'
};

const brand = {
  'brand-primary-01': '#1d1418',
  'brand-primary-02': '#27141c',
  'brand-primary-03': '#3c1827',
  'brand-primary-04': '#481a2d',
  'brand-primary-05': '#541b33',
  'brand-primary-06': '#641d3b',
  'brand-primary-07': '#801d45',
  'brand-primary-08': '#ae1955',
  'brand-primary-09': '#e93d82',
  'brand-primary-10': '#f04f88',
  'brand-primary-11': '#f76190',
  'brand-primary-12': '#feecf4',

  'brand-secondary-violet-01': '#17151f',
  'brand-secondary-violet-02': '#1c172b',
  'brand-secondary-violet-03': '#251e40',
  'brand-secondary-violet-04': '#2c2250',
  'brand-secondary-violet-05': '#32275f',
  'brand-secondary-violet-06': '#392c72',
  'brand-secondary-violet-07': '#443592',
  'brand-secondary-violet-08': '#5842c3',
  'brand-secondary-violet-09': '#6e56cf',
  'brand-secondary-violet-10': '#7c66dc',
  'brand-secondary-violet-11': '#9e8cfc',
  'brand-secondary-violet-12': '#f1eefe'
};

// SEMANTIC
const text = {
  'text-high': '#ffffff',
  'text-low': '#a09fa6',
  'text-highlight': brand['brand-primary-09']
};

const hover = {
  'hover-highlight': brand['brand-primary-03']
};

const palette = {
  background: neutral['neutral-black'],
  ...hover,
  ...text
};

export { palette };
