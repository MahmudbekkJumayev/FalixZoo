/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        sm: "20px",
        md: "30px",
        lg: "50px",
        xl: "120px",
        
        
      },
      colors: {
        gray: {
          150: '#e0e0e0', // Bu erda o'zingiz xohlagan rangni kiriting
        },
      },
    },
  },
  plugins: [],
};
