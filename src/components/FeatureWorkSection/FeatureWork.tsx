import React from "react";
import styles from "./FeatureWork.module.css";
import CardSection from "../CardSection/CardSection";
const FeatureWork = () => {
  return (
    <section className={styles.featureWork} style={{ margin: "40px auto" }}>
      <h2>featured works</h2>
      <CardSection cardData={cardData} />
    </section>
  );
};
const cardData = [
  {
    imgSrc: "/work1.png",
    title: "Designing Dashboards",
    date: "2020",
    category: "Dashboard",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    imgSrc: "/work2.png",
    title: "Developing a Design System",
    date: "2021",
    category: "Design System",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris venenatis velit vel eros ultricies, at sodales lorem consequat.",
  },
  {
    imgSrc: "/work3.png",
    title: "Creating Responsive UI",
    date: "2019",
    category: "UI/UX",
    description:
      "Nunc ullamcorper, nisl a dapibus fermentum, nisi ante fringilla nisi, at dictum velit eros a quam. Ut tincidunt bibendum diam a facilisis.",
  },
];
export default FeatureWork;
