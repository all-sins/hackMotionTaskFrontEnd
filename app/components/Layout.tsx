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
    <div className="flex flex-col items-center">
      {/* <header className="hidden flex-row border-2 justify-between border-red-500 [@media(min-width:360px)]:block"> */}
      <header className="hidden flex-row border-2 pt-10 pl-10 self-start border-red-500 sm:block">
        <img src="/img/Logo (2).png" alt="Logo" className="h-8 w-[213.48px]" />
        {/* <h1 className="text-2xl">Evil Tailwind CSS Standard Double Config</h1> */}
      </header>
      {/* <div className="h-screen max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"> */}
      <div className="h-screen">
        
        {/* <main className="flex flex-grow border-2 border-green-500 pl-4 pr-4 pt-8 pb-8"> */}
        <main className="flex border-2 border-green-500 pl-4 pr-4 pt-8 pb-8">
          {children}
        </main>
        
        <ScrollRestoration />
        <Scripts />
        <footer className="flex w-full items-center justify-center h-[64px] gap-[10px] pt-[24px] pr-[16px] pb-[24px] pl-[16px] bg-black text-white">
          <p className="text-[12px] leading-[16px] tracking-[0.32px]">Copyright 2023 © HackMotion | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
