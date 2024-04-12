import { Link } from "react-router-dom";






const Menu = (props) => {


    return (

    <li title={ props.titre}>    <Link to={props.lien} >{props.icone}</Link> </li>


    )
    
    }
    
    
    
    export default Menu;