import React,{useContext} from 'react';
import { UserContext } from "./index";

export default function Children() {

  const value = useContext(UserContext)

  return (
    <div>

      {value}

      {/* <UserContext.Consumer>
        {
          (user)=>(
            <div>
              this is Context value : {user}
            </div>
          )
        }
      </UserContext.Consumer> */}
    </div>
  )
}