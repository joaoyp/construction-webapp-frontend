import AboutImage from "../../../resources/images_pa/about-image.jpg";
import { Lettering } from "../../common/Lettering";
import { Link } from "react-router-dom";

export const About = () => {
    return (
        <div className="bg-white min-h-[70vh] flex items-center w-full">
            <img className="object-contain h-2/3 w-full m-10" src={AboutImage} alt="About Us" />
            <div className="flex flex-col w-full h-2/3 m-10">
                <div className="">
                    <Lettering fontSize={24} text={"Sobre Nós"} />
                </div>
                <div className="">
                    <Lettering color={"orange"} fontSize={40} text={"Pedro & Agostinho - Construções"} />
                </div>
                <div className="mt-4 mr-10">
                    <Lettering fontSize={18} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum mauris id egestas vulputate. Morbi porta placerat felis sed scelerisque. Sed lacinia porttitor dui, id sollicitudin nunc tincidunt euismod. Proin aliquet maximus enim at dictum. Nunc vel egestas arcu. Quisque aliquet ac turpis et commodo. Curabitur nec rutrum purus, vestibulum maximus metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra suscipit quam ut tempor. Fusce viverra pellentesque mi, eget fringilla turpis. Integer vitae libero tortor. Sed mollis laoreet varius. Cras pharetra nisl eget cursus feugiat. "} />
                </div>
                <div className="w-fit text-orange-400 h-fit flex mt-4">
                    <Link to="/contactos">
                        <Lettering text={"Fale Connosco"} fontSize={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
  };
  