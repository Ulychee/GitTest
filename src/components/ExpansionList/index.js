import React , { useState } from 'react'
import OutsideClick from 'react-outside-click-handler'
import './styles.scss'

export default () =>{

    const [visible,setVisible] = useState(false)

    const setShow = () => {
        setVisible(visible => !visible)
    }

    return (
        <div>
            <OutsideClick
                onOutsideClick={()=>setVisible(false)}
            >
                <div className="click" onClick={setShow}>
                    click here
                </div>
                {visible && (<div className="show"> this is a hidden div</div>)} 
            </OutsideClick>
        </div>
    )
}