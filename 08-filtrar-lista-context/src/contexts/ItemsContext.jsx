import { createContext, useContext, useEffect, useState } from "react";
import { SearchContext } from "./SearchContext";
import frameworksList from "../list/items";

export const ItemsContext = createContext([]);

export function ItemsProvider({ children }) {
    const [items, setItems] = useState(frameworksList);
    const { search } = useContext(SearchContext);

    useEffect(() => {
        console.log(search);

        if (!search || search === "") {
            setItems(frameworksList);
            return;
        }

        filterItems(search);
    }, [search]);

    function filterItems(searchPattern) {
        const newItems = filterItemsBySearchPattern(searchPattern);
        setItems(newItems);
    }

    function filterItemsBySearchPattern(searchPattern) {
        return frameworksList.filter(item =>
            item.toLowerCase().includes(searchPattern.toLowerCase())
        );
    }

    return (
        <ItemsContext.Provider value={items}>
            {children}
        </ItemsContext.Provider>
    );
}