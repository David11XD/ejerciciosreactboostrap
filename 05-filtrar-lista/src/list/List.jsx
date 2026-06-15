import { useState } from 'react'
import ListView from './ListView'
import frameworksList from './items'

//Componentes de presentación y componentes contenedores

function List(){
    let [items, setItems] = useState(frameworksList)

    function filterItems(searchPattern){
        if(searchPattern === ""){
            setItems(frameworksList);
        }else{
            let newItems = filterItemsBySearchPattern(searchPattern);
            setItems(newItems);
        }
    }

    function filterItemsBySearchPattern(searchPattern){
        let filterItems = frameworksList
        .map(item => item.toLowerCase().includes(searchPattern.toLowerCase()) ? item : null)
        return filterItems;
    }

    return(
        <ListView elements={items} funcFilterItems={filterItems}/>
    )
}

export default List
