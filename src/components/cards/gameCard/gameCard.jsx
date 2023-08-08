import Button from '@/components/forms/button/button';
import Image from 'next/image';
import styles from './gameCard.module.css'
import Link from 'next/link';

function GameCard({ onAdd, adress }) {
  return (
    <div className={styles.gameCard}>
      <Link href={`https://${adress}`}>
        <Image className={styles.image} src='/products/counter-strike.jpg' width={305} height={145} />
      </Link>
      <div className={styles.info}>
        <h3>Counter Strike - global offensive</h3>
        <p>Ação, estratégia, multijogador</p>
        <div className={styles.price}>
          <h2>R$99,90</h2>
          <Button onClick={onAdd}>Adicionar ao carrinho</Button>
        </div>
      </div>
    </div>
  );
}

export default GameCard;