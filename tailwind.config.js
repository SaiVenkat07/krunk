/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        slategray: "#7a7f8c",
        darkgray: "#b1b1b1",
        dodgerblue: "#4c82ef",
        lavender: "#e3ecff",
        gray: "#949494",
        dimgray: {
          "100": "#737373",
          "200": "#666",
        },
        whitesmoke: "#f4f4f4",
        ghostwhite: "#f6f9ff",
        darkslategray: "#333",
        aliceblue: {
          "100": "#f2f7ff",
          "200": "#eef3fd",
        },
        lightgoldenrodyellow: "#dcf7c5",
        limegreen: "#3fe225",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        "8xs": "5px",
        mini: "15px",
        "11xl": "30px",
      },
    },
    fontSize: {
      smi: "13px",
      "3xs": "10px",
      xs: "12px",
      mini: "15px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
