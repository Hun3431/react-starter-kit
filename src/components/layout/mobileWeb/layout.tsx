import React from "react";
import LeftScreenContents from "./leftScreenContents";
import RightScreenContents from "./rightScreenContents";

interface props {
  children: React.ReactNode;
}

const Layout = ({ children }: props) => {
  return (
    <div
      className="relative grid sm:grid-cols-3 sm:grid-cols-[1fr_450px_1fr] w-full min-h-dvh h-auto m-0"
      style={{ scrollbarGutter: "stable" }}
      // style={{ minHeight: "100dvh" }}
    >
      {/* Left Screen */}
      <div
        className="sm:col-start-1 sm:flex hidden fixed left-0 top-0 h-full items-center justify-end pr-[100px] border-r"
        style={{ width: "calc(50vw - 225px)" }}
      >
        <LeftScreenContents />
      </div>
      {/* Mobile Screen */}
      <div className="sm:col-start-2 sm:w-[450px] w-full h-full bg-white">
        {children}
      </div>
      {/* Right Screen */}
      <div
        className="sm:col-end-1 sm:flex hidden fixed right-0 top-0 h-full items-center justify-start pl-[100px] border-l"
        style={{ width: "calc(50vw - 225px)" }}
      >
        <RightScreenContents />
      </div>
    </div>
  );
};

export default Layout;
