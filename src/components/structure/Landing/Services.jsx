import { ServiceCard } from "./ServiceCard";
import Caixilharia from "../../../resources/images_services/caixilharia.jpg";
import Canalizacao from "../../../resources/images_services/canalizacao.webp";
import Carpintaria from "../../../resources/images_services/carpintaria.webp";
import Climatizacao from "../../../resources/images_services/climatizacao.jpg";
import Eletricidade from "../../../resources/images_services/eletricidade.avif";
import Gas from "../../../resources/images_services/gas.jpg";
import Iluminacao from "../../../resources/images_services/iluminacao.jpg";
import Ladrilho from "../../../resources/images_services/ladrilho.jpg";
import Pavimentos from "../../../resources/images_services/pavimentos.avif";
import Pintura from "../../../resources/images_services/pintura.jpg";
import Pladur from "../../../resources/images_services/pladur.webp";
import Remodelacoes from "../../../resources/images_pa/white-house.jpg";
import { Lettering } from "../../common/Lettering";

export const Services = () => {
    return( 
        <>
            <div className="flex justify-center w-full mt-10">
                <Lettering fontSize={40} text={"Os nossos Serviços"}/>
            </div>
            <div className="w-full h-fit flex justify-center mt-8">
                <div className="grid grid-cols-4 w-fit h-fit p-8 bg-gray-100 rounded-lg text-center gap-6 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1">
                    <ServiceCard thumbnail={Pintura} title={"Pintura"} desc={"Aprimore a estética do seu espaço com os nossos serviços profissionais de pintura."} />
                    <ServiceCard thumbnail={Ladrilho} title={"Ladrilho"} desc={"Eleve seus interiores com os nossos serviços de ladrilho realizados pela nossa experiente equipa."} />
                    <ServiceCard thumbnail={Caixilharia} title={"Caixilharia"} desc={"Instalação de janelas e portas, de forma a melhorar a segurança e a estética da sua propriedade."} />
                    <ServiceCard thumbnail={Pladur} title={"Pladur"} desc={"Alcance espaços interiores versáteis e modernos com nossos serviços de pladur."} />
                    <ServiceCard thumbnail={Pavimentos} title={"Pavimentos"} desc={"Pise com elegância as nossas soluções de pavimentos. Seja de madeira, laminado ou azulejo, garantimos a instalação perfeita para o seu espaço."} />
                    <ServiceCard thumbnail={Carpintaria} title={"Carpintaria"} desc={"Os nossos serviços de carpintaria sob medida, adicionam um toque de artesanato a cada canto."} />
                    <ServiceCard thumbnail={Gas} title={"Gás"} desc={"Garanta uma instalação de gás segura e eficiente com nossos serviços especializados."} />
                    <ServiceCard thumbnail={Iluminacao} title={"Iluminação"} desc={"Ilumine o seu espaço pessoal com os nossos serviços de iluminação especializados."} />
                    <ServiceCard thumbnail={Canalizacao} title={"Canalização"} desc={"Experimente um fluxo de água e drenagem sem problemas com nossos serviços de canalização."} />
                    <ServiceCard thumbnail={Eletricidade} title={"Eletricidade"} desc={"Garanta um sistema elétrico confiável e seguro com nossos serviços elétricos. Desde instalações até reparos."} />
                    <ServiceCard thumbnail={Climatizacao} title={"Climatização"} desc={"Tenha controlo sob o seu espaço, com os nossos serviços profissionais de climatização."} />
                    <ServiceCard thumbnail={Remodelacoes} title={"Remodelações"} desc={"Faça uma transformação total ao seu espaço com nossos serviços de remodelação, sempre com a maior qualidade e eficácia."} />
                </div>
            </div>
        </>
    );
  };