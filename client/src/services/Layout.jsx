import React from 'react';
import Header from '../components/Lander/Header';
import Footer from '../components/Lander/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='bg-slate-900 min-h-screen p-4 flex-col justify-between items-center'>
      <Header />
      <main style={{ padding: '20px' }}>
        <Outlet /> {/* This renders the current page content */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
