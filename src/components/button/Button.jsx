import styles from './button.module.css'

export default function Button({
    children,
    onClick
}) {
    return (
        <button
            onclick={onClick}
            className={styles.button}
        >

            {children}

        </button>
    )
}