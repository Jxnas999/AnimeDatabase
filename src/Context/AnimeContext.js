import { createContext, useState } from "react";

export const AnimeContext = createContext()

function AnimeContextProvier(props) {
    return(
        <AnimeContext.Provider value={}>
            {props.children}
        </AnimeContext.Provider>
    )
}

export default AnimeContextProvier;