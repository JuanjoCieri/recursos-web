import { useState } from "react";
import { SearchIcon } from "../../utils/icons/Icons";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {

  const navigate = useNavigate()

  const [input, setInput] = useState({
    search: ""
  })

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  function onClick () {
    setInput({
      search: ""
    })
    navigate("/search/" + input.search)
  }

  return (
    <div className="w-[50%] h-12 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 rounded-full absolute top-0 mt-5 flex justify-between px-6 animate-fade-down animate-once animate-duration-1000">
      <input
        placeholder="Buscar..."
        type="text"
        name="search"
        value={input.search}
        onChange={(e) => handleChange(e)}
        className="w-full h-full bg-transparent"
      />
      <button onClick={onClick}>
        <SearchIcon />
      </button>
    </div>
  );
}
