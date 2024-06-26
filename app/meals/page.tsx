import Link from "next/link";
import classes from "./page.module.css";

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          맛있는 음식들, created{" "}
          <span className={classes.highligh}> by you </span>
          <p>
            제일 좋아하는 요리를 골라 스스로 요리해보세요. 쉽고 재밌답니다!{" "}
          </p>
          <p className={classes.cta}>
            <Link href="/meals/share">최애 레시피 공유</Link>
          </p>
        </h1>
      </header>
      <main className={classes.main}>
        <h1>Meals</h1>
      </main>
    </>
  );
};
export default MealsPage;
