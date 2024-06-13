import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  console.log("Executing Home component...");
  return (
    <main>
      <Image
        src="/logo.png"
        alt="A server surrounded by magic sparkles."
        width={100}
        height={100}
      />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
}
