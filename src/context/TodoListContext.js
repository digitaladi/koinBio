import { createContext, useContext } from "react" 





/*

const TodoListContext = ({children}) =>{



    return (
        <TodoContext.Provider>
            { children }
        </TodoContext.Provider>
    )

}


*/

export     const TodoContext = createContext({todos:[]})

