function ListView({elements, funcFilterItems}){
    //console.log(elements)
    return(
        <div>
            <input type="text" onChange={ ev => funcFilterItems(ev.target.value) }/>
            <ul>
                { 
                    //[<p>Un parrafo</p>, <p>Dos parrafos</p>] 
                    elements.map((nombre, index) =>nombre && <li key={index}>{nombre}</li>)
                }
            </ul>
        </div>
    )
}

export default ListView
