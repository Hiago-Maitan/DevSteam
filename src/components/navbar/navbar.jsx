import styles from "./navbar.module.css"

import Logo from "../logo/logo"
import Input from "../forms/input/input"
import CartButton from "../cartButton/cartButton"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Input type="text" placeholder="Buscar"/>
      <CartButton/>
    </nav>
  )
}