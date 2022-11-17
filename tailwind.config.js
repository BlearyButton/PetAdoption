/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
      colors: {
        'darkblue': '#181F2F', 
        'lightpurple': '#EDE9FF',
        'mediumpurple': '#A99BED',
        'darkpurple': '#5F4ACB',
        'mediumgray': '#878B8F',
        'lightblue': '#E5F0FD',
        'mediumblue': '#73A9F5',
        'lightorange': '#FDF2D8',
        'mediumorange': '#F8B646',
        'darkorange': '#F2B036',
      },
    },
  },
  variants: { 
  },
  plugins: [
  ],
  safelist: [
    {
        pattern: /.*/,
    },
  ],
}