import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FaPlus } from "react-icons/fa6";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import {
    Input
} from "@/components/ui/input"
import {
    Button
} from "@nextui-org/react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle, 
} from "@/components/ui/card"
import { useState } from "react"
import { PollAditionalOptions } from "@/components/shared/pollAditionalOptions"
import axios from "axios";

const optionsSchema = z.object({
    optionName: z.string()
})

const formSchema = z.object({
    pollName: z.string(),
    pollOption: z.array(optionsSchema).min(2)
})


export const CreatePoll: React.FC = () => {
    const [options, setOptions] = useState<any[]>([])
    const [pollName, setPollName] = useState("")
    const [newOption, setNewOption] = useState<any>("")
    const navigator = useNavigate()
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues : {
            pollName: "",
            pollOption: [{ optionName: "" }]
        }
    })
    function onSubmit(){
        if(pollName == ""){
            alert("Insira o nome corretamente")
            return
        }
        if(options.length <2){
            alert("No Minimo 2 Opções de voto")
            return
        }
        console.log(pollName, options)
        const postOptions ={
            title: pollName,
            options: options
        }
        axios.post("https://fluffy-waistcoat-ant.cyclic.app/polls", postOptions).then((response) => {
            console.log(response)
            if(response.status === 201){
                alert("Enquete criada indo para a pagina principal")
                navigator("/1")
            }
        }).catch(err => {
            console.log(err)
            return
        })
    }
    function handleAddOption() {
        if (newOption.trim() !== "") { // Verifica se a nova opção não está vazia
            setOptions([...options, newOption ]);
            setNewOption(""); // Limpa o campo de entrada após adicionar a opção
        }
    }
    function onDeletOtions(index: number){
        setOptions(prevOptions => prevOptions.filter((_, i) => i !== index));
    }

    return(
        <div className="w-full h-full items-center justify-center flex flex-col">
            <Card>
                <CardHeader className="px-10">
                    <CardTitle className="text-3xl text-center">Crie a sua enquete</CardTitle>
                </CardHeader>
                <CardContent className="px-5 flex flex-col gap-3">
            <Form {...form}>
                <form onSubmit={(e)=> {
                    e.preventDefault()
                    onSubmit()
                }} className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="pollName"
                        render={({}) => (
                            <FormItem>
                                <FormLabel>Nome da enquete</FormLabel>
                                <FormControl>
                                    <Input value={pollName} onChange={(e) => setPollName(e.target.value)} placeholder="PollName"/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <div className="w-full flex flex-col gap-1">
                            {options.map((option:any, index: number) => (
                                <PollAditionalOptions onClickDelete={() => onDeletOtions(index)} key={index} optioName={option} className="" />
                            ))}
                        </div>

                    {form.watch("pollOption")?.map((_, index) => (
                        <FormField
                            key={index}
                            control={form.control}
                            name={`pollOption.${index}`} // Aqui está a mudança
                            render={({ }) => (
                                <FormItem>
                                    <FormLabel>Adicionar opção</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="New Option"
                                        value={newOption}
                                        onChange={(e) => setNewOption(e.target.value)}
                                    />
                                </FormControl>
                            </FormItem>
                            )}
                        />
                    ))}


                    <div className="w-full flex items-center justify-start gap-2 mt-5"> 
                        <Button 

                        startContent={<FaPlus />}
                        color="secondary"
                        radius="sm"
                        onClick={() => {
                            handleAddOption()
                            console.log(options)
                        }}>
                                Add Option
                        </Button>

                        
                        <Button 
                        radius="sm"
                        className="flex flex-1"
                        color="primary"
                        type="submit"
                        onClick={() => onSubmit}
                        >Submit</Button>
                    </div>
                </form>
            </Form>
            </CardContent>
        </Card>
        </div>
    )
}