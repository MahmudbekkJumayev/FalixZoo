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
        lg: "100px",
        xl: "200px",
        
        
      },
    },
  },
  plugins: [],
};
