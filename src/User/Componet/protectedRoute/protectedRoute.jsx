import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Contexts/Contexts';

const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = useAuth();
   if(isLoggedIn){
      return element
  }
  else{
    if(localStorage.getItem("id")){
      return element
    }
   return <Navigate to={"/login"}/>
  }
};

export default ProtectedRoute;
