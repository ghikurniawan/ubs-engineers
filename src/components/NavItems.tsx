"use client";

import Link from "next/link";
import { FC } from "react";
import { Input } from "./ui/input";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import { Mail, MapPin, Phone } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

interface NavItemsProps {}

const NavItems: FC<NavItemsProps> = () => {
  const pathName = usePathname();
  return (
    <>
    <div className="w-full hidden lg:block bg-primary px-4 py-2">
      <div className="flex justify-between font-bold text-white w-full max-w-screen-2xl mx-auto">
        <ul className="flex gap-1 md:gap-4 items-center">
          <Link href={"/"}>
            <li
              className={`${
                pathName === "/" ? "text-secondary" : "hover:text-secondary"
              } text-sm`}
            >
              HOME
            </li>
          </Link>
          <Separator orientation="vertical" />
          <Link href={"/about-us"}>
            <li
              className={`${
                pathName === "/about-us"
                  ? "text-secondary"
                  : "hover:text-secondary"
              } text-sm whitespace-nowrap`}
            >
              ABOUT US
            </li>
          </Link>
          <Separator orientation="vertical" />
          <Link href={"/services"}>
            <li
              className={`${
                pathName === "/services"
                  ? "text-secondary"
                  : "hover:text-secondary"
              }  text-sm whitespace-nowrap`}
            >
              SERVICES
            </li>
          </Link>
          <Separator orientation="vertical" />
          <Link href={"/projects"}>
            <li
              className={`${
                pathName === "/projects"
                  ? "text-secondary"
                  : "hover:text-secondary"
              } text-sm`}
            >
              PROJECTS
            </li>
          </Link>
          <Separator orientation="vertical" />
          <Link href={"/contact-us"}>
            <li
              className={`${
                pathName === "/contact-us"
                  ? "text-secondary"
                  : "hover:text-secondary"
              } text-sm whitespace-nowrap`}
            >
              CONTACT US
            </li>
          </Link>
        </ul>
        <div className="hidden lg:block">
          <Input
            type="text"
            placeholder="Search"
            className="border-none focus-visible:ring-none bg-foreground/30 placeholder:text-muted"
          />
        </div>
      </div>
    </div>
    <div className="md:hidden">
      <Drawer>
        <DrawerTrigger><Menu /></DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
          <div className="flex flex-col gap-4 mx-auto">
            <div className="flex gap-2 text-xs">
              <span className="text-primary">
                <MapPin size={24} />
              </span>
              <span className="leading-none text-primary">
                <b>168 Hale End Road,</b> <br />
                Woodford Green IG8 9LZ
              </span>
            </div>
            <div className="flex gap-2 text-xs ">
              <span className="text-primary">
                <Phone size={24} />
              </span>
              <span className="leading-none text-primary">
                <b>020 8616 0898</b> <br />
                Lorem ipsum
              </span>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="text-primary">
                <Mail size={24} />
              </span>
              <span className="leading-none text-primary">
                <b>info@ubs-engineers.co.uk</b> <br />
                Lorem ipsum
              </span>
            </div>
          </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
    </>
  );
};

export default NavItems;
