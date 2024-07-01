import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-scroll';




const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleShowMenu = () => {
        setIsVisible(!isVisible);
    }


    return (
        <>
            <div className={ styles.mainContainer }>
                <div>
                    <h2>EMAAR</h2>
                </div>
                <ul className={ `${styles.ulItems} ${isVisible ? styles.visible : ""}` }>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={ true }
                        smooth={ true }
                        offset={ -100 }
                        duration={ 500 }

                    >
                        <li onClick={ handleShowMenu }>
                            About
                        </li>
                    </Link>

                    <Link
                        activeClass="active"
                        to="gallery"
                        spy={ true }
                        smooth={ true }
                        offset={ -100  }
                        duration={ 500 }

                    >
                        <li onClick={ handleShowMenu }>
                            Gallery
                        </li>
                    </Link>
                    <Link
                        activeClass="active"
                        to="price"
                        spy={ true }
                        smooth={ true }
                        offset={ -100  }
                        duration={ 500 }

                    >
                        <li onClick={ handleShowMenu }>
                            Price
                        </li>
                    </Link>
                    <Link
                        activeClass="active"
                        to="aminities"
                        spy={ true }
                        smooth={ true }
                        offset={-100  }
                        duration={ 500 }

                    >
                        <li onClick={ handleShowMenu }>
                        Aminities
                        </li>
                    </Link>
                    <Link
                        activeClass="active"
                        to="location"
                        spy={ true }
                        smooth={ true }
                        offset={ -100  }
                        duration={ 500 }

                    >
                        <li onClick={ handleShowMenu }>
                            Location
                        </li>
                    </Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={ true }
                        smooth={ true }
                        offset={ -100  }
                        duration={ 500 }

                    >
                        <li onClick={ handleShowMenu }>
                            Contact Us
                        </li>
                    </Link>
                </ul>
                <div className={ styles.menuBar } onClick={ handleShowMenu }>
                    { isVisible ? (
                        <i className="fa-solid fa-xmark"></i>
                    ) : (
                        <i className="fa-solid fa-bars"></i>
                    ) }
                </div>
            </div>
        </>
    )
}

export default Navbar


