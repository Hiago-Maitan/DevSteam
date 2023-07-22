import styles from './button.module.css'

function Button({children, fullWidth}) {
  return ( 
    <button className={`${styles.button} ${fullWidth && styles.fullWidth}`}>{children}</button>
   );
}

export default Button;