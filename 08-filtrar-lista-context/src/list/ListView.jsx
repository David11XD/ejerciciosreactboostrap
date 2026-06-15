import { useContext } from "react"
import { ItemsContext } from "../contexts/ItemsContext"
import SearchInput from "../form/SearchInput"

function ListView(){
    //console.log(elements)
    let elements = useContext(ItemsContext)
    return(
        <div>
            <SearchInput />
            <ul>
                { 
                    //[<p>Un parrafo</p>, <p>Dos parrafos</p>]
                    elements.map((nombre, index) => (
                        <li key={index}>{nombre}</li>
                    ))
                    //elements.map((nombre, index) =>nombre && <li key={index}>{nombre}</li>)
                }
            </ul>
        </div>
    )
}

export default ListView