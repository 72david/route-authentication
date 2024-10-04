import React, { useContext } from 'react'
import userContext from './UserContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    const {isLogin} = useContext(userContext)

    if(!isLogin) return <Navigate to="/login" />

  return (<>{children}</>)
}

export default ProtectedRoute