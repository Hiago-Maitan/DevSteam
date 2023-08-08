import Image from 'next/image';
import styles from './saleCard.module.css'
import Button from '@/components/forms/button/button';
import Link from 'next/link';

function SaleCard({ image, discount, fullPrice, discountPrice, onAdd, adress }) {
  return (
    <div className={styles.saleCard}>
      <Link href={`https://${adress}`}> <Image src={`/products/${image}`} alt={image} width={250} height={300} /> </Link>
      
      <div className={styles.info}>
        <h3 className={styles.title}>Oferta Exclusiva</h3>
        <div className={styles.priceCard}>
          <div className={styles.percent}>-{discount}%</div>
          <div className={styles.price}>
            <p>R${fullPrice}</p>
            <h4>R${discountPrice}</h4>
          </div>
        </div>
        <Button onClick={onAdd} fullWidth>Adicionar ao carrinho</Button>
      </div>
    </div>
  );
}

export default SaleCard;