import React, { useState } from 'react'

export default ()=>{
    const [userName,setUserName] = useState();
    const [value,setValue] = useState("DaiMx");

    const getValue = e => {
        setUserName(e.target.value)
    }
    const handleClick = () => {
        setValue(userName)
    }
    return(
        <>
            <h2>你拍了一下 “{value}”</h2>
            <br/>
            <input type="text" placeholder="Input your name" onChange={getValue}/>
            <button type="button" onClick={handleClick}>拍一拍</button>
        </>
    )
}