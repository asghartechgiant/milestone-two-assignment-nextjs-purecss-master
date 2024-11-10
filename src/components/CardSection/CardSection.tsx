import Image from "next/image";
import styles from "./CardSection.module.css";

interface CardData {
  imgSrc: string;
  title: string;
  date: string;
  category: string;
  description: string;
}

interface CardSectionProps {
  cardData: CardData[];
}

const CardSection = ({ cardData }: CardSectionProps) => {
  return (
    <div className={styles.cardSection}>
      {cardData.map((card, index) => (
        <div className={styles.cards} key={index}>
          <div className={styles.cardColumnOne}>
            <Image
              src={card.imgSrc}
              alt={card.title}
              height={180}
              width={300}
              layout="responsive" // Ensure responsiveness
              objectFit="cover" // Maintain aspect ratio
            />
          </div>
          <div className={styles.cardColumnTwo}>
            <h2>{card.title}</h2>
            <div>
              <span>{card.date}</span>
              <span>{card.category}</span>
            </div>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
