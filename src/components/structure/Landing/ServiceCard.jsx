import { Lettering } from "../../common/Lettering";

export const ServiceCard = ({thumbnail, title, desc}) => {
    return( 
        <div className="h-fit w-80 flex flex-col items-center">
            <div className="">
                <img className="rounded-lg max-h-52" src={thumbnail} alt="Service's Thumbnail" />
            </div>
            <div className="w-full justify-center flex">
                <Lettering fontWeight={"bold"} color={"orange"} text={title} fontSize={24} />
            </div>
            <div className="w-full justify-center flex">
                <Lettering color={"black"} text={desc} fontSize={16} />
            </div>
        </div>);
  };
  