import Button from '../button/Button';
import Input from '../input/Input';
import styles from './form.module.css'

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

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form}
        >

            <label htmlFor="name">

                <span>
                    CARDHOLDER NAME
                </span>

                <Input
                    state={name}
                    updateState={e => setName(e.target.value)}
                    type='text'
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
                    type='text'
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

                    <input
                        type="text"
                        name="expiration"
                        id="month"
                        placeholder='MM'
                        value={month}
                        onChange={updateMonth}
                        required
                        aria-invalid={false}
                    />

                    <input
                        type="text"
                        name="expiration"
                        id="year"
                        placeholder='YY'
                        value={year}
                        onChange={updateYear}
                        required
                        aria-invalid={false}
                    />

                    <p>
                        Can&apos;t be blank
                    </p>

                </div>

                <label htmlFor="cvc">

                    <span>
                        CVC
                    </span>

                    <input
                        type="text"
                        name="cvc"
                        id="cvc"
                        placeholder='e.g. 123'
                        value={cvc}
                        onChange={updateCvc}
                        required
                        aria-invalid={false}
                    />

                    <p>
                        Can&apos;t be blank
                    </p>

                </label>

            </div>

            <Button>
                Confirm
            </Button>

        </form>
    )
}
