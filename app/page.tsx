import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/header";
export default function Home() {
  console.log("Executing Home component...");
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
