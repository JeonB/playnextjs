"use server";

export const shareMeal = async (formData: { get: (arg0: string) => any }) => {
  const meal = {
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
  };
  console.log(meal);
};
