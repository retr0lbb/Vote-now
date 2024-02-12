import React from "react"
import { twMerge } from "tailwind-merge";
import { FaTrash } from "react-icons/fa";

interface PollAditionalOptions{
    className: string,
    optioName: string,
    onClickDelete: () => void
}
export const PollAditionalOptions: React.FC<PollAditionalOptions> = ({optioName, className, onClickDelete}) => {
    return(
        <div className={twMerge("w-full flex items-center justify-between p-2 h-10 rounded-md bg-zinc-200 text-zinc-950 dark:bg-zinc-900 dark:text-zinc-300", className)}>
            <p className="w-full overflow-hidden">
                {optioName}
            </p>
            <div className="flex gap-2">
            <FaTrash className="cursor-pointer text-zinc-400" onClick={onClickDelete} />
            </div>
      
        </div>
    )
}