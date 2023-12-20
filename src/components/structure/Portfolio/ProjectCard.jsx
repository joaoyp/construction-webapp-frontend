import { Lettering } from "../../common/Lettering";

export const ProjectCard = ({thumbnail, title, desc}) => {
    return( 
        <div className="h-100 w-80 flex flex-col items-center rounded-lg hover:cursor-pointer hover:bg-gray-100 p-4">
            <div className="">
                <img className="rounded-lg max-h-52" src={thumbnail} alt="Service's Thumbnail" />
            </div>
            <div className="w-full justify-center flex">
                <Lettering color={"orange"} text={title} fontSize={24} />
            </div>
            <div className="w-full justify-center flex">
                <Lettering color={"black"} text={desc} fontSize={16} />
            </div>
        </div>);
  };
  