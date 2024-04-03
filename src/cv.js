
import {Link } from  "react-router-dom"

import { useThemeContext } from "./context/theme" 

const Cv = () => {

    const { background, setBackground } = useThemeContext()

    return(
     <>
     
     <div style={{ 
        backgroundClip:background, 
        width: "500px",
        padding:"30px",
        cursor:"pointer",
        height:"500px",
        textAlign:"center"
        }}>
        <p>Je suis là à cause du contexte</p>
     </div>

     <button onClick={() => setBackground("lightblue")}> Switch  </button>
     <Link to={"/contact"}> Contact</Link>
     </>
    )
}


export default Cv