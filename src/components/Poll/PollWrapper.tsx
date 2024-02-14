import React from "react"
import { twMerge } from "tailwind-merge"


interface PollWrappProps{
    columsCount?: number
    children: React.ReactNode
    className?: string
    currentPage: number
    renderLimit?: number
}



export const PollWrapper: React.FC<PollWrappProps> = ({children, className, currentPage = 1, renderLimit = 16}) => {

    const renderItems = () =>{
        const startIndex = (currentPage - 1) * renderLimit
        const endIndex = currentPage * renderLimit

        return React.Children.toArray(children).slice(startIndex, endIndex)
    }
    return(
        <section className={twMerge("flex flex-col items-center", className)}>
           <div className={`p-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-4 
           xs:overflow-y-auto sm:h-auto xs:h-[650px] sx:grid-cols-1`}>
            {renderItems()}
           </div>
        </section>
    )
}