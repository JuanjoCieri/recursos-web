import MainCard from "./MainCard";
import Image1 from "../../../assets/resourcesImage/Image1.jpeg";
import Image2 from "../../../assets/resourcesImage/Image2.jpeg";
import Image3 from "../../../assets/resourcesImage/Image3.jpeg";
import Image4 from "../../../assets/resourcesImage/Image4.jpeg";
import Image5 from "../../../assets/resourcesImage/Image5.jpeg";
import Image6 from "../../../assets/resourcesImage/Image6.jpeg";

export default function MainCards() {
  return (
    <>
      <section className="w-full py-16 grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-10">
        <MainCard cardImage={Image1} cardTittle="Colores" cardBackLink="colores" />
        <MainCard cardImage={Image2} cardTittle="Backgrounds" cardBackLink="backgrounds" />
        <MainCard cardImage={Image3} cardTittle="Iconos" cardBackLink="iconos" />
        <MainCard cardImage={Image4} cardTittle="Ideas" cardBackLink="ideas" />
        <MainCard cardImage={Image5} cardTittle="Tipografía" cardBackLink="tipografia" />
        <MainCard cardImage={Image6} cardTittle="Ilustraciones" cardBackLink="ilustracion" />
      </section>
    </>
  );
}
