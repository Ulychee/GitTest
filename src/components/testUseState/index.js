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
    const doubleClick = () => {
        let pai = document.getElementById('pailepai')
        pai.style.display = "block";
        setTimeout(() => {
            pai.style.display = "none";
            setUserName("")
        }, 2000);
    }

    return(
        <>
            <input value={userName}  type="text" placeholder="Input your name" onChange={getValue} />
            <button type="button" onClick={handleClick}>拍一拍</button>
            <br/>
            <h2 onDoubleClick={doubleClick}>{userName}</h2>
            <div id="pailepai" style={{display:"none",color:"grey"}}>ni pai le pai {value}</div>
        </>
    )
}