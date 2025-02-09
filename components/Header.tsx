"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="my-10 text-white flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg"  alt="logo" height={40} width={40} />
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/library"
            className={cn(
              "text-base capitalize cursor-pointer",
              pathname === "/library" ? "text-light-200" : "text-light-100"
            )}
          >
            library
          </Link>
        </li>
        <li></li>
      </ul>
    </header>
  );
};

export default Header;
