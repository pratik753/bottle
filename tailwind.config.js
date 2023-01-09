module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        bluegray_50: "#f0f2f1",
        light_blue_900_33: "#00588f33",
        cyan_A100: "#72ffff",
        light_blue_500: "#01adeb",
        black_900_3f: "#0000003f",
        light_blue_901: "#004e84",
        light_blue_900: "#005cb1",
        black_900_87: "#00000087",
        teal_300: "#3dccb6",
        teal_600_33: "#1c8e8033",
        yellow_800: "#f89828",
        teal_700: "#1c7f71",
        teal_900: "#13395b",
        yellow_801: "#f79e1b",
        deep_orange_300: "#f3a261",
        red_A700: "#eb001b",
        gray_600: "#747577",
        gray_601: "#747677",
        gray_400: "#c4c4c4",
        gray_401: "#b3b6bc",
        orange_A200: "#e6a540",
        orange_A400: "#f79410",
        gray_800: "#353840",
        gray_602: "#787a80",
        light_blue_800_33: "#007fb933",
        gray_200: "#ebeeed",
        orange_200: "#e9c46b",
        bluegray_800: "#1c5b4f",
        white_A700_66: "#ffffff66",
        cyan_50: "#e9f9f7",
        white_A700: "#ffffff",
        bluegray_803: "#414450",
        bluegray_802: "#424551",
        gray_51: "#f7f9f8",
        light_blue_A700_af: "#0283f7af",
        light_blue_600: "#009cde",
        cyan_400_e2: "#26c4d9e2",
        red_500: "#ff4141",
        gray_50: "#f9fafc",
        teal_600: "#1c8e80",
        black_900: "#000000",
        teal_800: "#1c7063",
        black_901: "#010101",
        gray_903: "#22272b",
        gray_904: "#231f20",
        bluegray_800_33: "#1c5b4f33",
        gray_501: "#999ca4",
        gray_301: "#dadadd",
        gray_103: "#f5f3f2",
        gray_500: "#969696",
        green_700_a3: "#2cb415a3",
        gray_901: "#272727",
        gray_900_87: "#1d1b1987",
        gray_902: "#1e212c",
        blue_800: "#2566af",
        indigo_50: "#e5e8ed",
        orange_A700: "#ff5f00",
        gray_900: "#1d1b19",
        bluegray_100: "#d9d9d9",
        light_blue_50: "#e6f7ff",
        teal_50: "#dbf6f3",
        gray_101: "#f5f5f5",
        gray_300: "#e5e5e5",
        gray_102: "#f5f2f2",
        gray_100: "#f4f6f5",
        gray_300_00: "#dadbdd00",
        bluegray_900: "#333333",
        gray_300_7f: "#dadadd7f",
        white_A700_87: "#ffffff87",
        white_A700_00: "#ffffff00",
        bluegray_101: "#d6dadd",
        cyan_901: "#184874",
        cyan_902: "#17686a",
        indigo_900: "#003087",
        cyan_900: "#184974",
        indigo_901: "#012169",
        gray_900_90: "#1e212c90",
      },
      borderRadius: {
        radius4: "4px",
        radius6: "6px",
        radius8: "8px",
        radius16: "16px",
        radius24: "24px",
        radius25: "25px",
        radius28: "28px",
        radius32: "32px",
        radius50: "50%",
        radius135: "13.5px",
        radius967: "9.67px",
        radius3095: "30.95px",
        radius4321: "43.21px",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#004e84,#01adeb)",
        gradient1: "linear-gradient(180deg ,#e9c46b,#f3a261)",
        gradient2: "linear-gradient(135deg ,#0283f7af,#13395b)",
        gradient3: "linear-gradient(318.95deg ,#2cb415a3,#26c4d9e2)",
        gradient4: "linear-gradient(180deg ,#1c5b4f33,#1c8e8033)",
        gradient5: "linear-gradient(180deg ,#1c5b4f,#1c8e80)",
        gradient6: "linear-gradient(180deg ,#e6f7ff,#3dccb6)",
        gradient7: "linear-gradient(180deg ,#ffffff66,#ffffff00)",
        gradient8: "linear-gradient(180deg ,#005cb1,#72ffff)",
        gradient9:
          "linear-gradient(315deg ,#dadbdd00,#dadadd7f,#dadadd,#dadadd7f,#dadbdd00)",
      },
      borderWidth: { bw067: "0.67px" },
      fontFamily: {
        lato: "Lato",
        roboto: "Roboto",
        inter: "Inter",
        poppins: "Poppins",
      },
      letterSpacing: { ls1: "1px", ls05: "0.5px" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};