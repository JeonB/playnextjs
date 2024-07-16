import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export interface Meal {
  id: number;
  slug: string;
  title: string;
  image:
    | string
    | {
        [x: string]: any;
        name: string;
        src: string;
      };
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export default function MealsGrid({ meals }: { meals: Meal[] }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
