// ** React Imports
import { lazy } from 'react'
// import { Navigate } from 'react-router-dom'

const UserList = lazy(() => import('../../views/users/list'))
const AccessControl = lazy(() => import('../../views/extensions/access-control'))

const UserRoutes = [
  {
    element: <UserList />,
    path: '/users/list'
  },
  {
    element: <AccessControl />,
    path: '/access-control'
  }
]

export default UserRoutes
