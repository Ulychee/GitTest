import React, {useState, useMemo, useCallback} from 'react'

import { Button } from 'react-md';

import './styles.scss'

export default () => {
    const [value, setValue] = useState(0)
    // const [num, setNum] = useState(1)

    const backClick = useCallback(() => {
        setValue(value => value+1)
    },[setValue])

    const momeVal = useMemo(() =>{
        if(value > 2){
            return value + 1;
        }
    },[value])

    

    return(
        <div className="memoBody">
            <h3>useMemo-tset</h3>
            <Button onClick={backClick}>useMemo-click</Button>
            <br/>
            <h4>value:{value}</h4>
            <h4>momeClick : {momeVal}</h4>
        </div>
    )
}