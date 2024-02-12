
import React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button, Skeleton } from "@nextui-org/react"


interface PollProps{
    title: string,
    createdAt: string
    id: string
    voteCount: number
    onClick: ()=> void
    isLoad: boolean
    
}
function Poll({createdAt, id, title, voteCount, isLoad,  onClick}: PollProps){   
    

    function CalculeDate(){
        const createDate = new Date(createdAt)
        const now = new Date()

        const daysInMiliseconds = 1000 * 60 * 60 * 24;
        const diferr = now.getTime() - createDate.getTime()
        const numberOfDaysSinceCreation = Math.floor(diferr / daysInMiliseconds)

        return numberOfDaysSinceCreation
    }

    return(
        <Card key={id} className="grid place-items-center relative max-h-44 min-w-80">
                {CalculeDate() < 1? (
                    <div className="absolute flex justify-center items-center font-bold text-emerald-600 top-3 right-4 animate-pulse w-3 h-3">
                    new
                </div>
                ) : ""}
            <CardHeader className="w-full">
                <CardTitle className="flex items-center">
                    <Skeleton isLoaded={isLoad}>
                        {title}
                    </Skeleton>
                </CardTitle>
                <Skeleton isLoaded={isLoad}>
                    <CardDescription>{`Criado a ${CalculeDate()} dias`} <br></br>{voteCount} People Voted </CardDescription>
                </Skeleton>
            </CardHeader>
                <CardContent className="flex w-full gap-2">

                    <Skeleton isLoaded={isLoad} className="flex flex-1 w-full">
                        <Button onClick={onClick} variant="faded" color="primary" className="py-5 font-semibold w-full rounded dark:bg-zinc-950">Votar Agora!</Button>
                    </Skeleton>
                    <Skeleton isLoaded={isLoad}>
                    <Button variant="ghost" onClick={() => {
                        alert("Votação denunciada com sucesso")
                    }} color="danger" className="py-5 px-10 rounded">Denunciar</Button>
                    </Skeleton>
            </CardContent>
        </Card>
    )
}



export default React.memo(Poll)