import { Resources } from "../interfaces";

import background from "../../assets/resourcesImage/Image2.jpeg"

import BasicPatternRepository from "./images/BasicPatternRepository.svg";
import BgJar from "./images/BgJar.svg";
import BlobAnimation from "./images/BlobAnimation.png";
import Blobmaker from "./images/Blobmaker.svg";
import Blobs from "./images/Blobs.gif";
import Fffuel from "./images/Fffuel.png";
import Haikei from "./images/Haikei.svg";
import Heazy from "./images/Heazy.svg";
import HeroPatterns from "./images/HeroPatterns.png";
import MoreGraphics from "./images/More.Graphics.svg";
import PatternGenerator from "./images/PatternGenerator.svg";
import Patternico from "./images/Patternico.png";
import ShapeDivider from "./images/ShapeDivider.jpg";
import SinWaver from "./images/SinWaver.svg";
import Squircley from "./images/Squircley.svg";
import SuperDesigner from "./images/SuperDesigner.svg";
import SvgBackgrounds from "./images/SvgBackgrounds.png";
import SvgWaves from "./images/SvgWaves.svg";
import Tabbied from "./images/Tabbied.svg";

const backgrounds: Resources[] = [
  {
    resourceName: "Backgrounds",
    resourceImage: background
  },
  {
    resourceCategories: [
      {
        categoryName: "Formas, Patrones & Backgrounds",
        categoryResources: [
          {
            resourceName: "Basic Pattern Repository",
            resourceDesc: "Repositorio básico de patrones SVG: solo para tu disfrute.",
            resourceImage: BasicPatternRepository,
            resourceBackLink: "https://patterns.helloyes.dev/"
          },
          {
            resourceName: "BgJar",
            resourceDesc: "Generador gratuito de fondos SVG.",
            resourceImage: BgJar,
            resourceBackLink: "https://bgjar.com/"
          },
          {
            resourceName: "Blob Animation",
            resourceDesc: "Genera blobs animados suaves para tu sitio web.",
            resourceImage: BlobAnimation,
            resourceBackLink: "https://blobanimation.com/"
          },
          {
            resourceName: "Blobmaker",
            resourceDesc: "Genera formas únicas de SVG con apariencia orgánica con esta herramienta de diseño.",
            resourceImage: Blobmaker,
            resourceBackLink: "https://www.blobmaker.app/"
          },
          {
            resourceName: "Blobs",
            resourceDesc: "Genera hermosas formas de blobs.",
            resourceImage: Blobs,
            resourceBackLink: "https://blobs.app/"
          },
          {
            resourceName: "Fffuel",
            resourceDesc: "Una extensa colección de generadores de SVG gratuitos y herramientas de color.",
            resourceImage: Fffuel,
            resourceBackLink: "https://fffuel.co/"
          },
          {
            resourceName: "Haikei",
            resourceDesc: "Una aplicación web para generar formas, fondos y patrones de SVG únicos.",
            resourceImage: Haikei,
            resourceBackLink: "https://haikei.app/"
          },
          {
            resourceName: "Heazy",
            resourceDesc: "Genera visuales vectoriales hermosos, únicos y llamativos de forma gratuita.",
            resourceImage: Heazy,
            resourceBackLink: "https://heazy.studio/"
          },
          {
            resourceName: "Hero Patterns",
            resourceDesc: "Patrones SVG repetibles para proyectos web.",
            resourceImage: HeroPatterns,
            resourceBackLink: "https://heropatterns.com/"
          },
          {
            resourceName: "More.Graphics",
            resourceDesc: "Herramientas generadoras de patrones únicos y gratuitos en un solo lugar.",
            resourceImage: MoreGraphics,
            resourceBackLink: "https://more.graphics/"
          },
          {
            resourceName: "Pattern Generator",
            resourceDesc: "Herramienta para crear patrones únicos, sin costuras y libres de regalías.",
            resourceImage: PatternGenerator,
            resourceBackLink: "https://doodad.dev/pattern-generator/"
          },
          {
            resourceName: "Patternico",
            resourceDesc: "Generador de patrones gratuito para patrones y fondos sin costuras.",
            resourceImage: Patternico,
            resourceBackLink: "https://patternico.com/"
          },
          {
            resourceName: "Shape Divider",
            resourceDesc: "Herramienta para exportar divisores de formas SVG hermosas para tus últimos proyectos.",
            resourceImage: ShapeDivider,
            resourceBackLink: "https://www.shapedivider.app/"
          },
          {
            resourceName: "Sin Waver",
            resourceDesc: "Crea iconos y diseños perfectos de ondas sinusoidales con este generador de SVG.",
            resourceImage: SinWaver,
            resourceBackLink: "https://www.sinwaver.com/"
          },
          {
            resourceName: "Squircley",
            resourceDesc: "Crea hermosas formas orgánicas.",
            resourceImage: Squircley,
            resourceBackLink: "https://squircley.app/"
          },
          {
            resourceName: "Super Designer",
            resourceDesc: "Herramientas de diseño gratuitas para crear fondos, patrones y formas únicas.",
            resourceImage: SuperDesigner,
            resourceBackLink: "https://superdesigner.co/"
          },
          {
            resourceName: "Svg Backgrounds",
            resourceDesc: "Patrones y fondos de SVG personalizables para tus diseños.",
            resourceImage: SvgBackgrounds,
            resourceBackLink: "https://www.svgbackgrounds.com/"
          },
          {
            resourceName: "Svg Waves",
            resourceDesc: "Genera ondas de SVG.",
            resourceImage: SvgWaves,
            resourceBackLink: "https://svgwave.in/"
          },
          {
            resourceName: "Tabbied",
            resourceDesc: "Dibuja con patrones generados.",
            resourceImage: Tabbied,
            resourceBackLink: "https://tabbied.com"
          },
        ]
      }
    ]
  }
];

export default backgrounds;
