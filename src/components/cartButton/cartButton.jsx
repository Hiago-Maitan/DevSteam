import styles from './cartButton.module.css'
import { AiOutlineShoppingCart } from "react-icons/ai"

function CartButton() {
  return ( 
    <div>
       <AiOutlineShoppingCart 
       className={styles.icon} 
       size={40} 
       onClick={()=>{console.log('clickkk')}}
       />
    </div>
   );
}

export default CartButton;