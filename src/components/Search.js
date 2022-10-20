import React from "react"

function Search({ search, handleSearch }) {
    return (
        <div>
            <input
                type="text"
                onChange={handleSearch}
                placeholder="Search..."
                value={search} />
        </div>
    );
}

export default Search;