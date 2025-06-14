// src/components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout({ showHeader = true }) {
  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && <Header />}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}