import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Button from "./Button";

export default function Navber() {
  const menuItems = [
    {
      id: 1,
      content: "Home",
    },
    {
      id: 2,
      content: "App",
    },
    {
      id: 3,
      content: "Account",
    },
    {
      id: 4,
      content: "Export",
    },
  ];
  return (
    <nav>
      <div className="flex max-w-7xl items-center bg-[#F9FAFB] w-full justify-between py-1 mt-2 border px-4 rounded-md mx-auto">
        <Logo />

        <Menu items={menuItems} />

        <Button />
      </div>
    </nav>
  );
}
