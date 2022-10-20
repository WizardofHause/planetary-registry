import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

const API = "http://localhost:8085/planets"

function Registry() {
    const [planets, setPlanets] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(API)
        .then((r) => r.json())
        .then((planets) => setPlanets(planets))
    }, [])

    function handleNewPlanet(addedPlanet){
        setPlanets([...planets, addedPlanet])
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return(
        <div className="registry">
            <Search 
                search={search} 
                handleSearch={handleSearch}
            />
            <div className="content">
                <PlanetList 
                    planets={planets} 
                    search={search}
                />
                <NewPlanetForm 
                    handleNewPlanet={handleNewPlanet}
                />
            </div>
        </div>
    )
}

export default Registry;