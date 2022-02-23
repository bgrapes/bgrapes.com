const colors = {
  blue: "#0039B9",
  blueLight: "#01C3FF",
  charcoal: "#2E2E2E",
  lightGray: "#EBEDF0",
  lighterGray: "#EEF0F1",
  mediumGray: "#CFD1D4",
  purple: "#9844AF",
  white: "#FFFFFF",
}

const theme = {
  blueGradient: `linear-gradient(${colors.blue}, ${colors.blueLight})`,
  boxShadow: `0 50px 40px -20px rgb(0 0 0 / 15%)`,
  charcoal: colors.charcoal,
  primary: colors.blue,
  secondary: colors.purple,
  lightGray: colors.lightGray,
  lighterGray: colors.lighterGray,
  mediumGray: colors.mediumGray,
  white: colors.white,
}

export default theme
