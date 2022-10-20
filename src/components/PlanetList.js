import React from "react"
import Planet from "./Planet"

function PlanetList({ planets, search }) {

    const searchedPlanet = planets.filter((planet) => 
    planet.name.toLowerCase().includes(search.toLowerCase())
    || planet.climate.toLowerCase().includes(search.toLowerCase())
    || planet.terrain.toLowerCase().includes(search.toLowerCase())
    || planet.population.includes(search))

    const planetCard = searchedPlanet.map((planet) => {
        return (
            <Planet
                key={planet.id}
                planet={planet}
            />
        )
    })

    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {planetCard}
            </tbody>
        </table>
    );
}

export default PlanetList;