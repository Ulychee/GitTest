import React from 'react';

// const Child = ({props}) => {
//   return (
//     <div>
//       <div>接收到父组件的值：{props}</div>
//     </div>
//   )
// }

// export default function Father(){
//   const props = "fu => zi"
//   return(
//     <div>
//        <Child props={props} />
//     </div>
//   )
// }

class Child extends React.Component{
  constructor(props){
    super(props);
    this.state={
      ziMsg:'zi => fu'
    }
  }
  render(){
    return(
      <>
        <div>子组件：接收到父组件的值：{this.props.Fuzi}</div>
        <button onClick={()=>this.props.handleChange(this.state.ziMsg)}>Click</button>
      </>
    )
  }

}

export default class Father extends React.Component{
  constructor(props){
    super(props);
    this.state={
      msg:"fu => zi",
      ziMsg:""
      
    }
  }

  handleChange = (ziMsg) => {
    this.setState({
      ziMsg:ziMsg
    })
  }

  render(){
    return (
      <>
        <div>父组件：接收到子组件的值：{this.state.ziMsg}</div>
        <Child Fuzi={this.state.msg} handleChange={this.handleChange}/>
      </>
    )
  }
}