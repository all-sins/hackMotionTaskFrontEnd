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
    <div>
      {/* <header className="hidden flex-row border-2 justify-between border-red-500 [@media(min-width:360px)]:block"> */}
      <header className="hidden flex-row border-2 pt-10 pl-10 justify-between border-red-500 sm:block">
        <img src="/img/Logo (2).png" alt="Logo" className="h-8 w-[213.48px]" />
        {/* <h1 className="text-2xl">Evil Tailwind CSS Standard Double Config</h1> */}
      </header>
      <div className="flex flex-col h-screen max-w-lg">
        
        <main className="flex flex-grow border-2 border-green-500 pl-4 pr-4 pt-8 pb-8">
          {children}
        </main>
        
        <footer className="h-[64px] gap-[10px] pt-[24px] pr-[16px] pb-[24px] pl-[16px] flex justify-center items-center bg-black text-white">
          <p className="text-[12px] leading-[16px] tracking-[0.32px]">Copyright 2023 © HackMotion | All Rights Reserved</p>
        </footer>
        
        <ScrollRestoration />
        <Scripts />
      </div>
    </div>
  );
};

export default Layout;

// width: 360;
// height: 64;
// gap: 10px;
// padding-top: 24px;
// padding-right: 16px;
// padding-bottom: 24px;
// padding-left: 16px;
