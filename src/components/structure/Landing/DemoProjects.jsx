import { Link } from "react-router-dom";
import { Lettering } from "../../common/Lettering";
import Project1 from "../../../resources/images_pa/20230216_153626.jpg";
import Project2 from "../../../resources/images_pa/20230217_125000.jpg";
import Project3 from "../../../resources/images_pa/20230217_124835.jpg";
import { ProjectCard } from "../Portfolio/ProjectCard";
import { PrimaryButton } from "../../common/PrimaryButton";

export const DemoProjects = () => {
  return (
    <>
      <div className="flex justify-center w-full mt-10">
          <Lettering fontSize={40} text={"Alguns dos nossos Projetos"}/>
      </div>
      <div className="w-full h-fit flex justify-center">
          <div className="grid grid-cols-3 w-fit h-fit pt-8 pl-8 pr-8 text-center gap-6 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1">
            <ProjectCard thumbnail={Project1} title={"Project 1"} desc={"Descrição do projeto 1."} />
            <ProjectCard thumbnail={Project2} title={"Project 2"} desc={"Descrição do projeto 2."} />
            <ProjectCard thumbnail={Project3} title={"Project 3"} desc={"Descrição do projeto 3."} />
          </div>
      </div>
      <div className="flex justify-center w-full mt-8 mb-8">
        <PrimaryButton
                bgcolor="orange"
                color="white"
                hoverBgColor="white"
                hoverColor="orange"
                size="large"
                variant="contained"
                text="Ver Mais"
                fontFamily="Alice"
                to={"/portefolio"}
              />
      </div>
    </>
  );
};
