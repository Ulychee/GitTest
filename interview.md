父子组件传值 （子传父 需要通过方法传）

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



父组件调用子组件的方法

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


一个字符串中重复做多的那个元素及出现次数
const Func = () => {
    let max = 0, num = 0 ,newArr = {};
    let ARR = arr.reduce((index,el)=>{
      if(newArr[el] != null){
        newArr[el] += 1
      }else{
        newArr[el] = 1
      }
      return newArr
    })

    for(var i in ARR){
      if(ARR[i]>num){
        max = i
        num = ARR[i]
      }
    }
    console.log(max,num)
  }


取两个数组中相同元素返回新数组
const Func = () => {
	for(var i=0;i<arr1.length;i++){
	  for(var j=0;j<arr2.length;j++){
	    if(arr1[i]===arr2[j]){
	      arr3.push(arr1[i])
	    }
	  }
	}
	return newArr = arr3.filter((el,id,arr)=>arr.indexOf(el)===id)
}


将 一串电话号码中间四个数转为 ****
const number = 13412345123
const strNum = number.toString()
const newStrNum = strNum.substr(0,3)+"****"+strNum.substr(7)


解析url传递的参数
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

  ts .d 文件
  用来标记某个js库里对象的类型

  sass 全局变量
  使用 $ 声明
  less 全局变量
  使用 @ 声明

  axios  网络拦截  get方法有哪些

  useEffect 卸载后调用的方法