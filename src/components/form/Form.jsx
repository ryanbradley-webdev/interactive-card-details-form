import styles from './form.module.css'

export default function Form() {
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

                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder='e.g. Jane Appleseed'
                    required
                />

            </label>

            <label htmlFor="number">

                <span>
                    CARD NUMBER
                </span>

                <input
                    type="text"
                    name="number"
                    id="number"
                    placeholder='e.g. 1234 5678 9123 0000'
                    required
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
                        required
                    />

                    <input
                        type="text"
                        name="expiration"
                        id="year"
                        placeholder='YY'
                        required
                    />

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
                        required
                    />

                </label>

            </div>

            <button>
                Confirm
            </button>

        </form>
    )
}
