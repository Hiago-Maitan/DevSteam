import Image from 'next/image';

import styles from './cartOptions.module.css'

function CartOptions() {
  return ( 
    <div className={styles.option}>
      <Image src={`/products/league-of-legends.jpg`} width={62} height={74}/>
      <div className={styles.info}>
        <h3 className={styles.text}>League of Legends</h3>
        <h3 className={styles.price}>R$99,99</h3>
        <p className={styles.remove}>remover</p>
      </div>
    </div>
  );
}

export default CartOptions;