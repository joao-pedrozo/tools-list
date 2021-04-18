import GlobalStyles from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { ToolsProvider } from '../hooks/tools';

import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ToolsProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </ToolsProvider>
    </ThemeProvider>
  );
}

export default MyApp;
