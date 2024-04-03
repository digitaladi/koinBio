

import './App.css';

import { ThemeContextProvider } from './context/theme'
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Contact from './contact';
//import Cv from './cv';
import Layout from './component/Layout';
import MenuContextProvider from './context/MenuContext';


function App() {


  return (



  
<MenuContextProvider>
    <Layout />
</MenuContextProvider>
  
  )
}

export default App;
