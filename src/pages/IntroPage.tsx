import { Button} from "@/components/ui/button"

export const IntroPage: React.FC = () => {
    return(
        <div className="w-full flex flex-col items-center justify-center h-full gap-14">
            <div className="flex items-center justify-center flex-col">
                <h1 className="md:text-9xl xs:text-6xl font-bold">Vote Now!</h1>
                <h1 className="md:text-3xl sm:text-xl text-center px-4 text-zinc-400">
                    Vote em enquetes da comunidade e participe de algo incrivel
                </h1>
            </div>
            <div>
                <Button onClick={() => window.location.href = "/1"} 
                className="w-52 h-14 text-2xl p-10 rounded-2xl">
                    Acessar Agora
                </Button>
            </div>
        </div> 
    )
}