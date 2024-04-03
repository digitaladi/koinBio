import { createContext } from "react"
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import LoginIcon from '@mui/icons-material/Login';







const listesMenus = [ {lien:"https://fr.legacy.reactjs.org/", titre:"S'inscrire",icon:<HowToRegOutlinedIcon /> },  {lien:"https://symfony.com/", titre:"Créer la carte d'identité de la plante",icon:<GrassOutlinedIcon /> } ,{lien:"https://openclassrooms.com/fr/", titre:"Se connecter",icon:<LoginIcon /> }]


//1_ ici on crée et  exporte notre context qui contient une tableau d'objets
//2_pour que notre contexte soit disponible partout dans  des composants enfants il suffit d'abords : 
export const MenuContext = createContext(listesMenus)


//3_on crée le composant MenuContextProvider qui retourne le "MenuContext" + un "Provider"(un transporteur en quelques sortes) + les valeurs du context "value={listesMenus}"
// + children qui represente les enfants composants
//4_ puis dans le composant parent dans un app.js englobe tout nos composnat avec MenuContextProvider ex : 

/*
//app.js
<MenuContextProvider>
    <Layout />
</MenuContextProvider>

*/

//en fin dans les composants enfants pour récuperer nos données on fait ceci exemple dans le composant Nav  : 


/*

//import  { MenuContext } from "../context/MenuContext";
const listesMenus = useContext(MenuContext)
// listesMenus contiennent la valeurs du context

*/ 


const MenuContextProvider = ({children}) =>{




return (

<MenuContext.Provider value={listesMenus}>
{children}
</MenuContext.Provider>

)


}

export default MenuContextProvider