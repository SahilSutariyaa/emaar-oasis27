import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Style from './Slider.module.css'



const Slider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img className={ Style.photo } src="https://mobirise.com/extensions/coworkingamp/coworking_space/assets/images/10.jpg" alt="" />
                    <Carousel.Caption>
                        <h1 >MIRAGE AT THE OASIS</h1>
                        <div>
                            <button className={ Style.btn1 }>Download Broucher</button>
                            <button className={ Style.btn2 }>Show your Interest</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={ Style.photo } src="https://mobirise.com/extensions/coworkingamp/coworking_space/assets/images/07.jpg" alt="" />
                    <Carousel.Caption>
                        <h1>MIRAGE AT THE OASIS</h1>
                        <div>
                            <button className={ Style.btn1 }>Download Broucher</button>
                            <button className={ Style.btn2 }>Show your Interest</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={ Style.photo } src="https://mobirise.com/extensions/coworkingamp/coworking_space/assets/images/10.jpg" alt="" />
                    <Carousel.Caption>
                        <h1>MIRAGE AT THE OASIS</h1>
                        <div>
                            <button className={ Style.btn1 }>Download Broucher</button>
                            <button className={ Style.btn2 }>Show your Interest</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Slider
