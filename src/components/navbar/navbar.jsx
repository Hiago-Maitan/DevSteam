import styles from "./navbar.module.css"
import { AiOutlineShoppingCart } from "react-icons/ai"
import Logo from "../logo/logo"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <input type="text" />
      <AiOutlineShoppingCart size={40} />
    </nav>
  )
}