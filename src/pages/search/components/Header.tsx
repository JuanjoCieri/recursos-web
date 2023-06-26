type HeaderProps = {
  searchValue: string;
};

export default function Header({ searchValue }: HeaderProps) {
  return (
    <>
      <section className="w-full flex justify-start items-center pb-10">
        <h4 className="text-3xl font-medium text-black">
          Resultados para {searchValue}:
        </h4>
      </section>
    </>
  );
}
