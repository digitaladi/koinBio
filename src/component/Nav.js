import { useContext } from "react";
import Menu from "./Menu";
import Title from "./Title"
import  { MenuContext } from "../context/MenuContext";
import { Outlet } from "react-router-dom";



 

const Nav = () => {


const listesMenus = useContext(MenuContext)

//console.log(listesMenus)

const menus = listesMenus.map((item) =>
    <Menu key={item.titre} lien={item.lien} titre={item.titre} icone={item.icon}/>
  
)

    return (
        <div className="nav">
        <Title />
        <nav>
        <ul  className="menu">
         { menus }

         </ul>
         </nav>
  
        </div>
   

    )
    
    }
    
    
    
    export default Nav;