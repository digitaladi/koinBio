import { useContext } from "react";
import Menu from "./Menu";
import Title from "./Title"
import  { MenuContext } from "../context/MenuContext";



 

const Nav = () => {


const listesMenus = useContext(MenuContext)

console.log(listesMenus)

const menus = listesMenus.map((item) =>
    <Menu lien={item.lien} titre={item.titre} icone={item.icon}/>
)

    return (
        <div className="nav">
        <Title />
 
        <ul  className="menu">
         { menus }
         </ul>
        </div>
   

    )
    
    }
    
    
    
    export default Nav;