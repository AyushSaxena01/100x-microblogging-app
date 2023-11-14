import React from "react";
import logo from "../../assets/100.svg";
import X from "../../assets/Group 27162.svg";
export default function logo100x() {
  return (
    <>
      <div classname="flex justify-center items-end gap-0.4">
        <img classname="w-10.5 h-4.5" src={logo} alt />
        <img classname="w-3.2 h-3.3" src={X} alt />
      </div>
    </>
  );
}
