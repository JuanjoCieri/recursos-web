export default function MainHeader() {
  return (
    <div className="lg:w-[75%] flex flex-col gap-2">
      <h1 className="text-4xl lg:text-7xl font-bold text-black animate-fade-right animate-once animate-duration-1000">
        Recursos gratuitos para desarrolladores web.
      </h1>
      <h3 className="font-bold text-black text-lg lg:text-3xl lg:w-[80%]">
        <span className="text-orange-400">+300</span> recursos seleccionados
        para que puedas llevar tu rendimiento al siguiente nivel.
      </h3>
    </div>
  );
}
