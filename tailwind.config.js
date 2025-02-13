/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#F5F5F5',
        'primary-hover': '#DBD9D9',
        'secondary': '#121212',
        'secondary-hover': '#0D0D0D',
        'third': '#2B2B2B',
        'third-hover': '#252525',
        'fourth': '#A9A9A9',
        'fourth-hover': '#979696',
        'fifth': '#0A0A0A',
        'fifth-hover': '#101010',
        'default-text': '#F5F5F5',
        'sub-text': '#7e5bef',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '1.5rem',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1512px',
      },
    },
  },
  plugins: [],
}