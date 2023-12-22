import { Lettering } from "../../common/Lettering";

export const ProjectCard = ({thumbnail, title, location}) => {
    return( 
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 group relative h-fit w-full flex flex-col hover:cursor-pointer">
            <img className="max-h-80 max-xl:max-h-60 object-cover" src={thumbnail} alt="Project Thumbnail" />
            <div className="hidden group-hover:block absolute w-full h-full max-sm:block">
                <div className="opacity-50 max-sm:opacity-40 bg-black absolute inset-0"></div>
                {
                /*<div className="absolute flex justify-center items-center w-full h-full">
                    <Lettering text={"Ver Mais"} color={"white"} fontSize={20}/>
                </div>*/
                }
                <div className="absolute flex flex-col items-start justify-end pb-4 pl-4 text-left w-full h-full">
                    <Lettering text={title} color={"orange"} fontSize={36}/>
                    <Lettering text={location} color={"white"} fontSize={20}/>
                </div>
            </div>
        </div>
    );
  };