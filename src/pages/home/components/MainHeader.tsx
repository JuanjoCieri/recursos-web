export default function MainHeader() {
  return (
    <div className="lg:w-[60%] flex flex-col gap-2">
      <h1 className="text-4xl lg:text-6xl font-bold text-black">
        Recursos gratuitos para desarrolladores web.
      </h1>
      <h3 className="font-bold text-lg lg:text-xl">
        <span className="text-orange-400">+150</span> recursos seleccionados
        para que puedas llevar tu rendimiento al siguiente nivel.
      </h3>
    </div>
  );
}
