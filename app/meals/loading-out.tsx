import classes from "./loading.module.css";
export default function MealsLoadingPage() {
  return (
    <>
      <p className={classes.loading}>식사를 불러오는 중...</p>
    </>
  );
}
