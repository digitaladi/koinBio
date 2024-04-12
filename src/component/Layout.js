
import { Outlet } from "react-router-dom"
import Fouter from "./Fouter"
import Header from "./Header"
import Section from "./Section"





const Layout = () => {



    return(
    
     
<div className="layout">

<Header />
<Outlet />
  {/*<Section /> */}
<Fouter />

</div>
     

    )
}


export default Layout