import { useState } from 'react'
interface OderFromProps{
    onSubmit(order:{name:string; phone:number}):void
}

export function FormComponent(
    {onSubmit}:OderFromProps
){

    const [name , setName] = useState<string>("")
    const [phone , setPhone] = useState<number>(0)

    function handleSubmit (e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        onSubmit({name, phone})
    }

    return(
        <div> 
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder='Enter your name' value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)} />
                <input type="number" placeholder='Enter your number' value={phone} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPhone(Number(e.target.value) )} />
                <button type='submit'>Submit</button>
                </form> 
        </div>
    )
}