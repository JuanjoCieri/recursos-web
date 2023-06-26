import { Link } from "react-router-dom";
import { HistoryIcon } from "../../../utils/icons/Icons";

export default function History() {
  const history = localStorage.getItem("history");
  return (
    <>
      {!history ? (
        false
      ) : (
        <div className="container flex flex-col items-start justify-start w-full px-4 py-2 max-h-52 lg:max-h-80 overflow-y-scroll">
          <ul className="flex flex-col items-start justify-start">
            {JSON.parse(history).map((data: string, index: number) => (
              <Link to={"/search/" + data} key={index}>
                <li
                  key={index}
                  className="flex flex-row items-center justify-center gap-2 py-2"
                >
                  <HistoryIcon />
                  <span className="text-gray-600 hover:text-gray-900">{data}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
