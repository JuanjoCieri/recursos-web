type ResourceCard = {
  cardImage: any;
  cardTittle: string;
};

export default function Header({ cardImage, cardTittle }: ResourceCard) {
  return (
    <>
      <div className="w-full">
        <div className="w-full h-[300px] flex justify-start items-center rounded-xl">
          <img
            src={cardImage}
            className="w-full h-[300px] object-cover rounded-[24px]"
            alt={`Imagen de ${cardTittle}`}
          />
          <h3 className="text-4xl lg:text-6xl lg:text-4xl font-medium absolute pl-6 lg:pl-10 text-black">
            {cardTittle}
          </h3>
        </div>
      </div>
    </>
  );
}
