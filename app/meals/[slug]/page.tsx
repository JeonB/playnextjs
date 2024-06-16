import { NextPage } from "next";

interface MealSharePageProps {
  params: {
    slug: string;
  };
}

const MealSharePost: NextPage<MealSharePageProps> = ({ params }) => {
  return (
    <main>
      <h1>Meals Post</h1>
      <p>{params.slug}</p>
    </main>
  );
};
export default MealSharePost;
