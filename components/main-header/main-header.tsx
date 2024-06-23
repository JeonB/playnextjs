import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

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
              <NavLink href="/meals">음식 맛 보러가기</NavLink>
            </li>
            <li>
              <NavLink href="/community">커뮤니티</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
