import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "모든 요리",
  description: "커뮤니티에서 제공되는 맛있는 요리를 둘러보세요.",
};
async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}
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
        {/* Suspense는 데이터가 완전히 불러와질 때까지 대체 데이터를 보여줌 */}
        <Suspense
          fallback={<p className={classes.loading}>식사를 불러오는 중...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};
export default MealsPage;
