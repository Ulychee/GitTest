import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useHistory} from 'react-router-dom'




export default () => {
  const routes = [
    {
      path:'/father',
      component:Father
    },
    {
      path:'/child',
      component:Child
    }
  ]

  return (
    <>
      <Router>
        {/* <Link to="/father">Father</Link>
        <Link to="/child">Child</Link> */}

        <Switch>
          <Route exact path="/"><Father /></Route>
          <Route exact path="/child"><Child /></Route>
        </Switch>
      </Router>
    </>
  )
}


const Child = () => {
  const history = useHistory();

  const BackFather = () => {
    history.goBack()
    console.log(history)
  }
  const toFather = () => {
    history.push("/?id=1&name=lee")
    console.log(history)
  }

  return (
    <>
      <div>this is child</div>
      <div>
        <button onClick={BackFather}>back</button>
        <button onClick={toFather}>go</button>
      </div>
    </>
  )
}

function Father () {
  const [str,setStr] = React.useState('..')
  const history = useHistory();
  const toChild = () => {
    console.log(history)
    history.push("/child")
  }

  const resolve = (str) => {
    const newS = str.length>0 ? str.substring(1) : ''
    const arr = newS.length>0 ? newS.split("&") : []
    let obj = {}
    arr.forEach( item => {
      const name = item.split("=")[0];
      const value = item.split("=")[1];
      obj[name]=value
    });
    console.log(obj)
  }

  React.useEffect(()=>{
    const string = history.location.search
    console.log(string)
    setStr(string)
  },[])


  return (
    <>
      <div>this is father</div>
      <div>{str}</div>   
      <button onClick={()=>resolve(str)}>解析</button>
      <button onClick={toChild}>to child</button>
    </>
  )
}
