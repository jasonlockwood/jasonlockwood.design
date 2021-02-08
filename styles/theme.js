

//========== DEFINES VALUES OF BREAKPOINTS AS 'windowSize' =================

const windowSize = {
  xs: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

//========== END DEFINES VALUES OF BREAKPOINTS AS 'windowSize' =================


export const theme = {

  breakpoint: {
    xs: `(min-width: ${windowSize.xs})`,
    sm: `(min-width: ${windowSize.sm})`,
    md: `(min-width: ${windowSize.md})`,
    lg: `(min-width: ${windowSize.lg})`,
    xl: `(min-width: ${windowSize.xl})`
  },

  light: {
    colors: {
      primary_100: "#333941",
      primary_90: "#474C54",
      primary_80: "#575C62",
      primary_60: "#7B7E83",
      primary_30: "#B0B2B4",
      primary_10: "#EBECEB",
      background: "#FFFFFF",
      royalperp: "#6D6BD9",
      tealectric: "#6BD9BF",
      primary: "#86C9A9"

    }
  },

  dark:  {
    colors: {
      primary_100: "#FFFFFF",
      primary_90: "#EBECEB",
      primary_80: "#B0B2B4",
      primary_60: "#7B7E83",
      primary_30: "#575C62",
      primary_10: "#474C54",
      background: "#333941",
      royalperp: "#6D6BD9",
      tealectric: "#6BD9BF",
      primary: "#FAC16D"
    }
  },

  fontSizes: [
    "0.8rem", // 0
    "1rem", // 1
    "1.2rem", // 2
    "1.5rem", // 3
    "1.875rem", // 4
    "2.25rem", // 5
    "2.75rem", // 6
  ],

  fontWeights: {
    regular: "400",
    medium: "500",
    bold: "700",
  },

  lineHeights: {
    body: "1.4",
    heading: "1.2",
    code: "1.6",
  },

  space: [
    "0px", // 0
    "4px", // 1
    "8px", // 2
    "16px", // 3
    "24px", // 4
    "32px", // 5
    "48px", // 6
    "64px", // 7
    "96px", // 8
    "128px", // 9
  ]


};


