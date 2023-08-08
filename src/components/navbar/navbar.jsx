import styles from "./navbar.module.css"

import Logo from "../logo/logo"
import CartButton from "../cartButton/cartButton"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <h4 className={styles.warning}>valores meramente ilustrativos</h4>
      <CartButton/>
    </nav>
  )
}