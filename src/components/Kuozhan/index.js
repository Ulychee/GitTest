import React from 'react'

import "./styles.scss"

//this test is for argument passing
const KuoZhanTest = ({title,content,name,value}) => {

    return (
        <div className="body">
            <div>{title}</div>
            <p>{content}</p>
            <ul style={{marginLeft:"20px"}}>
                <li>{} ++ {value}</li>
            </ul>
        </div>
    )
}

export default KuoZhanTest;

//if the Parent-componenet doesn't pass the corresponding value,the defalut value is used. 
KuoZhanTest.defaultProps={
    title:"this is a default title",
    content: "this is a default content",
    name:["test"]
}