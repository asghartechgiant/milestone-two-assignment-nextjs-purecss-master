"use client";
import React, { useState, useEffect } from "react";
import styles from "./Header.module.css"; // Adjust according to your CSS file path
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"; // Importing a close icon

const Header = () => {
  const [active, setActive] = useState(false);

  // Function to handle window resize
  const handleResize = () => {
    if (window.innerWidth > 600) {
      setActive(false); // Close the menu if the width exceeds 600px
    }
  };

  useEffect(() => {
    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        <li className={styles.listStyle}>
          <Link href={"/"}>home</Link>
        </li>
        <li className={styles.listStyle}>
          <Link href={"/work"}>works</Link>
        </li>
        <li className={styles.listStyle}>
          <Link href={"/blogs"}>blog</Link>
        </li>
        <li className={styles.listStyle}>
          <Link href={"/contact"}>contact</Link>
        </li>
      </ul>
      <GiHamburgerMenu
        onClick={() => setActive(!active)}
        className={styles.menu}
      />
      {active && (
        <div className={styles.mobileNav}>
          <div className={styles.closeButton} onClick={() => setActive(false)}>
            <AiOutlineClose size={30} /> {/* Close icon */}
          </div>
          <ul>
            <li className={styles.listStyle}>
              <Link href={"/"} onClick={() => setActive(false)}>
                home
              </Link>
            </li>
            <li className={styles.listStyle}>
              <Link href={"/work"} onClick={() => setActive(false)}>
                works
              </Link>
            </li>
            <li className={styles.listStyle}>
              <Link href={"/blogs"} onClick={() => setActive(false)}>
                blog
              </Link>
            </li>
            <li className={styles.listStyle}>
              <Link href={"/contact"} onClick={() => setActive(false)}>
                contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
