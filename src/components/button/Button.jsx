import styles from './button.module.css'

export default function Button({
    type,
    disabled,
    children,
    onClick
}) {
    return (
        <button
            onClick={onClick}
            className={styles.button}
            type={type}
            disabled={disabled}
        >

            {children}

        </button>
    )
}