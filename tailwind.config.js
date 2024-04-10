/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        absolute_white: '#fff',
        absolute_black: '#000',

        GreenShades_50: '#FDFEFB',
        GreenShades_100: '#FAFDF2',
        GreenShades_200: '#F6FBE9',
        GreenShades_300: '#EEF8D3',
        GreenShades_400: '#E5F5BD',
        GreenShades_500: '#DCF1A7',
        GreenShades_600: '#D3EE91',
        GreenShades_700: '#CBEA7B',

        DarkGreen_50: '#DDEDE8',
        DarkGreen_100: '#BCDCD1',
        DarkGreen_200: '#79B9A4',
        DarkGreen_300: '#468671',
        DarkGreen_400: '#346454',
        DarkGreen_500: '#2C5446',
        DarkGreen_600: '#234338',
        DarkGreen_700: '#1A3129',

        GreyShades_50: '#FCFCFC',
        GreyShades_100: '#F7F7F7',
        GreyShades_200: '#F2F2F2',
        GreyShades_300: '#E6E6E6',
        GreyShades_400: '#98989A',
        GreyShades_500: '#656567',
        GreyShades_600: '#59595A',
        GreyShades_700: '#4C4C4D',
        GreyShades_800: '#333333',
        GreyShades_900: '#262626',
        GreyShades_950: '#191919',
      },
    },
    plugins: [
      // ...
      require('tailwind-scrollbar'),
    ],
  },
}
