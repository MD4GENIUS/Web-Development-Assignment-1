import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './src/about';
import Contact from './src/contact';
import Services from './src/services';
import Project from './src/project';
import Layout from './components/Layout';

const MainRouter = () => (
  <div>
    <Layout />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  </div>
);

export default MainRouter;
