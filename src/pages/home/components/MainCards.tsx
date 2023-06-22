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
        <MainCard cardImage={Image1} cardTittle="Colores" />
        <MainCard cardImage={Image2} cardTittle="Backgrounds" />
        <MainCard cardImage={Image3} cardTittle="Iconos" />
        <MainCard cardImage={Image4} cardTittle="Ideas" />
        <MainCard cardImage={Image5} cardTittle="Tipografía" />
        <MainCard cardImage={Image6} cardTittle="Ilustraciones" />
      </section>
    </>
  );
}
