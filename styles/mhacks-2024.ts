// THEME
// Constant literals associated with the theme of the email campaign
export const theme = {
  colors: {
    purple: {
      light: '#f4f2f5',
      mediumLight: '#ecebed',
      dark: '#580c88',
    },
    black: '#000000',
    white: '#ffffff',
    text: {
      primary: '#202020',
      secondary: '#808080',
    },
    transparent: 'transparent',
  },
  spacing: {
    xs: '4px',
    s: '8px',
    m: '16px',
    l: '32px',
    xl: '64px',
  },
  text: {
    sizes: {
      s: '12px',
      m: '16px',
      l: '20px',
      xl: '24px',
    },
    lineHeights: {
      s: '18px',
      m: '24px',
      l: '30px',
      xl: '30px',
    },
    weights: {
      regular: '400',
      bold: '700',
    },
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  },
};

// STYLE MIXINS
// These should be created when there is a need to reuse multiple different sets of styles across components.
export const textH1 = {
  color: theme.colors.text.primary,
  fontSize: theme.text.sizes.xl,
  lineHeight: theme.text.lineHeights.xl,
  fontWeight: theme.text.weights.bold,
};

export const textH2 = {
  color: theme.colors.text.primary,
  fontSize: theme.text.sizes.l,
  lineHeight: theme.text.lineHeights.l,
  fontWeight: theme.text.weights.bold,
};

export const textP = {
  color: theme.colors.text.primary,
  fontSize: theme.text.sizes.m,
  lineHeight: theme.text.lineHeights.m,
  fontWeight: theme.text.weights.regular,
  margin: `${theme.text.lineHeights.m} 0`,
};

export const textPSecondary = {
  color: theme.colors.text.secondary,
  fontSize: theme.text.sizes.s,
  lineHeight: theme.text.lineHeights.s,
  fontWeight: theme.text.weights.regular,
};

export const anchor = {
  ...textP,
  color: theme.colors.purple.dark,
  fontWeight: theme.text.weights.bold,
};

export const roundedS = {
  borderRadius: theme.spacing.xs,
};

export const roundedM = {
  borderRadius: theme.spacing.s,
};

export const roundedL = {
  borderRadius: theme.spacing.m,
};
