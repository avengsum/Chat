import { useState } from "react"

const Search = () => {

    const [search, setSearch] = useState('')

    return (
        <div>
            <div className="">
                <input type="text" placeholder="Find a User"
                className="w-full p-1 border "
                value={search}
                onChange={(e) => setSearch(e.target.value) }
                 />
            </div>
        </div>
    )
}

export default Search