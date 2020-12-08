import React from 'react';
/** 父组件获取子组件方法   一 */
class Child extends React.Component{
  childFunc1 = () => {
    alert("this is func 1 of child")
  }
  render(){
    return(
      <div>

      </div>
    )
  }
}

export default class FatherFunc extends React.Component{
  constructor(props){
    super(props)
    this.myChild = React.createRef()
  }
  handleClick = () => {
    this.myChild.current.childFunc1()
    // console.log(this.myChild.current.childFunc1())
  }
  render(){
    return (
      <div>
        <Child ref={this.myChild} />
        <button onClick={this.handleClick}>func 1 of child</button>
      </div>
    )
  }
}

/** 父组件获取子组件方法   二 */
// class Child extends React.Component{
//   componentDidMount(){
//     this.props.onRef(this)
//   }
//   handleClick = () => {
//     alert("this is func 2 of child")
//   }
//   render(){
//     return(
//       <>
//       </>
//     )
//   }
// }

// export default class FatherFunc extends React.Component{
//   constructor(props){
//     super(props)
//   }
//   click = () => {
//     this.mychild.handleClick()
//      //  console.log(this.mychild.handleClick())
//   }
//   render(){
//     return (
//       <>
//         <Child onRef={(ref) => this.mychild = ref} />
//         <button onClick={this.click}>func 2 of child</button>
//       </>
//     )
//   }
// }