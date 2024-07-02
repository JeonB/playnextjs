import { Meal } from "@/components/meals/meals-grid";
import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //   throw new Error("Failed to fetch meals");
  const meals = db.prepare("SELECT * FROM meals").all() as Meal[]; // all() 여러개의 데이터를 가져온. get()은 하나만 가져옴. run()은 데이터를 생성함.
  return meals;
};
