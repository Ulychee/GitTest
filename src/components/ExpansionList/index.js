import React , { useState } from 'react'
import './styles.scss'

export default () =>{

    const [visible,setVisible] = useState(false)

    const setShow = () => {
        setVisible(visible => !visible)
    }

    return (
        <div>
            <div className="click" onClick={setShow}>
                click here
            </div>
            {visible && (<div className="show"> this is a hidden div</div>)} 
        </div>
    )
}