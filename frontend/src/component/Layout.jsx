// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar'; // Import the Navbar

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div> {/* This will render the content of each page */}
    </>
  );
};

export default Layout;
