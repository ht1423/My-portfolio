/** @type {import('tailwindcss').Config} */
export default {    
    darkMode: 'class', // enable dark mode based on 'dark' class on <html> or <body>
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}', // adjust paths to where your components are
    ],
    theme: {
      extend: {
        colors: {
          primary: '#7c3aed', // example primary color
          background: '#121212', // dark background
          foreground: '#e0e0e0', // light text
        },
      },
    },
    plugins: [],
  };
  