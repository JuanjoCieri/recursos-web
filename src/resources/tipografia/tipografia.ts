import { Resources } from "../interfaces";

import background from "../../assets/resourcesImage/Image5.jpeg"

import Archetype from "./images/Archetype.svg";
import BeautifulWebType from "./images/BeautifulWebType.png";
import Dafont from "./images/Dafont.png";
import FontBrief from "./images/FontBrief.svg";
import Fontjoy from "./images/Fontjoy.jpg";
import Fontpair from "./images/Fontpair.svg";
import FontPairingsByPeople from "./images/FontPairingsByPeople.jpg";
import Fontshare from "./images/Fontshare.svg";
import FontsInTheWild from "./images/FontsInTheWild.png";
import FontsInUse from "./images/FontsInUse.jpg";
import FreeFaces from "./images/FreeFaces.svg";
import GoogleFonts from "./images/GoogleFonts.png";
import GoogleFontsPairings from "./images/GoogleFontsPairings.png";
import MaterialDesignTypeScale from "./images/MaterialDesignTypeScale.png";
import OpenFoundary from "./images/OpenFoundary.png";
import Proportio from "./images/Proportio.png";
import TheGoodLineHeight from "./images/TheGoodLine-Height.svg";
import Typeculator from "./images/Typeculator.svg";
import Typescale from "./images/Typescale.png";
import Typespiration from "./images/Typespiration.jpg";
import TypeTrends from "./images/TypeTrends.png";
import Typewolf from "./images/Typewolf.jpg";
import Typographica from "./images/Typographica.png";
import Uncut from "./images/Uncut.png";
import LetterformArchive from "./images/LetterformArchive.jpg";
import WebTypography from "./images/WebTypography.png";
import DonnyTruong from "./images/DonnyTruong.png";
import thefutur from "./images/thefutur.svg";
import FontShop from "./images/FontShop.png";
import ButtericksTypography from "./images/ButtericksTypography.png";
import Figma from "./images/Figma.svg";
import Typographyhandbook from "./images/Typographyhandbook.png";


const tipografias: Resources[] = [
    {
        resourceName: "Tipografias",
        resourceImage: background
    },
    {
        resourceCategories: [
            {
                categoryName: "Guías sobre fuentes",
                categoryResources: [
                    {
                        resourceName: "Web Typography",
                        resourceDesc: "Elementos del estilo tipográfico",
                        resourceImage: WebTypography,
                        resourceBackLink: "http://webtypography.net/"
                    },
                    {
                        resourceName: "Google Fonts",
                        resourceDesc: "Biblioteca de guías tipográficas originales",
                        resourceImage: GoogleFonts,
                        resourceBackLink: "https://fonts.google.com/knowledge"
                    },
                    {
                        resourceName: "Donny Truong",
                        resourceDesc: "Guía de tipografía web profesional",
                        resourceImage: DonnyTruong,
                        resourceBackLink: "https://prowebtype.com/"
                    },
                    {
                        resourceName: "thefutur",
                        resourceDesc: "La guía definitiva de tipografía",
                        resourceImage: thefutur,
                        resourceBackLink: "https://thefutur.com/content/the-ultimate-guide-to-typography/"
                    },
                    {
                        resourceName: "FontShop",
                        resourceDesc: "Tipo Terminología Glosario",
                        resourceImage: FontShop,
                        resourceBackLink: "https://www.fontshop.com/glossary"
                    },
                    {
                        resourceName: "Typewolf",
                        resourceDesc: "Guías y recursos de Typewolf",
                        resourceImage: Typewolf,
                        resourceBackLink: "https://www.typewolf.com/guides/"
                    },
                    {
                        resourceName: "Butterick's Typography",
                        resourceDesc: "Guía tipográfica para medios digitales",
                        resourceImage: ButtericksTypography,
                        resourceBackLink: "https://practicaltypography.com/"
                    },
                    {
                        resourceName: "Figma",
                        resourceDesc: "Guía de tipografía de Figma",
                        resourceImage: Figma,
                        resourceBackLink: "https://www.designsystems.com/typography-guides/"
                    },
                    {
                        resourceName: "Typography Handbook",
                        resourceDesc: "Manual de tipografía",
                        resourceImage: Typographyhandbook,
                        resourceBackLink: "https://typographyhandbook.com/"
                    },
                ]
            },
            {
                categoryName: "Fuentes Gratuitas",
                categoryResources: [
                    {
                        resourceName: "Dafont",
                        resourceDesc: "Una colección de fuentes disponibles para descargar de forma gratuita.",
                        resourceImage: Dafont,
                        resourceBackLink: "https://www.dafont.com/"
                    },
                    {
                        resourceName: "Fontshare",
                        resourceDesc: "Un servicio de fuentes gratuito que pone fuentes de calidad al alcance de todos.",
                        resourceImage: Fontshare,
                        resourceBackLink: "https://www.fontshare.com/"
                    },
                    {
                        resourceName: "Free Faces",
                        resourceDesc: "Una colección curada de tipografías gratuitas de alta calidad.",
                        resourceImage: FreeFaces,
                        resourceBackLink: "https://www.freefaces.gallery/"
                    },
                    {
                        resourceName: "Google Fonts",
                        resourceDesc: "Embelleciendo la web, rápida y abiertamente, a través de una gran tipografía.",
                        resourceImage: GoogleFonts,
                        resourceBackLink: "https://fonts.google.com/"
                    },
                    {
                        resourceName: "Open Foundary",
                        resourceDesc: "Open Foundry es una plataforma GRATUITA de tipografías de código abierto seleccionadas.",
                        resourceImage: OpenFoundary,
                        resourceBackLink: "https://open-foundry.com/"
                    },
                    {
                        resourceName: "Uncut",
                        resourceDesc: "Catálogo de tipografías de código abierto que se centra en tipografía contemporánea.",
                        resourceImage: Uncut,
                        resourceBackLink: "https://uncut.wtf/"
                    },
                ]
            },
            {
                categoryName: "Inspiración",
                categoryResources: [
                    {
                        resourceName: "Beautiful Web Type",
                        resourceDesc: "Guía de las mejores tipografías de código abierto.",
                        resourceImage: BeautifulWebType,
                        resourceBackLink: "https://beautifulwebtype.com/"
                    },
                    {
                        resourceName: "Font Brief",
                        resourceDesc: "Una herramienta de descubrimiento de fuentes revolucionaria para branding y editorial.",
                        resourceImage: FontBrief,
                        resourceBackLink: "https://www.fontbrief.com/"
                    },
                    {
                        resourceName: "Font Pairings By People",
                        resourceDesc: "Prueba combinaciones de fuentes y ve cómo se ven en tu proyecto.",
                        resourceImage: FontPairingsByPeople,
                        resourceBackLink: "https://fontpairings.bypeople.com/"
                    },
                    {
                        resourceName: "Fontjoy",
                        resourceDesc: "Combinación de fuentes simplificada. Genera combinaciones de fuentes con aprendizaje profundo.",
                        resourceImage: Fontjoy,
                        resourceBackLink: "https://fontjoy.com/"
                    },
                    {
                        resourceName: "Fontpair",
                        resourceDesc: "FontPair ayuda a los creadores a utilizar una tipografía hermosa.",
                        resourceImage: Fontpair,
                        resourceBackLink: "https://fontpair.co/"
                    },
                    {
                        resourceName: "Fonts In The Wild",
                        resourceDesc: "Encuentra la fuente gratuita o de pago perfecta para tu próximo proyecto.",
                        resourceImage: FontsInTheWild,
                        resourceBackLink: "https://www.fontsinthewild.com/"
                    },
                    {
                        resourceName: "Fonts In Use",
                        resourceDesc: "Un archivo independiente de tipografía en uso.",
                        resourceImage: FontsInUse,
                        resourceBackLink: "https://fontsinuse.com/"
                    },
                    {
                        resourceName: "Google Fonts Pairings",
                        resourceDesc: "Descubre combinaciones de fuentes de Google seleccionadas y úsalas de inmediato en Figma.",
                        resourceImage: GoogleFontsPairings,
                        resourceBackLink: "https://material.io/blog/google-fonts-pairing-figma"
                    },
                    {
                        resourceName: "Letterform Archive",
                        resourceDesc: "Explora objetos digitalizados de letras, tipografía y diseño gráfico.",
                        resourceImage: LetterformArchive,
                        resourceBackLink: "http://oa.letterformarchive.org/"
                    },
                    {
                        resourceName: "Type Trends",
                        resourceDesc: "Lo último en diseño de tipografías, desde el Monotype Studio.",
                        resourceImage: TypeTrends,
                        resourceBackLink: "https://www.monotype.com/type-trends"
                    },
                    {
                        resourceName: "Typespiration",
                        resourceDesc: "Combos gratuitos de fuentes e inspiración de colores.",
                        resourceImage: Typespiration,
                        resourceBackLink: "https://typespiration.com/"
                    },
                    {
                        resourceName: "Typewolf",
                        resourceDesc: "Recursos principales de tipografía, tendencias y combinaciones.",
                        resourceImage: Typewolf,
                        resourceBackLink: "https://www.typewolf.com/"
                    },
                    {
                        resourceName: "Typographica",
                        resourceDesc: "Reseñas de tipografías, libros y diseño.",
                        resourceImage: Typographica,
                        resourceBackLink: "https://www.typewolf.com/"
                    },
                ]
            },
            {
                categoryName: "Calculadores de tipos de escala",
                categoryResources: [
                    {
                        resourceName: "Archetype",
                        resourceDesc: "Herramienta de navegador para estilos y espaciado tipográfico consistentes.",
                        resourceImage: Archetype,
                        resourceBackLink: "https://archetypeapp.com/"
                    },
                    {
                        resourceName: "Material Design Type Scale",
                        resourceDesc: "Estilos contrastantes para satisfacer las necesidades de productos y contenido.",
                        resourceImage: MaterialDesignTypeScale,
                        resourceBackLink: "https://material.io/design/typography/#type-scale"
                    },
                    {
                        resourceName: "Proportio",
                        resourceDesc: "Esta herramienta crea escalas proporcionales para sistemas de diseño.",
                        resourceImage: Proportio,
                        resourceBackLink: "https://proportio.app/"
                    },
                    {
                        resourceName: "The Good Line-Height",
                        resourceDesc: "La altura de línea adecuada garantiza una alineación perfecta con la cuadrícula de base.",
                        resourceImage: TheGoodLineHeight,
                        resourceBackLink: "https://www.thegoodlineheight.com/"
                    },
                    {
                        resourceName: "Typeculator",
                        resourceDesc: "Enfoque del 'hilo dorado' para generar escalas tipográficas.",
                        resourceImage: Typeculator,
                        resourceBackLink: "https://typeculator.alexpaul.me/"
                    },
                    {
                        resourceName: "Typescale",
                        resourceDesc: "Complemento gratuito para Figma y XD para generar rápidamente una escala tipográfica modular.",
                        resourceImage: Typescale,
                        resourceBackLink: "https://typescale.io/"
                    }
                ]
            }
        ]
    }
];

export default tipografias;