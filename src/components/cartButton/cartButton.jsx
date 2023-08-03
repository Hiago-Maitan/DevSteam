import styles from './cartButton.module.css'
import { AiOutlineShoppingCart } from "react-icons/ai"

import CartMenu from '../cartMenu/cartMenu';
import { useState } from 'react';

function CartButton({cart, onRemove}) {
   const [open, setOpen] = useState(false)

   return (
      <div>
         <AiOutlineShoppingCart
            className={styles.icon}
            size={40}
            onClick={() => { setOpen(!open) }}
         />
         {open && <CartMenu cart={cart} onRemove={onRemove} />}
      </div>
   );
}

export default CartButton;