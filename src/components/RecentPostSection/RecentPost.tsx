import React from "react";
import styles from "./RecentPost.module.css";
import Link from "next/link";

const RecentPost = () => {
  return (
    <section className={styles.recentSection}>
      <div className={styles.recentSectionMain}>
        <div className={styles.recentTopSection}>
          <h2>Recent Posts</h2>
          <Link href={"/blogs"} className={styles.underlineLink}>
            View all
          </Link>
        </div>
        <div className={styles.recentCardSection}>
          {cardData.map((card, index) => (
            <div key={index}>
              <h2>{card.title}</h2>
              <div className={styles.cardDetail}>
                <span className={styles.borderRight}>{card.date}</span>
                <span>{card.categories}</span>
              </div>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const cardData = [
  {
    title: "Making a design system from scratch",
    date: "12 Feb 2020",
    categories: "Design, Pattern",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "Creating a Robust Frontend Architecture",
    date: "15 March 2021",
    categories: "Architecture, Frontend",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default RecentPost;
