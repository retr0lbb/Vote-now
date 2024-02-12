import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
interface FooterPaginationProps{
    totalPage: number,
    actualPage: number
    navigate: (local: string)=> void
}

export const FooterPagination: React.FC<FooterPaginationProps> = ({totalPage, actualPage, navigate}) => {
    
    function generateNumberPagination(n: number){
        let arrOFComponents= [];
        for (let index = 1; index <= n; index++) {
            if(index == actualPage){
                arrOFComponents.push(<PaginationLink key={index} isActive onClick={() => navigate(`/${index}`)} >{index}</PaginationLink>)
            }else{
                arrOFComponents.push(<PaginationLink key={index} onClick={() => navigate(`/${index}`)} >{index}</PaginationLink>)    
            }
        }
        return arrOFComponents
    }
    return(
        <div className="text-slate-950 p-5 bg-zinc-100 dark:bg-zinc-950 absolute bottom-0 left-0 right-0 dark:text-slate-200">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious className="cursor-pointer" onClick={() => {
                            if(actualPage !== 1){
                                navigate(`/${actualPage - 1}`)
                            }
                        }} />
                    </PaginationItem>
                    <PaginationItem>
                        {generateNumberPagination(totalPage)}
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext className="cursor-pointer" onClick={() => {
                            if(actualPage !== totalPage){
                                navigate(`/${actualPage + 1}`)
                            }
                        }} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}


