"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";
import React from "react";
export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  const path = usePathname();
  return (
    // 현재 링크가 활성화되어 있으면 active 클래스를 추가. usePathname을 통해 현재 경로 확인 후 클래스 적용
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
