import React from 'react';
import { GlobalStyle } from './assets/styles/globalStyles';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import { MainTemplate } from './components/template/MainTemplate';
import { Courses } from './components/organisms/courses/Courses';
import { Product } from './components/organisms/product/Product';
import { Dashboard } from './components/organisms/dashboard/Dashboard';
import { Users } from './components/organisms/users/Users';
import { Marketing } from './components/organisms/marketing/Marketing';
import { Sales } from './components/organisms/sales/Sales';
import { Repository } from './components/organisms/repository/Repository';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <Routes>
          <Route path="/repository" element={<Repository />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/users" element={<Users />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/" element={<Courses />} />
        </Routes>
      </MainTemplate>
    </ThemeProvider>
  );
};
