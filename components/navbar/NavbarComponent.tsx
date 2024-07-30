"use client";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  MegaMenu,
  Navbar,
  NavbarBrand,
  NavbarLink,
  TextInput,
} from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { menuList } from "./Menu";
import { usePathname, useRouter } from "next/navigation";
import { FaFacebook, FaLanguage, FaLinkedin } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { RxDividerVertical } from "react-icons/rx";
import { PiLineVerticalThin } from "react-icons/pi";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { IoLanguageSharp } from "react-icons/io5";

type MenuItem = {
  name: string;
  path: string;
  active: boolean;
};

export function NavbarComponent() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuItem[]>(menuList);
  const router = useRouter();

  const auth = "manysin";

  const updateMenu = (path: string) => {
    const newMenu = menu.map((item) => {
      if (path === item.path) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });
    setMenu(newMenu);
  };

  return (
    <>
      <div className="bg-blue-600 h-12 flex items-center">
        <div className="container mx-auto flex justify-between">
          <h6 className="font-semibold text-gray-50">Wecome to E-SToRE</h6>
          <div className="flex items-center text-gray-50 gap-4">
            <FaFacebook />
            <FaLinkedin />
            <SiTelegram />
            {/* <RiInstagramFill />
            <RiMailFill /> */}
          </div>
        </div>
      </div>
      <Navbar className="h-20 flex items-center">
        <div className="container mx-auto flex justify-between">
          <NavbarBrand href="/">
            <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white text-orange-900">
              E-STORE
            </span>
          </NavbarBrand>
          <TextInput
            id="small"
            type="text"
            sizing="md"
            className="max-w-6xl w-full mx-6"
          />
          <div className="flex md:order-2">
            {auth ? (
              <div className="flex items-center gap-3">
                <IoLanguageSharp />
                <button
                  type="button"
                  className="me-2"
                  onClick={() => router.push("/login")}
                >
                  Login
                </button>
                <button type="button">Register</button>
                <PiLineVerticalThin />
                <RiShoppingBag2Fill />
              </div>
            ) : (
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img="https://i.pinimg.com/236x/85/72/0f/85720fb80316da6811aef3fd62e9b949.jpg"
                    rounded
                  />
                }
              >
                <DropdownHeader>
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">
                    name@flowbite.com
                  </span>
                </DropdownHeader>
                <DropdownItem>Dashboard</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Earnings</DropdownItem>
                <DropdownDivider />
                <DropdownItem>Sign out</DropdownItem>
              </Dropdown>
            )}
          </div>
        </div>
      </Navbar>
      <hr />
      <div className="">
        <MegaMenu className="py-6">
          <Navbar.Toggle />
          <Navbar.Collapse>
            {menu.map((item, index) => (
              <NavbarLink
                className="text-lg"
                key={index}
                as={Link}
                active={item.path === pathname} // You can use item.path === pathname instead of using updateMenu
                // active={item.active}
                href={item.path}
                // onClick={() => updateMenu(item.path)}
              >
                {item.name}
              </NavbarLink>
            ))}
          </Navbar.Collapse>
        </MegaMenu>
      </div>
    </>
  );
}
