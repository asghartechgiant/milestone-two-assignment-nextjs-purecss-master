import React from "react";
import styles from "./Blog.module.css";

const BlogCard = ({
  title,
  date,
  categories,
  description,
}: {
  title: string;
  date: string;
  categories: string;
  description: string;
}) => (
  <div className={styles.card}>
    <h2>{title}</h2>
    <div className={styles.cardDetail}>
      <span className={styles.borderRight}>{date}</span>
      <span>{categories}</span>
    </div>
    <p>{description}</p>
  </div>
);

const BlogPage = () => {
  return (
    <section className={styles.recentSection}>
      <div className={styles.recentSectionMain}>
        <div className={styles.recentTopSection}>
          <h2>Blog</h2>
        </div>
        <div className={styles.recentCardSection}>
          {cardData.map((card, index) => (
            <BlogCard key={index} {...card} />
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
  {
    title: "Exploring the Future of Web Development",
    date: "20 April 2022",
    categories: "Web Development, Future Trends",
    description:
      "In this post, we delve into the upcoming trends in web development and how they will shape the future of the industry. Stay ahead by learning what's next.",
  },
  {
    title: "Understanding the Basics of CSS Grid",
    date: "5 May 2023",
    categories: "CSS, Layout",
    description:
      "CSS Grid is a powerful layout system that allows developers to create complex layouts with ease. This post covers the fundamentals and best practices for using CSS Grid effectively.",
  },
];

export default BlogPage;
