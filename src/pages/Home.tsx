import { Poll } from "../components/Poll/index"
import { FooterPagination } from "@/components/shared/Footer.pagination"
import { useParams, useNavigate } from "react-router-dom"
import { useData } from "../hooks/useData"
import { useEffect, useState } from "react"
import { ApiError } from "./fallback/ApiError"

interface PollItems{
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string
}
interface dataType{
    polls: PollItems[]
}

export const Home: React.FC = () => {
    const [renderLimit] = useState(12)
    const [totapPages, setTotalPages]= useState(0)
    const { page } = useParams<{page: string}>()
    const navigator = useNavigate()
    if(!page){
        console.log("isnt page")
        return
    }
    const pageNumber = parseInt(page)
    const { data, isFetching, hasError} = useData<dataType>("/polls")
    const polls = data?.polls

    useEffect(()=>{
        if(isFetching === false){
            if(!polls){
                return
            }
            setTotalPages(Math.ceil(polls?.length/ renderLimit))
        }
    }, [isFetching, hasError])


    function RenderElements(isFetching: boolean, hasError: boolean) {
        if (hasError === true) {
            console.log("Erro de api");
            return <ApiError />;
        }
        if (isFetching === true && hasError === false) {
            console.log("gerando elementos fake");
            const fakeElements = [];
            for (let i = 0; i < 10; i++) {
                fakeElements.push(
                    <Poll.PollComponent
                        isLoad={false}
                        voteCount={1}
                        key={i}
                        createdAt={""}
                        id={`${i}`}
                        title={"aaaaaaaaaaaaaaaaaaaaaa"}
                        onClick={() => {}}
                    />
                );
            }
            return fakeElements;
        }
        if (isFetching === false && hasError === false) {
            console.log("gerando elementos");
            return polls?.map((poll) => (
                <Poll.PollComponent
                    isLoad={true}
                    voteCount={1}
                    key={poll.id}
                    createdAt={poll.createdAt}
                    id={poll.id}
                    title={poll.title}
                    onClick={() => navigator(`/details/${poll.id}`)}
                />
            ));
        }
        return null;
    }
    

    return(
        <div 
        className="h-full relative 
        w-full items-center justify-between 
        bg-zinc-100 dark:bg-zinc-950">

            <Poll.Wrapper 
                renderLimit={renderLimit} 
                currentPage={pageNumber}>
                    {
                        RenderElements(isFetching, hasError)
                    }
            </Poll.Wrapper>
            <FooterPagination 
            navigate={navigator} 
            actualPage={parseInt(page)} 
            totalPage={totapPages} />
        </div>
    )
}