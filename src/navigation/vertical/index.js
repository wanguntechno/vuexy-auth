import { Mail, Home } from "react-feather"

export default [
  {
    id: "home",
    title: "Home",
    icon: <Home size={20} />,
    navLink: "/home"
  },
  {
    id: "adminPage",
    title: "Admin Page",
    icon: <Mail size={20} />,
    navLink: "/admin-page"
  },
  {
    id: "clientPage",
    title: "Client Page",
    icon: <Mail size={20} />,
    navLink: "/client-page"
  }
]
