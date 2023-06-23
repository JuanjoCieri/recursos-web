import { Link } from "react-router-dom";

type ResourceCard = {
  cardImage: any;
  cardTittle: string;
  cardBackLink: string;
};

export default function MainCard({
  cardImage,
  cardTittle,
  cardBackLink,
}: ResourceCard) {
  return (
    <>
      <Link to={"/" + cardBackLink}>
        <div className="w-80 lg:w-[28rem] h-44 flex justify-start items-center rounded-xl">
          <img
            src={cardImage}
            className="w-full h-44 object-cover rounded-[24px]"
            alt={`Imagen de ${cardTittle}`}
          />
          <h3 className="text-4xl lg:text-4xl font-medium absolute pl-6 text-black">
            {cardTittle}
          </h3>
        </div>
      </Link>
    </>
  );
}
