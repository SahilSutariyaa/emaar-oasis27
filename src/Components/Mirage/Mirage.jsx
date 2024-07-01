import React from 'react'
import Style from './Mirage.module.css'
const Mirage = () => {
    return (
        <>
            <div className={ Style.main } id='price'>
                <div className={ Style.mirage }>
                    <h2> MIRAGE AT THE OASIS</h2>
                    <p>A VISION OF LUXURIOUS SERENITY</p>
                </div>
                <div className={ Style.box }>
                    <div className={Style.icon}>
                        <i class="fa-solid fa-hotel"></i>
                        <h5>STARTING PRICE 15.8 MN AED</h5>
                    </div>
                    <div className={Style.icon}>
                        <i class="fa-solid fa-hotel"></i>
                        <h5>6-BEDROOM VILLAS</h5>
                    </div>
                    <div className={Style.icon}>
                        <i class="fa-solid fa-hotel"></i>
                        <h5>5-BEDROOM VILLAS</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mirage
