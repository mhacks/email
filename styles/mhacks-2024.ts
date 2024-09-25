// constant literals associated with the theme of the email campaign
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
    weights: {
      regular: '400',
      bold: '700',
    },
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  },
};

// style mixins for use in components
export const roundedS = {
  borderRadius: theme.spacing.xs,
};

export const roundedM = {
  borderRadius: theme.spacing.s,
};

export const roundedL = {
  borderRadius: theme.spacing.m,
};
