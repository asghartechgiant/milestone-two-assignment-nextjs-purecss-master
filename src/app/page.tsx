import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection/HeroSection";
import RecentPost from "@/components/RecentPostSection/RecentPost";
import FeatureWork from "@/components/FeatureWorkSection/FeatureWork";

export default function Home() {
  return (
    <main className={styles.mainSection}>
      <HeroSection />
      <RecentPost />
      <FeatureWork />
    </main>
  );
}
