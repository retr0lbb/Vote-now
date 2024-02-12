import {Card, CardBody} from "@nextui-org/react";
import { twMerge } from "tailwind-merge"

interface PollVotesInput{
    title: string;
    voteCount: number;
    onPress: () => void;
    className?: string;
    isVoted?: boolean
}

export const PollVotesInput: React.FC<PollVotesInput> = ({title, voteCount, onPress, className, isVoted}) => {
    return(
        <div className="w-full flex items-center justify-center">
            <Card 
            onPress={onPress} 
            isPressable 
            shadow="sm"
            radius="sm"
            className={
                twMerge(`w-full px-5 p-2 
                text-xl flex-row items-center 
                justify-between flex transition-all 
                ${isVoted? "bg-emerald-500": ""}`, className)}>
                <div className={`w-full text-left px-2 ${isVoted? "text-zinc-100" : ""}`}>
                {title}
                </div>
                <CardBody className={`text-right text-zinc-400 ${isVoted? "text-zinc-100": ""}`}>
                    votes: {voteCount}
                </CardBody>
            </Card>
        </div>
    )
}