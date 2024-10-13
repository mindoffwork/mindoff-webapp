/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Poltawski Nowy', 'serif'],
        mono: ['Source Code Pro', 'monospace'], 
      },
      colors: {
        white: '#FFFFFF', 
        fawn: '#FAF5EE', 
        yellow: '#F7EC87',
        green: '#D8E995',
      },
      spacing: {
        '1px': '0.063rem',
        '1.5px': '0.094rem',
        '2px': '0.125rem',
        '3px': '0.188rem',
        '6px': '0.375rem',
      },
      borderWidth: {
        '1px': '0.063rem',
        '1.5px': '0.094rem',
        '2px': '0.125rem',
        '3px': '0.188rem',
        '6px': '0.375rem',
      },
      fontSize: {
        '1xs': '0.625rem',
        '2xs': '0.5rem',
        '5xl': '2.5rem'
      }
    },
  },
  plugins: [],
}
