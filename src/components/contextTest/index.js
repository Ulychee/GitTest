import React from 'react';
import ContextTest from './ContextTest'
import Father from './Fahert-Child'
import FatherFunc from './FuncFather-Child'

export const UserContext = React.createContext('')

const Index = () => {

  return (
      <>
        <div>
          使用useContext传值：<ContextTest />
        </div>

        <div style={{marginTop:"50px"}}>
          直接传值：
          <Father />
        </div>

        <div>
          父组件获取子组件的方法
          <FatherFunc />
        </div>
      </>
  )
}

export default Index;
