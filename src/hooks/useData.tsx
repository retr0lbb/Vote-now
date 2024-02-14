import { useState, useEffect } from "react"
import axios from "axios"

const api = axios.create({
    baseURL: "https://fluffy-waistcoat-ant.cyclic.app"
})

export function useData<T = unknown>(url: string){
    const [data, setData] = useState<T | null>(null)
    const [isFetching, setIsFetching] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(()=>{
        api.get(url, {
            withCredentials: true
        })
        .then(response => {
            if(response.data === data){
                console.log("no data alteration provided")
                return
            }
            setData(response.data)
        }).finally(() =>{
            setIsFetching(false)
        }).catch(err => {
            console.log(err)
            setHasError(true)
        })
    },[])

    return { data, isFetching, hasError }
}