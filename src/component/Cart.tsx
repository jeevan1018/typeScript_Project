import {useState} from 'react'
import type { ReactNode, PropsWithChildren } from 'react'

interface cardProps extends PropsWithChildren{
    name:string;
    footer:ReactNode;
}

export function CardComponent ({
    name, footer, children
}:cardProps){
    const [count ,setCount] = useState <number>(0)
    return(
        <div>
            <article>
                <h1>{name}</h1>
                {children}
                <footer>{footer}</footer>
            </article>
            <span>count:{count}</span>
            <button onClick={()=>setCount((c)=>c+1)}>+</button>
            <button onClick={()=>setCount((c)=>c-1)}>-</button>
        </div>
    )
}