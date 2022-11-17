import styles from './Button.module.css';
export function Button(props) {
  const { children, disabled = false } = props;
  return (
    <button {...props} disabled={disabled} className={styles.button}>
      {children}
    </button>
  );
}
