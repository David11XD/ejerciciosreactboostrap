import ListView from "./ListView";
import { SearchProvider } from '../contexts/SearchContext'
import { ItemsProvider } from '../contexts/ItemsContext'

//prop drilling
//Componentes de presentación y componentes contenedores
function List() {
    return (
        //<SearchContext.Provider value="Hola mundo">
        <SearchProvider>
            <ItemsProvider>
                <ListView />
            </ItemsProvider>
        </SearchProvider>
    );
}

export default List;
