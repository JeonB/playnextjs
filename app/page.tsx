import React from "react";
import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";
export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>개쩌는 음식들을 경험해보세요!</h1>
            <p>전 세계 음식을 맛 보고 공유하기123123</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">커뮤니티</Link>
            <Link href="/meals">음식 맛 보러가기</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food는 미식가들이 좋아하는 요리법을 전 세계와 공유할 수
            있는 플랫폼입니다. 새로운 요리를 발견하고 다른 음식 애호가들과
            교류할 수 있는 장소입니다.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food는 미식가들이 좋아하는 요리법을 전 세계와 공유할 수
            있는 플랫폼입니다. 새로운 요리를 발견하고 다른 음식 애호가들과
            교류할 수 있는 장소입니다.
          </p>
          <p>
            NextLevel Food는 새로운 요리를 발견하고 다른 음식 애호가들과 소통할
            수 있는 장소입니다.
          </p>
        </section>
      </main>
    </>
  );
}
