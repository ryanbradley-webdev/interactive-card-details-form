import backgroundLarge from '../../assets/bg-main-desktop.png'
import backgroundSmall from '../../assets/bg-main-mobile.png'
import CardFront from '../../assets/bg-card-front.png'
import CardBack from '../../assets/bg-card-back.png'
import { useMediaQuery } from "usehooks-ts"
import styles from './cards.module.css'

export default function Cards() {
    const largeScreen = useMediaQuery('(min-width: 480px)')

    return (
        <div
            className={styles.card_container}
        >
            <img src={largeScreen ? backgroundLarge : backgroundSmall} alt="" />

            <div
                className={styles.cards}
            >

                <div>

                    <img src={CardBack} alt='' />

                </div>

                <div>

                    <img src={CardFront} alt='' />

                </div>

            </div>

        </div>
    )
}
