import React from 'react';
import { Courses } from '../components/pages/Courses';
import { RestPages } from '../components/pages/RestPages';
import { Routes, Route } from 'react-router-dom';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/repository" element={<RestPages />} />
      <Route path="/sales" element={<RestPages />} />
      <Route path="/marketing" element={<RestPages />} />
      <Route path="/users" element={<RestPages />} />
      <Route path="/dashboard" element={<RestPages />} />
      <Route path="/product" element={<RestPages />} />
      <Route path="/" element={<Courses />} />
    </Routes>
  );
};
