// ** React Imports
import { lazy } from 'react'
// import { Navigate } from 'react-router-dom'

const UserList = lazy(() => import('../../views/users/list'))

const UserRoutes = [
  {
    element: <UserList />,
    path: '/users/list'
  }
]

export default UserRoutes
