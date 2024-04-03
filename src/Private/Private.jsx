import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';


const Private = ({children}) => {

    const authData = useSelector((state) => {
        return state.auth;
      });
    
    //   console.log(authData);

if(! authData.auth){
    return <Navigate to="/login"/>
}

  return children

}

export default Private