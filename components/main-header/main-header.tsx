import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="접시위음식" priority></Image>NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">식사 탐방</Link>
            </li>
            <li>
              <Link href="/community">음식 커뮤니티</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
