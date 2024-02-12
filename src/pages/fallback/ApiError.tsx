import { LuServerOff } from "react-icons/lu";

export const ApiError: React.FC = () => {
    return(
        <div className="w-full h-full absolute 
        inset-0 z-50 flex flex-col justify-center items-center">
            <h1 className="text-6xl"><LuServerOff color="rgb(161 161 170)" /></h1>
            <h1 className="text-4xl font-bold mt-6 text-zinc-900 dark:text-zinc-200">ERRO 500 Erro no Servidor</h1>

            <ul className="list-disc text-xl mt-5 text-zinc-500">
                <li>Reinicie o navegador</li>
                <li>Certifique-se que o seu computador tem internet</li>
                <li>Certifique-se que o seu navegador é suportado</li>
                <li>Desligue o VPN caso esteja Ultilizando</li>
                <li>Não tente usar ferramentas externas no website</li>
            </ul>
        </div>
    )
}