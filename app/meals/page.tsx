import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          맛있는 음식들, created{" "}
          <span className={classes.highlight}> by you </span>
        </h1>
        <p>제일 좋아하는 요리를 골라 스스로 요리해보세요. 쉽고 재밌답니다! </p>
        <p className={classes.cta}>
          <Link href="/meals/share">최애 레시피 공유</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
};
export default MealsPage;
