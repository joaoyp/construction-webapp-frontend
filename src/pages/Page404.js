import { useEffect } from "react";
import { title } from "../functions/changeDocumentTitle";
import { PrimaryButton } from "../components/common/PrimaryButton";
import { CustomLink } from "../components/common/CustomLink";
import { useNavigate } from "react-router-dom";

export const Page404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    title("Erro 404");
  }, []);

  return (
    <main>
      <div className="w-full  real-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-600 text-8xl">
            Erro 404
          </div>
          <div className="mt-10 text-4xl">Página não encontrada.</div>
          <div className="mt-6 text-2xl">
            Oops, a página que estavas à procura não foi encontrada.
          </div>
          <div className="mt-10">
            <PrimaryButton
              bgcolor="orange"
              color="white"
              hoverBgColor="orange"
              hoverColor="white"
              size="large"
              variant="contained"
              text="Voltar"
              fontFamily="Alice"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
        </div>
        <div className="bg-[url('https://i1.sndcdn.com/artworks-MQvTMVNrUgOb8iIg-geIShw-t500x500.jpg')] w-3/12 h-[50vh] bg-cover ml-20"></div>
      </div>
    </main>
  );
};
