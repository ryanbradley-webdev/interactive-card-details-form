import './Form.css'

export default function Form() {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">CARDHOLDER NAME</label>
            <input type="text" name="name" id="name" placeholder='e.g. Jane Appleseed' required />
            <label htmlFor="number">CARD NUMBER</label>
            <input type="text" name="number" id="number" placeholder='e.g. 1234 5678 9123 0000' required />
            <label htmlFor="expiration">EXP. DATE (MM/YY)</label>
            <input type="text" name="expiration" id="month" placeholder='MM' required />
            <input type="text" name="expiration" id="year" placeholder='YY' required />
            <label htmlFor="cvc">CVC</label>
            <input type="text" name="cvc" id="cvc" placeholder='e.g. 123' required />
            <button type="submit">Confirm</button>
        </form>
    )
}
