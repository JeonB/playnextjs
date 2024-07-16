import { Meal } from "@/components/meals/meals-grid";
import sql from "better-sqlite3";
import xss from "xss";
import slugify from "slugify";
import fs from "node:fs";
const db = sql("meals.db");

export interface Meals {
  id: number;
  slug: string;
  title: string;
  image:
    | string
    | {
        name: string;
      };
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //   throw new Error("Failed to fetch meals");
  const meals = db.prepare("SELECT * FROM meals").all() as Meal[]; // all() 여러개의 데이터를 가져 옴. get()은 하나만 가져옴. run()은 데이터를 생성함.
  return meals;
};

export function getMeal(slug: string) {
  const meal = db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug) as Meal;
  return meal;
}

export async function saveMeal(meal: Meals) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("error");
    }
  });

  meal.image = `/images/${filename}`;
}
