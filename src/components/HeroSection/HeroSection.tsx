import React from "react";
import styles from "./HeroSection.module.css";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      {/* Content above the image for mobile view */}
      <div className={styles.heroSectionItems}>
        <h1 className={styles.mainHeading}>
          Hi, I am Rehan,
          <br /> FullStack Web Developer
        </h1>
        <p className={styles.mainParagraph}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button className={styles.resumeButton}>
          <Link
            href={
              "https://docs.google.com/document/d/1ct2-1yynrzHYVpUontQmbfSM3SGV76Gjxsk8Xm7_zZY/edit?usp=sharing"
            }
          >
            Download Resume
          </Link>
        </button>
      </div>
      {/* Image will be on the right for desktop view */}
      <div className={`${styles.heroSectionItems} ${styles.imageContainer}`}>
        <Image
          src={"/avatar.jpeg"}
          className={styles.heroImage}
          alt="hero image"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default HeroSection;
