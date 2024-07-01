import React, { useState } from 'react'
import Style from './Location.module.css'
import axios from 'axios'



const Location = () => {
    const [name, setName] = useState('')
    const [gmail, setGmail] = useState('')
    const [number, setNumber] = useState('')


    const handelSubmit = (e) => {
        e.preventDefault()

        const data = {
            Name: name,
            Email: gmail,
            Number: number

        }
        axios.post("https://sheet.best/api/sheets/9d68e412-dc3e-469f-8145-2971d648cef7", data).then((response) => response)
        setGmail('')
        setName('')
        setNumber('')
    }
    return (
        <>
            <div className={ Style.main } id='location'>
                <div className={ Style.local }>
                    <h1>LOCATION</h1>
                </div>
                <div className={ Style.location }>
                    <div className={ Style.map }>
                        <iframe width="800" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=3%20surat+(shaif%20society)&amp;t=k&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                    <div className={ Style.fom }>
                        <h3>EXPRESS YOUR INTEREST</h3>
                        <h6>Register to download prices and payment plans.</h6>
                        <div className={ Style.subForm }>
                            <form action="" onSubmit={ handelSubmit }>
                                <label>Name </label> <br />
                                <input
                                    type="text"
                                    placeholder='Enter Your Name....'
                                    name='name'
                                    onChange={ (e) => setName(e.target.value) }
                                    value={ name }
                                />
                                <br />
                                <label>Email</label> <br />
                                <input
                                    type="email"
                                    placeholder='Enter Your Email....'
                                    name='email'
                                    onChange={ (e) => setGmail(e.target.value) }
                                    value={ gmail }
                                />
                                <br />
                                <label>Number </label> <br />
                                <input
                                    type="number"
                                    placeholder='Enter Your Number....'
                                    name='number'
                                    onChange={ (e) => setNumber(e.target.value) }
                                    value={ number }
                                />

                                <br /> <br />
                                <button className={ Style.btn } type="submit">Submit</button>
                                <br /> <br />

                                <h5>Private-Policy!</h5>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
            <div className={ Style.foter }>
                <h1>EMAAR</h1>
            </div>
        </>
    )
}

export default Location