import { Link } from "react-router-dom";
import { Lettering } from "../../common/Lettering";
import Project1 from "../../../resources/images_pa/20230216_153626.jpg";
import Project2 from "../../../resources/images_pa/20230217_125000.jpg";
import Project3 from "../../../resources/images_pa/20230217_124835.jpg";
import Project4 from "../../../resources/images_pa/20230707_103554.jpg";
import { ProjectCard } from "../Portfolio/ProjectCard";
import { PrimaryButton } from "../../common/PrimaryButton";

export const DemoProjects = () => {
  return (
    <div className="">
      <div className="flex justify-center w-full mt-10 text-center">
          <Lettering fontSize={40} text={"Alguns dos nossos Projetos"}/>
      </div>
      <div className="w-full h-fit flex justify-center">
          <div className="grid grid-cols-2 w-fit h-fit pt-12 pl-12 pr-8 text-center gap-6 max-md:grid-cols-1">
            <ProjectCard thumbnail={Project1} title={"Project 1"} location={"Lisboa - Areeiro"} />
            <ProjectCard thumbnail={Project2} title={"Project 2"} location={"Lisboa - Saldanha"} />
            <ProjectCard thumbnail={Project3} title={"Project 3"} location={"Margem Sul - Cabanas"} />
            <ProjectCard thumbnail={Project4} title={"Project 4"} location={"Margem Sul - Cabanas"} />
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
    </div>
  );
};
