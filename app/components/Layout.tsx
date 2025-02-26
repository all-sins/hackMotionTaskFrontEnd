// components/Layout.tsx
import React from "react";
import {
  ScrollRestoration,
  Scripts,
} from "@remix-run/react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen p-10">
      
      <header className="flex flex-row border-2 justify-between border-red-500">
        <img src="/img/Logo (2).png" alt="Logo" className="h-8" />
        <h1 className="text-2xl">Evil Tailwind CSS Standard Double Config</h1>
      </header>
      
      <main className="flex-grow bg-gray-100 p-4">{children}</main>
      
      <footer className="p-4 bg-gray-800 text-white">
        <p>Footer content</p>
      </footer>
      
      <ScrollRestoration />
      <Scripts />
    </div>
  );
};

export default Layout;
