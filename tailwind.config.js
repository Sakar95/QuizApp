module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        keyframes: {
          'timer-10': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
          // Define additional keyframes as needed
        },
        animation: {
          'timer-10': 'timer-10 10s linear forwards',
          // Define additional animations as needed
        },
      },
    },
    plugins: [],
  }

