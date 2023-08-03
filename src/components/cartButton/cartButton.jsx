import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { cartState } from '../../atoms/cart'

import { AiOutlineShoppingCart } from "react-icons/ai"
import styles from './cartButton.module.css'

import CartMenu from '../cartMenu/cartMenu';

function CartButton() {
   const cart = useRecoilValue(cartState)
   const [open, setOpen] = useState(false)

   return (
      <div className={styles.cartButton} onClick={() => { setOpen(!open) }}>
         <AiOutlineShoppingCart
            size={40}
         />
         {cart.length > 0 && <div className={styles.quatity}>{cart.length}</div>}

         {open && <CartMenu />}
      </div>
   );
}

export default CartButton;