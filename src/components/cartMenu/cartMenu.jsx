import styles from './cartMenu.module.css'

import CartOptions from '../cartOptions/cartOptions';

function CartMenu() {
  return (
    <div className={styles.menu}>
      <div className={styles.options}>
        <CartOptions />
        <CartOptions />
        <CartOptions />
      </div>
      <div className={styles.priceline}>
        <h2>Total</h2>
        <h2 className={styles.price}>R$999,99</h2>
      </div>
    </div>
  );
}

export default CartMenu;