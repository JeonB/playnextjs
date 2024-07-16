"use server";

import { Meal } from "@/components/meals/meals-grid";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

function isInvalidText(text: string) {
  return !text || text.trim() === "";
}
export const shareMeal = async (
  prevState: any,
  formData: { get: (arg0: string) => any }
) => {
  const meal = {
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
  } as Meal;
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.creator) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    (meal.image instanceof File && meal.image.size === 0)
  ) {
    return {
      message: "요리 데이터 생성 실패",
    };
  }
  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
};
