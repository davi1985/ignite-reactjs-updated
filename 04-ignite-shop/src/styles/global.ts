import { globalCss } from '.';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smooothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100',
  },

  'body, inputm textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
});
