import { Meal } from "@/components/meals/meals-grid";
import sql from "better-sqlite3";
import xss from "xss";
import slugify from "slugify";
import fs from "node:fs";
const db = sql("meals.db");

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

export async function saveMeal(meal: Meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  let filename;
  if (meal.image instanceof File) {
    const extension = meal.image.name.split(".").pop();
    filename = `${meal.slug}.${extension}`;
  } else {
    // meal.image가 예상한 유형이 아닐 때의 처리
    throw new Error("Invalid image type");
  }

  const stream = fs.createWriteStream(`public/images/${filename}`);
  if (meal.image instanceof File) {
    const bufferedImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) {
        throw new Error("error writing image to file");
      }
    });
  } else {
    // meal.image가 Blob 또는 File 객체가 아닐 때의 처리
    throw new Error("meal.image must be a File");
  }
  meal.image = `/images/${filename}`;

  db.prepare(
    `
    INSERT INTO meals ( title, summary, instructions, creator, creator_email, image,slug)
    VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)`
  ).run(meal);
}
