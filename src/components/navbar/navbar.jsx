import { AiOutlineShoppingCart } from "react-icons/ai"
import styles from "./navbar.module.css"

import Logo from "../logo/logo"
import Input from "../forms/input/input"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Input type="text" placeholder="Buscar"/>
      <AiOutlineShoppingCart size={40} />
    </nav>
  )
}