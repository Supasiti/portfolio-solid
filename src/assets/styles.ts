export const styles = {
  color: {
    primary: {
      //sandy
      lighter: '#F8C49A',
      light: '#F6B581',
      main: '#F4A261',
      dark: '#C3824E',
      darker: '#9C683E',
    },
    secondary: {
      //teal
      lighter: '#748991',
      light: '#516B75',
      main: '#264653',
      dark: '#1E3842',
      darker: '#182D35',
    },
    tertiary: {
      //java
      lighter: '#03edd6',
      light: '#55B1A5',
      main: '#2A9D8F',
      dark: '#227E72',
      darker: '#1B655B',
    },
    background: {
      default: '#264653',
    },
    border: {
      primary: '1px solid #F4A261',
      secondary: '1px solid #264653',
      tertiary: '1px solid #03edd6',
    },
    grey: {
      [100]: '#f1f5f9',
      [200]: '#e2e8f0',
      [300]: '#cbd5e1',
      [400]: '#94a3b8',
      [500]: '#64748b',
      [600]: '#475569',
      [700]: '#334155',
      [800]: '#1e293b',
      [900]: '#0f172aß',
    },
  },
  shadow: {
    [2]: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    [4]: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    [8]: '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const mediaQuery = (breakpoint: Breakpoint) =>
  `@media screen and (min-width: ${styles.breakpoints[breakpoint]}px)`;
