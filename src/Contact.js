


import { useThemeContext } from "./context/theme" 

const Contact = () => {

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
     
     </>
    )
}


export default Contact