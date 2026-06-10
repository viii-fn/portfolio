// src/components/Navbar.tsx
import React, { type CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const navStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    background: '#16161656',
    borderRadius: '2rem',
    backdropFilter: 'blur(7px)',
    WebkitBackdropFilter: 'blur(7px)',
    padding: '.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    width: 'fit-content',
    bottom: '3%',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    boxShadow: '0 0 20px #ffffff20'
  };

  // This function takes an object containing 'isActive' and returns CSS styles
  const getLinkStyle = ({ isActive }: { isActive: boolean }): CSSProperties => {
    return {
      borderRadius: '1.4rem',
      color: isActive ? '#161616' : '#9b9b9b',
      background: isActive ? '#d1d1d1' : 'transparent',
      textDecoration: 'none',
      fontWeight: isActive ? 'bold' : 'normal',
      padding: isActive ? '0.5rem 2rem' : '0.5rem',
      transition: '.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      flexDirection: 'column',
      boxShadow: isActive ? '0 0 20px #ffffff40' : 'none'
    };
  };

  return (
    <nav style={navStyle}>
      <NavLink to="/" style={getLinkStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </NavLink>
      <NavLink to="/dev" style={getLinkStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
          <line x1="2" y1="20" x2="22" y2="20" />
          <line x1="5" y1="16" x2="19" y2="16" />
        </svg>
      </NavLink>
    </nav>
  );
};