/** @type {import('tailwindcss').Config} */
 module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      black: "#000000",
      darkblue: "#212c4f",
      lightgray: "#f0f3f5",
      lightblue: "#c6d0eb",
      darkgreen: "#205284",
      white: "#ffffff",
      purple: "#7b42f6",
      violet: "#b01eff",
      pink: "#e1467c",
      blue: "#3672f8",
      teal: "#56ccf2",
      green: "#a6e1d5",
      turquoise: "#14f1d9",
      purpleViolet: "linear-gradient(135deg, #7b42f6 0%, #b01eff 100%)",
      violetPink: "linear-gradient(135deg, #b01eff 0%, #e1467c 100%)",
      pinkDarkGreen: "linear-gradient(135deg, #e1467c 0%, #205284 100%)",
      blueViolet: "linear-gradient(135deg, #3672f8 0%, #b01eff 100%)",
      turquoiseBlue: "linear-gradient(133deg, #14f1d9 0%, #3672f8 100%)",
      deepBlue: "linear-gradient(135deg, #4f73c3 0%, #3c46a2 100%)",
  "buttonShadowBlackLvl_1": {
        color: "#00000026",
        type: "dropShadow",
        x: 0,
        y: 10,
        blur: 20,
        spread: 0
      },
  "buttonShadowBlackLvl_2": {
        color: "#00000040",
        type: "dropShadow",
        x: 0,
        y: 15,
        blur: 30,
        spread: 0
      },
  "buttonShadowPurpleLvl_1": {
        color: "#7b42f626",
        type: "dropShadow",
        x: 0,
        y: 10,
        blur: 20,
        spread: 0
      },
  "buttonShadowPurpleLvl_2": {
        color: "#7b42f640",
        type: "dropShadow",
        x: 0,
        y: 15,
        blur: 30,
        spread: 0
      },
  "cardShadowBlackLvl_1": {
        color: "#00000026",
        type: "dropShadow",
        x: 0,
        y: 20,
        blur: 40,
        spread: 0
      },
  "cardShadowBlackLvl_2": {
        color: "#00000059",
        type: "dropShadow",
        x: 0,
        y: 30,
        blur: 60,
        spread: 0
      },
      fontFamilies: {
        sfProDisplay: "SF Pro Display",
        sfProText: "SF Pro Text"
      },
      lineHeights: {
        0: "0%"
      },
      fontWeights: {
    "sfProDisplay_0": "Bold",
    "sfProDisplay_1": "Regular",
    "sfProDisplay_2": "Semibold",
    "sfProText_3": "Semibold",
    "sfProText_4": "Regular"
      },
      fontSize: {
        0: 12,
        1: 16,
        2: 18,
        3: 20,
        4: 24,
        5: 30,
        6: 60,
        7: 80
      },
      letterSpacing: {
        0: "0%",
        1: "0.1%"
      },
      paragraphSpacing: {
        0: 0
      },
  "heading_1_80": {
        fontFamily: "SF Pro Display",
        fontWeight: "Bold",
        lineHeight: "0%",
        fontSize: 80,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
  "heading_2_60": {
        fontFamily: "SF Pro Display",
        fontWeight: "Bold",
        lineHeight: "0%",
        fontSize: 60,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
  "heading_3_30": {
        fontFamily: "SF Pro Display",
        fontWeight: "Bold",
        lineHeight: "0%",
        fontSize: 30,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
  "heading_4_24": {
        fontFamily: "SF Pro Display",
        fontWeight: "Bold",
        lineHeight: "0%",
        fontSize: 24,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
  "largeText_24": {
        fontFamily: "SF Pro Display",
        fontWeight: "Regular",
        lineHeight: "0%",
        fontSize: 24,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
  "largeTextSemibold_24": {
        fontFamily: "SF Pro Display",
        fontWeight: "Semibold",
        lineHeight: "0%",
        fontSize: 24,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
  "mediumText_20": {
        fontFamily: "SF Pro Display",
        fontWeight: "Regular",
        lineHeight: "0%",
        fontSize: 20,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
  "mediumTextSemibold_20": {
        fontFamily: "SF Pro Display",
        fontWeight: "Semibold",
        lineHeight: "0%",
        fontSize: 20,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
  "caption_18": {
        fontFamily: "SF Pro Text",
        fontWeight: "Semibold",
        lineHeight: "0%",
        fontSize: 18,
        letterSpacing: "0.1%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "uppercase",
        textDecoration: "none"
      },
  "normalText_16": {
        fontFamily: "SF Pro Text",
        fontWeight: "Regular",
        lineHeight: "0%",
        fontSize: 16,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
  "normalTextSemibold_16": {
        fontFamily: "SF Pro Text",
        fontWeight: "Semibold",
        lineHeight: "0%",
        fontSize: 16,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
  "smallText_12": {
        fontFamily: "SF Pro Text",
        fontWeight: "Regular",
        lineHeight: "0%",
        fontSize: 12,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
  "smallTextSemibold_12": {
        fontFamily: "SF Pro Text",
        fontWeight: "Semibold",
        lineHeight: "0%",
        fontSize: 12,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
      textCase: {
        none: "none",
        uppercase: "uppercase"
      },
      textDecoration: {
        none: "none"
      },
      paragraphIndent: {
        0: "0px"
      }
    },
  },
}