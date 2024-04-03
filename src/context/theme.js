import { useContext, useState, createContext } from "react"


//Un context permet de partager des données entre composants du père vers les enfants sans passer par les enfants intermédiaires


//création d'un context
const ThemeContext = createContext({})



export const ThemeContextProvider = ({children}) =>{

//on crée un state background et son set qui seront accessibles pour les enfants qui le souhaite
const [ background, setBackground] = useState('lightgreen')
 
//ici on donne les données au contexte dans l'attribut value value={{background, setBackground}}
//children correspont aux enfants composants qui peuvent bénéficier ces données
return(
    <ThemeContext.Provider value={{background, setBackground}}>
        {children}
    </ThemeContext.Provider>
)


}

//ici on récupère le contexte
export const useThemeContext = () => useContext(ThemeContext)