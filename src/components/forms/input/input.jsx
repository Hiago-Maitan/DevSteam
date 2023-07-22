import styles from './input.module.css'

function Input({ fullWidth, ...props }) {
  return (
    <div>
      <input
        className={`${styles.input} ${fullWidth && styles.fullWidth}`}
        {...props} />
    </div>
  );
}

export default Input;