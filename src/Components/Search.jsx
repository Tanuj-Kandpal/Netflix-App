import { FaSearch } from "react-icons/fa";

function Search() {
    function handleSearch() {

    }

    return <>
        <div className="flex justify-center items-center gap-2">
            <input className="rounded-md text-center p-0.5 text-black" type="text" placeholder="Search..." onChange={handleSearch} />
            <div className=""><FaSearch className="size-4" /></div>
        </div>
    </>
}

export default Search;