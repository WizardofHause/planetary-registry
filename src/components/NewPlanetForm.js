import React, { useState } from "react"
// import { v4 as uuid } from "uuid"

function NewPlanetForm({ handleNewPlanet }) {
    const [formPlanet, setFormPlanet] = useState({
        name: "",
        climate: "",
        terrain: "",
        population: "",
    })

    function handleChange(e) {
        setFormPlanet({
            ...formPlanet,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        const addedPlanet = {
        name: formPlanet.name,
        climate: formPlanet.climate,
        terrain: formPlanet.terrain,
        population: formPlanet.population
        }
        fetch("http://localhost:8085/planets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addedPlanet)
        })
        .then((r) => r.json())
        .then(handleNewPlanet)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formPlanet.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="climate"
                placeholder="Climate"
                value={formPlanet.climate}
                onChange={handleChange}
            />
            <input
                type="text"
                name="terrain"
                placeholder="Terrain"
                value={formPlanet.terrain}
                onChange={handleChange}
            />
            <input
                type="text"
                name="population"
                placeholder="Population"
                value={formPlanet.population}
                onChange={handleChange}
            />
            <input
                type="submit"
                value="Add"
            />
        </form>
    );
}

export default NewPlanetForm;