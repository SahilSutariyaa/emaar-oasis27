import React from 'react'
import Style from './Gallary.module.css'
import g1 from '../img/g1.jpg'
import g2 from '../img/g2.jpg'
import g3 from '../img/g3.jpg'
import g4 from '../img/g4.jpg'
import g5 from '../img/g5.jpg'
import g6 from '../img/g6.jpg'
import g7 from '../img/g7.jpg'
import g8 from '../img/g8.jpg'
import g9 from '../img/g9.jpg'



const Gallary = () => {
    return (
        <>
            <div className={ Style.Gallary } id='gallery'>
                <div className={ Style.vision }>
                    <h1>GALLERY</h1>
                    <p>A VISION OF LUXURIOUS</p>
                </div>
                <center>

                    <div className={ Style.First }>
                        <div className={ Style.FirstIn }>
                            <div className={ Style.item1 }>
                                <img src={ g1 } alt="" />
                            </div>
                            <div className={ Style.item2 }>
                                <img src={ g2 } alt="" />
                            </div>
                        </div>
                        <div className={ Style.SecondIn }>
                            <div className={ Style.item3 }>
                                <img src={ g3 } alt="" />
                            </div>
                            <div className={ Style.item4 }>
                                <img src={ g4 } alt="" />
                            </div>
                        </div>
                    </div>

                  <div className={ Style.First }>
                        <div className={ Style.FirstIn }>
                            <div className={ Style.item1 }>
                                <img src={ g5 } alt="" />
                            </div>
                            <div className={ Style.item2 }>
                                <img src={ g6 } alt="" />
                            </div>
                        </div>
                        <div className={ Style.SecondIn }>
                            <div className={ Style.item3 }>
                                <img src={ g7 } alt="" />
                            </div>
                            <div className={ Style.item4 }>
                                <img src={ g8 } alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={ Style.Last }>
                    <div className={ Style.FirstIn }>
                        <div className={ Style.item1 }>
                            <img src={ g9 } alt="" />
                        </div>
                       
                    </div>
                    </div>
                </center>
            </div>
        </>
    )
}

export default Gallary
