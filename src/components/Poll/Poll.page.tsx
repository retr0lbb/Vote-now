import {Card, CardBody,} from "@nextui-org/react";
import { PollVotesInput } from "./PollVotesInput";
import { useEffect, useState } from "react";
import { toast } from "sonner"
import { useData } from "@/hooks/useData";
import { useParams} from "react-router-dom"
import axios from "axios";
import { ApiError } from "@/pages/fallback/ApiError";


interface Options{
    id: string;
    title: string
    score: number
}
interface PollItems{
    id: string;
    title: string;
    options: Options[]
}
interface dataType{
    poll: PollItems[]
}

export default function PollDetails(){
    const { id } = useParams();
    const hasVoted = localStorage.getItem(`${id}`);
    const [votedOption, setVotedOption] = useState(hasVoted? hasVoted: "");

    const { data, isFetching, hasError } = useData<dataType | any>(`/polls/${id}`)
    const [poll, setPoll] = useState<PollItems>()

    const instance = axios.create({
        withCredentials: true
    })
    useEffect(()=>{
        setPoll(data?.poll)
    }, [isFetching])

    const voteToServer = (pollOptionId: string) =>{
        const body = {
            pollOptionId: pollOptionId
        }
        instance.post(`http://localhost:3333/polls/${id}/votes`, body)
        .then(_ =>{
            toast.success("Voto alterado com sucesso")
        })
        .catch(err => {
            alert("Error error")
            console.log(err)
            return
        })
    }
    const handleVote = (option: string, pollOptionId: string) => {
        if(option == votedOption){
            toast.warning("Ja votou na opção")
            return;
        }
        if(votedOption == ""){
            toast.success(`You voted on: ${option}`)
        }else{
            toast.info(`Mudando seu voto para ${option}`)
        }
        setVotedOption(option);
        localStorage.setItem(`${id}`, `${option}`)
        try {
            voteToServer(pollOptionId)
        } catch (error) {
            if(error){
                console.log(error)
                return;
            }
        }
    };

    return(
        <div className="w-full h-full grid place-items-center">
            <Card shadow="lg" 
            isBlurred 
            className="p-6 min-w-96 flex flex-col 
            items-center justify-center bg-zinc-50 
            dark:bg-zinc-950">
                <h1 className="text-2xl text-center pb-4 font-bold dark:text-zinc-100 text-zinc-950 w-full">{poll?.title}</h1>
                <CardBody className="flex flex-col gap-3">
                {
                    isFetching ==false && hasError == false ? 
                    (poll?.options.map( (opt: Options) => {
                        return(
                            <PollVotesInput 
                            key={opt.id} 
                            title={opt.title} 
                            isVoted={votedOption === opt.title} 
                            onPress={() => handleVote(opt.title, opt.id)} 
                            voteCount={opt.score} />
                        )
                    })):
                    (
                        <ApiError />
                    )
                }
                </CardBody>
            </Card>
        </div>
    )
}