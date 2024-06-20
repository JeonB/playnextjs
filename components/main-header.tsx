import Link from "next/link";
import logoImg from "@/assets/logo.png";
export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="접시위음식"></img>NextLevel Food
      </Link>
      <nav>
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
  );
}
