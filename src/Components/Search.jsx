import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  let [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    navigate("/Search", { state: input });
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <input
          className="rounded-md p-0.5 text-black"
          type="search"
          placeholder="Search"
          onChange={handleInput}
        />
        <button onClick={handleSearch} className="px-3">
          <FaSearch className="size-4" />
        </button>
      </div>
    </>
  );
}

export default Search;
