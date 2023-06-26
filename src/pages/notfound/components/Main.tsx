import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main className="flex flex-col justify-center items-center gap-4 h-80 z-10">
      <p className="text-bold text-4xl text-black">Upss, aquí no hay nada.</p>
      <Link to={"/"}>
        <button className="px-4 py-2  text-black rounded-full text-black border border-gray-500 cursor-pointer">
          Volver al inicio
        </button>
      </Link>
    </main>
  );
}
