import Button from '../button/Button'
import styles from './success.module.css'

export default function Success({
    onClick
}) {
    return (
        <>

            <img
                src='/icon-complete.svg'
                alt=''
                height={80}
                width={80}
                className={styles.img}
            />

            <div>

                <h1
                    className={styles.h1}
                >
                    THANK YOU!
                </h1>

                <h2
                    className={styles.h2}
                >
                    We&apos;ve added your card details
                </h2>

            </div>

            <Button
                type='button'
                onClick={onClick}
            >
                Continue
            </Button>

        </>
    )
}