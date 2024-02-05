// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         amazon_blue: {
//           DEFAULT: "#232F3E",
//           dark: "#131921",
//           light: "#37475A",
//         },
//         amazon_yellow: {
//           DEFAULT: "#febd69",
//           dark: "#f0a542",
//         },
//       },
//       borderWidth: {
//         20: "20px",
//       },
//       keyframes: {
//         fade_in: {
//           "0%": { opacity: "0" },
//           "100%": { opacity: "0.5" },
//         },
//         fade_out: {
//           "0%": { opacity: "0.5" },
//           "100%": { opacity: "0" },
//         },
//         rotateA: {
//           "0%,25%": { transform: "rotate(0)" },
//           "50%,75%": { transform: "rotate(180deg)" },
//           "100%": { transform: "rotate(360deg)" },
//         },
//         rotateB: {
//           "0%,25%": { transform: "rotate(90deg)" },
//           "50%,75%": { transform: "rotate(270deg)" },
//           "100%": { transform: "rotate(450deg)" },
//         },
//         sk_bouncedelay: {
//           "0%,80%,100%": { transform: "scale(0)" },
//           "40%": { transform: "scale(1.0)" },
//         },
//         rotate: {
//           "0%": { transform: "rotate(0)" },
//           "25%": { transform: "rotate(5deg)" },
//           "50%": { transform: "rotate(0)" },
//           "75%": { transform: "rotate(-5deg)" },
//           "100%": { transform: "rotate(0)" },
//         },
//       },
//       animation: {
//         fade_in: "fade_in 0.3s linear forwards",
//         rotateA: "rotateA 2s linear infinite 0.5s",
//         rotateB: "rotateB 2s linear infinite",
//         sk_bouncedelay: "sk_bouncedelay 1.3s infinite ease-in-out both",
//         sk_bouncedelay_1: "sk_bouncedelay 1.3s infinite -0.32s ease-in-out both",
//         sk_bouncedelay_2: "sk_bouncedelay 1.3s infinite -0.16s ease-in-out both",
//         rotate: "rotate 2s infinite linear",
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/line-clamp")],
// };




/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
        extend: {
          colors: {
            amazon_blue: {
              DEFAULT: "#232F3E",
              dark: "#131921",
              light: "#37475A",
            },
            amazon_yellow: {
              DEFAULT: "#febd69",
              dark: "#f0a542",
            },
          },
          borderWidth: {
            20: "20px",
          },
          keyframes: {
            fade_in: {
              "0%": { opacity: "0" },
              "100%": { opacity: "0.5" },
            },
            fade_out: {
              "0%": { opacity: "0.5" },
              "100%": { opacity: "0" },
            },
            rotateA: {
              "0%,25%": { transform: "rotate(0)" },
              "50%,75%": { transform: "rotate(180deg)" },
              "100%": { transform: "rotate(360deg)" },
            },
            rotateB: {
              "0%,25%": { transform: "rotate(90deg)" },
              "50%,75%": { transform: "rotate(270deg)" },
              "100%": { transform: "rotate(450deg)" },
            },
            sk_bouncedelay: {
              "0%,80%,100%": { transform: "scale(0)" },
              "40%": { transform: "scale(1.0)" },
            },
            rotate: {
              "0%": { transform: "rotate(0)" },
              "25%": { transform: "rotate(5deg)" },
              "50%": { transform: "rotate(0)" },
              "75%": { transform: "rotate(-5deg)" },
              "100%": { transform: "rotate(0)" },
            },
          },
          animation: {
            fade_in: "fade_in 0.3s linear forwards",
            rotateA: "rotateA 2s linear infinite 0.5s",
            rotateB: "rotateB 2s linear infinite",
            sk_bouncedelay: "sk_bouncedelay 1.3s infinite ease-in-out both",
            sk_bouncedelay_1: "sk_bouncedelay 1.3s infinite -0.32s ease-in-out both",
            sk_bouncedelay_2: "sk_bouncedelay 1.3s infinite -0.16s ease-in-out both",
            rotate: "rotate 2s infinite linear",
          },
        },
      },
  plugins: [],
}
