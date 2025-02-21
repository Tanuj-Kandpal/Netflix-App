import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  let [input, setInput] = useState("");
  const navigate = useNavigate();
  const [, setDebounceValue] = useState("");

  function handleSearch() {
    navigate("/Search", { state: input });
  }

  useEffect(
    function () {
      const handler = setTimeout(function () {
        setDebounceValue(input);
      }, 200);
      return () => clearTimeout(handler);
    },
    [input]
  );

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      navigate("/Search", { state: input });
    }
  }

  return (
    <>
      <div className="flex justify-center items-center gap-2 outline-none">
        <input
          className="rounded-full p-1 px-6 text-black"
          type="search"
          placeholder="Search..."
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch} className="px-3">
          <FaSearch className="size-4" />
        </button>
      </div>
    </>
  );
}

export default Search;
