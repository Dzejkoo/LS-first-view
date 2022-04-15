import React from 'react';
import { GlobalStyle } from './assets/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import { MainTemplate } from './template/MainTemplate';
import { MainRoutes } from './routes/MainRoutes';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <MainRoutes />
      </MainTemplate>
    </ThemeProvider>
  );
};
