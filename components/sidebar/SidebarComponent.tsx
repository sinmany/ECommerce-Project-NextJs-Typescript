"use client";

import { Sidebar } from "flowbite-react";
import React, { useState } from "react";
import { menuList } from "./Menu";
import Link from "next/link";

type MenuItem = {
  name: string;
  path: string;
  icon: React.ElementType;
};

export function SidebarComponent() {
  const [menu, setMenu] = useState<MenuItem[]>(menuList);
  console.log(menu);
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.ItemGroup>
        {menuList.map((item, index) => (
          <Sidebar.Item key={index} as={Link} href={item.path} icon={item.icon}>
            {item.name}
          </Sidebar.Item>
        ))}
      </Sidebar.ItemGroup>
    </Sidebar>
  );
}
