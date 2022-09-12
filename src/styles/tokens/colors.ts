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

const transparent = {
  'transparent-black-01': 'hsla(0, 0%, 0%, 0.910)',
  'transparent-black-02': 'hsla(0, 0%, 0%, 0.565)',
  'transparent-black-03': 'hsla(0, 0%, 0%, 0.478)',
  'transparent-black-04': 'hsla(0, 0%, 0%, 0.439)',
  'transparent-black-05': 'hsla(0, 0%, 0%, 0.220)',
  'transparent-black-06': 'hsla(0, 0%, 0%, 0.141)',
  'transparent-black-07': 'hsla(0, 0%, 0%, 0.114)',
  'transparent-black-08': 'hsla(0, 0%, 0%, 0.090)',
  'transparent-black-09': 'hsla(0, 0%, 0%, 0.071)',
  'transparent-black-10': 'hsla(0, 0%, 0%, 0.047)',
  'transparent-black-11': 'hsla(0, 0%, 0%, 0.027)',
  'transparent-black-12': 'hsla(0, 0%, 0%, 0.012)',

  'transparent-white-01': 'hsla(0, 0%, 100%, 0)',
  'transparent-white-02': 'hsla(0, 0%, 100%, 0.013)',
  'transparent-white-03': 'hsla(0, 0%, 100%, 0.034)',
  'transparent-white-04': 'hsla(0, 0%, 100%, 0.056)',
  'transparent-white-05': 'hsla(0, 0%, 100%, 0.086)',
  'transparent-white-06': 'hsla(0, 0%, 100%, 0.124)',
  'transparent-white-07': 'hsla(0, 0%, 100%, 0.176)',
  'transparent-white-08': 'hsla(0, 0%, 100%, 0.249)',
  'transparent-white-09': 'hsla(0, 0%, 100%, 0.386)',
  'transparent-white-10': 'hsla(0, 0%, 100%, 0.446)',
  'transparent-white-11': 'hsla(0, 0%, 100%, 0.592)',
  'transparent-white-12': 'hsla(0, 0%, 100%, 0.923)'
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
  'brand-primary-01': '#11090c',
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

  'brand-secondary-01': '#17151f',
  'brand-secondary-02': '#1c172b',
  'brand-secondary-03': '#251e40',
  'brand-secondary-04': '#2c2250',
  'brand-secondary-05': '#32275f',
  'brand-secondary-06': '#392c72',
  'brand-secondary-07': '#443592',
  'brand-secondary-08': '#5842c3',
  'brand-secondary-09': '#6e56cf',
  'brand-secondary-10': '#7c66dc',
  'brand-secondary-11': '#9e8cfc',
  'brand-secondary-12': '#f1eefe'
};

const text = {
  'text-primary': base['base-white'],
  'text-secondary': neutral['neutral-gray-11'],
  'text-highlight': brand['brand-primary-11']
};

const palette = {
  'base-white': '#ffffff',
  'base-black': '#000000',
  'brand-primary-low': brand['brand-primary-01'],
  'brand-primary-mid': brand['brand-primary-03'],
  'brand-primary-high': brand['brand-primary-11'],
  'brand-primary-scrollbar': brand['brand-primary-09'],
  'brand-secondary-high': brand['brand-secondary-11'],
  'transparent-black-low': transparent['transparent-black-02'],
  'transparent-black-high': transparent['transparent-black-03'],
  'transparent-white-low': transparent['transparent-white-01'],
  'transparent-white-high': transparent['transparent-white-03'],
  ...text
};

export { palette };
