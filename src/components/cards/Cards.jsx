import CardFront from '../../assets/bg-card-front.png'
import CardBack from '../../assets/bg-card-back.png'
import styles from './cards.module.css'
import { useEffect, useState } from 'react'

export default function Cards({
    name,
    number,
    month,
    year,
    cvc
}) {
    const [formattedName, setFormattedName] = useState('Jane Appleseed')
    const [formattedNumber, setFormattedNumber] = useState('0000 0000 0000 0000')
    const [formattedMonth, setFormattedMonth] = useState('00')
    const [formattedYear, setFormattedYear] = useState('00')
    const [formattedCvc, setFormattedCvc] = useState('000')

    useEffect(() => {
        setFormattedMonth(month.padStart(2, '0'))
        setFormattedYear(year.padStart(2, '0'))
        setFormattedCvc(cvc.padStart(3, '0'))
    }, [month, year, cvc])

    useEffect(() => {
        const newNumber = number.padStart(16, '0')

        setFormattedNumber(
            newNumber.slice(0, 4)
            + ' ' +
            newNumber.slice(4, 8)
            + ' ' +
            newNumber.slice(8, 12)
            + ' ' +
            newNumber.slice(12, 16)
        )
    }, [number])

    useEffect(() => {
        setFormattedName(name || 'Jane Appleseed')
    }, [name])

    return (
        <div
            className={styles.card_container}
        >

            <div
                className={styles.cards}
            >

                <div>

                    <img src={CardBack} alt='' />

                    <span
                        className={styles.cvc}
                    >
                        {formattedCvc}
                    </span>

                </div>

                <div>

                    <img src={CardFront} alt='' />

                    <div
                        className={styles.card_details}
                    >

                        <h3>
                            {formattedNumber}
                        </h3>

                        <div>

                            <span>
                                {formattedName.toUpperCase()}
                            </span>

                            <span>
                                {formattedMonth}/{formattedYear}
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
