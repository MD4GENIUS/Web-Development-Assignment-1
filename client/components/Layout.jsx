import React from 'react';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div id="layoutdiv1">
        <h1>
          Mohamed Meghji's Portfolio
          <img src="../assets/logo.png" alt="Logo" />
        </h1>
        <nav id="layoutnav1">
          {['home', 'about', 'project', 'services', 'contact'].map((page) => (
            <Link
              key={page}
              id='layerlink1'
              to={`/${page}`}
              style={{ margin: '0 10px' }} 
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          ))}
        </nav>
      </div>
      <hr />
    </>
  );
};

export default Layout;
