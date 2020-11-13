import React, { useState } from 'react'
import { TextField } from 'react-md'
import "./styles.scss"

export default ()=>{
    const [userName,setUserName] = useState();
    const [value,setValue] = useState("DiDiDi");
    const [test,setTest] = useState(["111","222","333"])

    const getValue = e => {
        setUserName(e.target.value)
    }
    const handleClick = () => {
        setValue(userName)
        setUserName("")
    }
    const doubleClick = () => {
        let pai = document.getElementById('pailepai')
        pai.style.display = "block";
        setTimeout(() => {
            pai.style.display = "none";
        }, 2000);
    }
    const changeName = () => {
        setTest({...test,name:"111"})
        setTest([...test,"222","3333"]) //使用useState的setXXX对数组和对象赋值时，如果需要保留原来数据或修改对象中某一数据时，则需要使用扩展运算符 '... '
    }

    return(
        <div className="testBody">
            {/* <input value={userName}  type="text" placeholder="Input your name" onChange={getValue} /> */}
            <TextField
                onChange={getValue}
                label="Input your name"
                value={userName}
                id="aaa"
                className="inputName"
                // passwordIcon={{
                //     visible:<FontIcon iconClassName="mdi mdi-check" />,
                //     invisible:<FontIcon iconClassName="mdi mdi-check"/>
                // }}
            />
            <button type="button" onClick={handleClick} className="button">拍一拍</button>
            <br/>
            <h2 onDoubleClick={doubleClick}>{value}</h2>
            <div id="pailepai" style={{display:"none",color:"grey"}}>ni pai le pai {value}</div>
            <div>
                {/* <dvi>{test.name}</dvi>
                <dvi>{test.age}</dvi> */}
                <div>{test}</div>
                <div className="button" onClick={changeName}>change</div>
            </div>
        </div>
    )
}