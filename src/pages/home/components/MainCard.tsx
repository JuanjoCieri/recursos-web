type ResourceCard = {
    cardImage: any;
    cardTittle: string;
}

export default function MainCard ({cardImage, cardTittle}: ResourceCard) {
    return (
        <>
        <div className="w-80 lg:w-96 h-36 flex justify-start items-center rounded-xl">
            <img src={cardImage} className="w-full h-36 object-cover rounded-[24px]" alt={`Imagen de ${cardTittle}`}/>
            <h3 className="text-4xl font-medium absolute pl-6 text-black">{cardTittle}</h3>
        </div>
        </>
    )
}