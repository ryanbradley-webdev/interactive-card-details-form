import { useState } from 'react';
import Button from '../button/Button';
import Input from '../input/Input';
import styles from './form.module.css'
import Success from '../success/Success';

export default function Form({
    name,
    setName,
    number,
    setNumber,
    month,
    setMonth,
    year,
    setYear,
    cvc,
    setCvc
}) {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const updateNumber = e => {
        const number = e.target.value

        if (number.length <= 16) {
            setNumber(number)
        }
    }
    
    const updateMonth = e => {
        const month = e.target.value

        if (month.length <= 2) {
            setMonth(e.target.value)
        }
    }

    const updateYear = e => {
        const year = e.target.value

        if (year.length <= 2) {
            setYear(e.target.value)
        }
    }

    const updateCvc = e => {
        const cvc = e.target.value

        if (cvc.length <= 3) {
            setCvc(e.target.value)
        }
    }

    const resetForm = () => {
        setName('')
        setNumber('')
        setMonth('')
        setYear('')
        setCvc('')
        setSuccess(false)
    }

    function handleSubmit(e) {
        e.preventDefault()

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            setSuccess(true)
        }, 1500)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form}
            data-loading={loading}
        >

            {
                success ? (
                    <Success
                        onClick={resetForm}
                    />
                ) : (
                    <>
                    
                        <label htmlFor="name">

                            <span>
                                CARDHOLDER NAME
                            </span>

                            <Input
                                state={name}
                                updateState={e => setName(e.target.value)}
                                name='name'
                                placeholder='e.g. Jane Appleseed'
                            />

                        </label>

                        <label htmlFor="number">

                            <span>
                                CARD NUMBER
                            </span>

                            <Input
                                state={number}
                                updateState={updateNumber}
                                name='number'
                                placeholder='e.g. 1234 5678 9123 0000'
                            />

                        </label>

                        <div
                        className={styles.details}
                        >

                            <div
                                className={styles.expiration}
                            >

                                <label>

                                    <span>
                                        EXP. DATE (MM/YY)
                                    </span>

                                </label>

                                <Input
                                    state={month}
                                    state2={year}
                                    updateState={updateMonth}
                                    updateState2={updateYear}
                                    name='month'
                                    name2='year'
                                    placeholder='MM'
                                    placeholder2='YY'
                                />

                            </div>

                            <label htmlFor="cvc">

                                <span>
                                    CVC
                                </span>

                                <Input
                                    state={cvc}
                                    updateState={updateCvc}
                                    name='cvc'
                                    placeholder='e.g. 123'
                                />

                            </label>

                        </div>

                        <Button>
                            Confirm
                        </Button>
                    
                    </>
                )
            }

        </form>
    )
}
