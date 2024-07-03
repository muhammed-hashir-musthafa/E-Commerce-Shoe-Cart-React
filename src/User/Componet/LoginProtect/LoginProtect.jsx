import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Contexts/Contexts';

export default function LoginProtect ({element}) {
  const {isLoggedIn} =useAuth()

  return isLoggedIn? <Navigate to={'/'} /> : element
}

