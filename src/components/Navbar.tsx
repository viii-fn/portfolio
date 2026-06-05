// src/components/Navbar.tsx
import React, { type CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const navStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    background: '#f0f6fc81',
    borderRadius: '2rem',
    backdropFilter: 'blur(4px) saturate(150%)',
    padding: '.5rem',
    margin: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    width: 'fit-content',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000
  };

  // This function takes an object containing 'isActive' and returns CSS styles
  const getLinkStyle = ({ isActive }: { isActive: boolean }): CSSProperties => {
    return {
      color: isActive ? '#1f1f1f' : '#f0f6fc', 
      textDecoration: 'none',
      fontWeight: isActive ? 'bold' : 'normal',
      transition: 'all 0.3s ease'
    };
  };

  return (
    <nav style={navStyle}>
      <NavLink to="/" style={getLinkStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </NavLink>
      <NavLink to="/media" style={getLinkStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
          <line x1="2" y1="20" x2="22" y2="20" />
          <line x1="5" y1="16" x2="19" y2="16" />
        </svg>
      </NavLink>
      <NavLink to="/dev" style={getLinkStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      </NavLink>
      <NavLink to="/contact" style={getLinkStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </NavLink>
    </nav>
  );
};