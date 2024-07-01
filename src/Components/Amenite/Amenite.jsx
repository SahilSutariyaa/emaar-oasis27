import React from 'react'
import Style from './Amenite.module.css'
import img1 from '../img/g3.jpg'




const Amenite = () => {

    return (
        <>
            <div className={ Style.main } id='aminities'>
                <div className={ Style.amenite }>
                    <h2> MIRAGE AT THE OASIS</h2>
                    <p>A VISION OF LUXURIOUS SERENITY</p>
                </div>
                <div className={ Style.slide }>

                    <div className={ Style.phots }>
                        <img src={ img1 } alt="" />
                    </div>

                    <div className={ Style.activity }>
                        <div className={ Style.iconTextFirst }>
                            <i class="fa-solid fa-tree"></i>
                            <p>Parks and Garden</p>
                            <br />
                            <i class="fa-solid fa-hotel"></i>
                            <p>Boulevard Hall</p>
                            <br />
                            <i class="fa-solid fa-dumbbell"></i>
                            <p>Outdoor Gym</p>
                            <br />
                            <i class="fa-regular fa-hospital"></i>
                            <p>Community Center</p>
                        </div>
                        <div className={ Style.SecondIcon }>
                            <i class="fa-solid fa-calendar-day"></i>
                            <p>Event Lawn</p>
                            <br />
                            <i class="fa-solid fa-water"></i>
                            <p>Waterfall Stage</p>
                            <br />
                            <i class="fa-solid fa-volleyball"></i>
                            <p>Sports Courts</p>
                            <br />
                            <i class="fa-solid fa-skull-crossbones"></i>
                            <p>Bedouins and BBQ ares</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Amenite
