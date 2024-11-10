import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <Link href="https://facebook.com/">
          <Image src="/fb.png" alt="Facebook" width={40} height={40} />
        </Link>
        <Link href="https://www.instagram.com/">
          <Image src="/insta.png" alt="Instagram" width={40} height={40} />
        </Link>
        <Link href="https://x.com/">
          <Image src="/Group.png" alt="Twitter" width={40} height={40} />
        </Link>
        <Link href="linkedin.com/in/rehantechforge/">
          <Image src="/Linkedin.png" alt="LinkedIn" width={40} height={40} />
        </Link>
      </div>
      <p className={styles.copyright}>Copyright ©2020 All rights reserved</p>
    </footer>
  );
};

export default Footer;
