import React, { useEffect, useState } from "react";

export default function Pokemon(){
    const[list, setList] = useState([])
    const addList = async() => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?_limit=6")
        const data = await response.json()
        setList(data.results)
        console.log(data.results);
    }
    useEffect(() => {
        addList()
    })
    return(
        <div>
            <h2>Pokemon</h2>
            {/* <button onClick={addList}>add</button> */}
                {list.map((el) => (
                    <div className="list">
                        <p>{el.name}</p>
                        <img src={el.url} alt="photo"/>
                    </div>
                ))}
        </div>
    )
}

