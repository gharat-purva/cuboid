/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors: {
      'white': '#fff',
      'gray': '#f4f7f7',
      'black': '#202020',
      'lesser-black': '#47464a',
      'orange': '#f75151',
      'light-green': '#e1f0ee',
      'dark-green': '#009580',
      'yellow': '#ffab2a',
      'dark-gray': '#84818a',
      'light-gray': '#dcdbdd',
      'cool-blue':'#23adde',
      'cooler-blue': '#3487eb',
      'purple': '#7b5cdc',
      'cool-orange': '#f97855'
    },
    extend: {
      fontFamily: {
        serif: ['Poppins', 'sans-serif'],
      },
      spacing: {
        'full': '100%', 
        '140': '44rem'
      },
    },
  },
  plugins: [],
}
