import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function AdminProtect({element}) {
   const id = localStorage.getItem("id");

  if(id==='545a'){
    return element
  }
  else{
    return <Navigate to={'/'}/>
  }

}
