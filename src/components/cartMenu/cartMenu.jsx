import { useRecoilState } from 'recoil'
import { cartState } from '@/atoms/cart'

import styles from './cartMenu.module.css'

import CartOptions from '../cartOptions/cartOptions';

function CartMenu() {
  const [cart, setCart] = useRecoilState(cartState)

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos))
  }

  return (
    <div className={styles.menu}>
      <div className={styles.options}>
        {
          cart.length === 0 && <p>Nenhum produto no seu carrinho.</p>
        }
        {
          cart.map((cartInfo, pos) =>
            <CartOptions
              image={cartInfo.image}
              title={cartInfo.name}
              price={cartInfo.price}
              onRemove={() => handleRemoveProduct(pos)}
              key={`cart-info-${pos}`}
            />
          )
        }
      </div>
      <div className={styles.priceline}>
        <h2>Total</h2>
        <h2 className={styles.price}>
          R${cart.reduce((prev, current) => prev + current.price, 0).toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default CartMenu;