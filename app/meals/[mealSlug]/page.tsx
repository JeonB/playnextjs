import { NextPage } from "next";
import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meal";

interface MealSharePageProps {
  params: {
    mealSlug: string;
  };
}

const MealDetailsPage: NextPage<MealSharePageProps> = async ({ params }) => {
  const meal = await getMeal(params.mealSlug);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${"EMAIL"}`}>NAME</a>
          </p>
          <p className={classes.summary}>Summary</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: "..." }}
        >
          {params.slug}
        </p>
      </main>
    </>
  );
};
export default MealDetailsPage;
