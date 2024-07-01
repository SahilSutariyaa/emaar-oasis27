import React from 'react'
import Style from './Aboutus.module.css'
import img1 from '../img/FEATURES_1200X655_2.jpg'
import img2 from '../img/FEATURES_1200X655_1.jpg'

const Aboutus = () => {
    return (
        <>
         


            <div className={ Style.outer } id='about'>
                <div className={ Style.innerFirst }>
                    <p>ABOUT</p>
                </div>
                
                    <div className={ Style.imgFirst }>
                        <div className={ Style.img1 }>
                            <img src={ img1 } alt="" />
                        </div>
                        <div className={ Style.text }>
                            <h2>HARMONY OF OPULENCE AND CRAFTSMANSHIP</h2>
                            <p>Delight in the elegant 5- and 6-Bedroom villas which reflects the refined craftsmanship which preserves the essence of luxury living. Mirage isn't just a home, it is a lifestyle which is a curation of remarkable everyday expeirences, bringing tranquility and opulence.</p>
                        </div>
                    </div>

                    <div className={ Style.secondImg }>
                        <div lassName={ Style.text1 }>
                            <h2>ICONIC VIEWS</h2>
                            <p>At Mirage, the landscape is transformed into a mesmerising spectacle of networked waterways forming a profound, picturesque bond with nature.</p>
                        </div>
                        <div className={ Style.img2 }>
                            <img src={ img2 } alt="" />
                        </div>
                    </div>
               
            </div>
        </>
    )
}

export default Aboutus
