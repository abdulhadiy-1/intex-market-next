import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRouteList } from '../hooks/paths'

const AuthRoutes = () => {
  return <Routes>
    {
      AuthRouteList.map(item => <Route key={item.id} path={item.path} element={item.element} />)
    }
  </Routes>
}

export default AuthRoutes