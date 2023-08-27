import "./Cards.css"
import backgroundLarge from '../assets/bg-main-desktop.png'
import backgroundSmall from '../assets/bg-main-mobile.png'

export default function Cards() {
    return (
        <div>
            <img src={backgroundLarge} alt="" id="large-bg" />
            <img src={backgroundSmall} alt="" id="small-bg" />
        </div>
    )
}
