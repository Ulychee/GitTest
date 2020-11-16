import React , { useReducer }from 'react';
import { Button } from 'antd'

/* simple state and simple action*/
// const init = 0;
// const func = (state,action)=> {
//   switch(action){
//     case "add":
//       return state + 1 ;
//     case "del":
//       return state - 1;
//     case "reSet":
//       return init;
//     default:
//       return state;
//   }
// }

// export default () => {
//   const [count,dispath] = useReducer(func,init)
  
//   return(
//     <div>
//       <div>{count}</div>
//       <div style={{display:"flex"}}>
//         <Button onClick={()=>dispath('add')}>add</Button>
//         <Button onClick={()=>dispath('del')}>del</Button>
//         <Button onClick={()=>dispath('reSet')}>reSet</Button>
//       </div>
//     </div>
//   )
// }


/*complex state & action*/
const init = {firstCounter:0}
const reducer = (
  state,
  action
)=>{
  switch(action){
    case 'add':
      return {
        firstCounter:state.firstCounter+1
      }
    case 'del':
      return {
        firstCounter:state.firstCounter-1
      }
    case 'reSet':
      return init;
    default:
      return state
  }
}

export default () => {
  const [count,dispatch] = useReducer(reducer,init)
  return (
    <div>
      <div>count:{count.firstCounter}</div>
      <div style={{display:"flex"}}>
        <Button onClick={()=>dispatch('add')}>add</Button>
        <Button onClick={()=>dispatch('del')}>del</Button>
        <Button onClick={()=>dispatch('reSet')}>reSet</Button>
      </div>
    </div>
  )
}
