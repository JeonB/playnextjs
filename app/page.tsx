import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/header";
export default function Home() {
  console.log("Executing Home component...");
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <div className="post">
        <p>
          <Link href="/meals">맛집</Link>
        </p>
        <p>
          <Link href="/meals/share">맛집 공유</Link>
        </p>
        <p>
          <Link href="/community">커뮤니티</Link>
        </p>
      </div>
    </main>
  );
}
