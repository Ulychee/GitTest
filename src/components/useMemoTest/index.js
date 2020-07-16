import React, {useState, useMemo} from 'react'
import './styles.scss'

export default () => {
    const [value, setValue] = useState(0)
    const increase = useMemo(() => {
        if(value > 2 )
        return value +1 
    },[value])

    return(
        <div className="memoBody">
            <h3>useMemo-tset</h3>
            <button
              type="button"
              onClick={() => setValue(value+1)}
              className="button"
            >
                value:{value}
            </button>
            <h4>increase: {increase}</h4>
        </div>
    )
}