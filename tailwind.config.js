/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          light: '#60a5fa', // blue-400
          DEFAULT: '#2563eb', // blue-600
          dark: '#1d4ed8', // blue-700
        },
        'secondary': {
          light: '#fbbf24', // amber-400
          DEFAULT: '#f59e0b', // amber-500
          dark: '#d97706', // amber-600
        },
        'neutral': {
          light: '#f3f4f6', // gray-100
          DEFAULT: '#6b7280', // gray-500
          dark: '#1f2937', // gray-800
        }
      },
      fontFamily: {
        'sans': ['Noto Sans JP', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 