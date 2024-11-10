import CardSection from "@/components/CardSection/CardSection";
import styles from "./Work.module.css";
import React from "react";
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
  {
    imgSrc: "/work4.png",
    title: "Enhancing User Experience",
    date: "2022",
    category: "User Experience",
    description:
      "Vivamus in libero at leo pharetra consectetur. Phasellus aliquet, odio ac laoreet gravida, nunc eros pharetra arcu, a vulputate risus velit ut ex.",
  },
];

const WorkPage = () => {
  return (
    <section className={styles.featureWork}>
      <h2>featured works</h2>
      <CardSection cardData={cardData} />
    </section>
  );
};

export default WorkPage;
