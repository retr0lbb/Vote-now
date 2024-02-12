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
           <div className={`p-5 grid gap-2 grid-cols-4`}>
            {renderItems()}
           </div>
        </section>
    )
}