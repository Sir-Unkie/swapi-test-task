export type TColors =
  | 'inherit'
  | 'mainBlack'
  | 'darkGrey'
  | 'heavyGrey'
  | 'grey'
  | 'normalGrey'
  | 'lightGrey'
  | 'mainGreen'
  | 'greenBackground'
  | 'greenOpacity'
  | 'lightGreen'
  | 'red'
  | 'redBackground'
  | 'greyBackground'
  | 'greyBackgroundOpacityMid'
  | 'white'
  | 'orange'
  | 'lightOrange'
  | 'hoverGreen'
  | 'blackOpacity'
  | 'transparent'
  | 'inactiveBlue'
  | 'lightBlue'
  | 'blueOpacity'
  | 'blueOpacityMid'
  | 'blue'
  | 'chooseFile'
  | 'status'
  | 'yellow'
  | 'lightYellow';

const colors: Record<TColors, string> = {
  inherit: 'inherit',
  mainBlack: '#072833',
  darkGrey: '#203E47',
  heavyGrey: '#677B82',
  grey: '#9BA9AD',
  normalGrey: '#C9D0D2',
  lightGrey: '#E4E7E8',
  mainGreen: '#8BC540',
  hoverGreen: '#78B02F',
  greenBackground: '#E7FAC8',
  greenOpacity: 'rgba(225,244,194,0.9)',
  lightGreen: '#F5FAF0',
  red: '#FF0000',
  redBackground: '#FBF0F0',
  greyBackground: '#F8F8F8',
  greyBackgroundOpacityMid: 'rgba(248,248,248,0.5)',
  white: '#FFFFFF',
  orange: '#F0BF11',
  lightOrange: '#FFECA7',
  blackOpacity: 'rgba(0, 0, 0, 0.3)',
  transparent: '#FFFFFF00',
  inactiveBlue: '#E2E9EB',
  lightBlue: '#D1E9FF',
  blueOpacity: 'rgba(240,245,246,0.8)',
  blueOpacityMid: 'rgba(240,245,246,0.5)',
  blue: '#FED141',
  chooseFile: '#D2D8DA',
  status: '#B8C5C9',
  yellow: '#FED141',
  lightYellow: '#FFF8E1',
};

export default colors;
