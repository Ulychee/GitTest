import React, { useEffect, useState } from 'react';

import { TextField } from 'react-md'

import './styles.scss'



export default function FetchAndFocus ( {show} ) {
    // const [ show, setShow ] = useState(false)
    const [ pokemon, setPokemon ] = useState({})
    const [ num, setNum ] = useState(1)
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
        .then(res => res.json())
        .then(res => {
            setPokemon(res)
        })
    },[num])

    const focusTextField = e => {
        //focus on TextField
        document.getElementById('textField').focus()
    }

    return (
        <div className="body">
            <TextField id="textField"/>
            <br/><hr/>
            <button className="orderButton" id="ddd" onClick={()=>setNum(num=>num-1)}>Click Prev</button>
            <button className="orderButton" id="ddd" onClick={()=>setNum(num=>num+1)}>Click Next</button>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.front_default} alt=""  onClick={focusTextField}/>
            <br/>
            {console.log(show)}
            { show ? <dvi>1111111</dvi> : <div>2222222</div>}
        </div>
    )
}