// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Dev } from './pages/Dev';

export default function App() {
  return (
    <BrowserRouter>
      {/* The Navbar is outside of <Routes>, so it displays on every single page */}
      <Navbar />

      {/* The main content area wraps our route switcher */}
      <main style={{ color: '#f0f6fc' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dev" element={<Dev />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}