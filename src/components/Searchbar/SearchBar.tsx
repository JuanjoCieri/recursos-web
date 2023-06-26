import { ChangeEvent, useState, useRef, useEffect } from "react";
import { SearchIcon } from "../../utils/icons/Icons";
import { useNavigate } from "react-router-dom";
import saveHistory from "../../utils/logic/saveHistory";
import History from "./components/History";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [clickedInside, setClickedInside] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [input, setInput] = useState({
    search: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  function handleClick() {
    setOpen(!open);
  }

  function onClick() {
    setOpen(!open);
    saveHistory(input.search);
    setInput({
      search: "",
    });
    navigate("/search/" + input.search);
  }

  function handleInputClick(e: React.MouseEvent<HTMLInputElement>) {
    e.stopPropagation();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onClick();
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
      setClickedInside(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mouseup", () => setClickedInside(false));

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mouseup", () => setClickedInside(false));
    };
  }, []);

  return (
    <>
      {open ? (
        <div
          className="animate-fade-down animate-once animate-duration-[800ms] w-screen h-screen fixed flex justify-center items-start top-0 bg-clip-padding backdrop-filter backdrop-blur-xl z-10"
          onMouseDown={() => setClickedInside(true)}
        >
          <div
            className="w-[70%] lg:w-[50%] h-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 rounded-[30px] absolute z-50 top-0 mt-5 animate-fade-down animate-once animate-duration-1000"
            ref={containerRef}
          >
            <div className="flex items-center justify-between px-6 py-6">
              <input
                placeholder="Buscar..."
                autoComplete="off"
                type="text"
                name="search"
                value={input.search}
                onChange={(e) => handleChange(e)}
                onClick={handleInputClick}
                onKeyDown={handleKeyDown}
                className="w-full h-full bg-transparent focus:outline-none"
                ref={inputRef}
              />
              <button onClick={onClick}>
                <SearchIcon />
              </button>
            </div>
            <History />
          </div>
        </div>
      ) : (
        <div
          className="w-[50%] h-12 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 rounded-full absolute top-0 mt-5 flex justify-between px-6 animate-fade-down animate-once animate-duration-1000"
          onMouseDown={() => setClickedInside(true)}
        >
          <input
            placeholder="Buscar..."
            autoComplete="off"
            type="text"
            name="search"
            value={input.search}
            onChange={(e) => handleChange(e)}
            onClick={handleClick}
            className="w-full h-full bg-transparent focus:outline-none"
            ref={inputRef}
          />
          <button onClick={onClick}>
            <SearchIcon />
          </button>
        </div>
      )}
    </>
  );
}
