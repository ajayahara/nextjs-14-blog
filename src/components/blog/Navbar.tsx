// components/Navbar.js

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const route = usePathname();
  const session = true;
  const isAdmin = true;

  useEffect(() => {
    setOpen(false);
  }, [route]);

  return (
    <div className="w-full flex justify-between items-center mt-2 z-50">
      <div className="text-2xl font-bold">
        <Link href="/">Hippo</Link>
      </div>
      <div
        className={
          open
            ? "flex flex-col gap-4 absolute top-0 left-0 mx-auto w-full h-screen bg-gray-800"
            : "hidden md:flex gap-4"
        }
      >
        <div className="md:hidden mt-2 px-2 flex justify-end w-full">
          <button onClick={() => setOpen(false)}>
            <Cross1Icon className="w-6 h-6 text-white" />
          </button>
        </div>
        {links.map((link, i) => (
          <Link
            key={i}
            className={`${
              route === link.path
                ? "text-gray-800 bg-white"
                : "hover:text-gray-800 hover:bg-white"
            } px-4 py-1.5 rounded`}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}

        {session && isAdmin ? (
          <Link
            className={`${
              route === "/admin"
                ? "text-gray-800 bg-white"
                : "hover:text-gray-800 hover:bg-white"
            } px-4 py-1.5 rounded`}
            href="/admin"
          >
            Admin
          </Link>
        ) : null}

        {session ? (
          <Link
            className={"text-gray-800 bg-white px-4 py-1.5 rounded"}
            href="/"
          >
            LogOut
          </Link>
        ) : (
          <>
            <Link
              className={`${
                route === "/login"
                  ? "text-gray-800 bg-white"
                  : "hover:text-gray-800 hover:bg-white"
              } px-4 py-1.5 rounded`}
              href="/login"
            >
              Login
            </Link>
            <Link
              className={`${
                route === "/register"
                  ? "text-gray-800 bg-white"
                  : "hover:text-gray-800 hover:bg-white"
              } px-4 py-1.5 rounded`}
              href="/register"
            >
              Register
            </Link>
          </>
        )}
      </div>
      <div className="md:hidden">
        <button onClick={() => setOpen(true)}>
          <HamburgerMenuIcon className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};
