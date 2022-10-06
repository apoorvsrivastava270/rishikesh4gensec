/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'solarpulse': 'pulse 1s linear infinite',
        'burger': 'burger 1s linear',
      },
      keyframes: {
        burger: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-90deg)' },
        }
      },
      fontFamily: {
        Bungee: ["Bungee Outline", "cursive"],
        Reem: ["Reem Kufi Fun", "cursive"],
        Pangolin: ["Pangolin", "cursive"],
       },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '400%': '400%',
      },
      backgroundImage: {
        'hero-pattern': "url('../media/collage.png')",
      },
      screens: {
        'md': '811px',
      },
    },
  },
  plugins: [],
}
