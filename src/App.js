

import './App.css';

import { ThemeContextProvider } from './context/theme'
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Contact from './contact';
//import Cv from './cv';
import Layout from './component/Layout';
import MenuContextProvider from './context/MenuContext';
import Connexion from './pages/Connexion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListesPlantes from './pages/ListesPlantes';
import Inscription from './pages/Inscription';
import NoPage from './pages/NoPage';
import Home from './component/Home';


function App() {


  return (



  
<MenuContextProvider>
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout /> }>    
    <Route index  element={<Home />} /> 
      <Route path='/connexion/' element={<Connexion />} />
      <Route path='/inscription/' element={<Inscription />} />
      
   { /*  <Route path='/plantes/' element={<ListesPlantes />} /> */}
   <Route path='*' element={<NoPage />}>  </Route>
   </Route>
        
        
   
       
      </Routes>
 </BrowserRouter> 
   
 
</MenuContextProvider>

  )
}

export default App;
