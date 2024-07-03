import React from 'react'
import { useAuth } from './Contexts'
import { Navigate } from 'react-router-dom';

export default function LoginProtect ({element}) {
  const {isLoggedIn} =useAuth()

  return isLoggedIn? <Navigate to={'/'} /> : element
}

