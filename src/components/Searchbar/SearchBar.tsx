import { SearchIcon } from "../../utils/icons/Icons";

export default function SearchBar() {
  return (
    <div className="w-[50%] h-12 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 rounded-full absolute top-0 mt-5 flex justify-between px-6 animate-fade-down animate-once animate-duration-1000">
      <input
        placeholder="Buscar..."
        type="text"
        className="w-full h-full bg-transparent"
      />
      <button>
        <SearchIcon />
      </button>
    </div>
  );
}
