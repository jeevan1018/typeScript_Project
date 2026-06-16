import { CricketCard } from "./CricketCard"
import type { item } from '../types';

interface CardListProps{
    items:item[]
  
}

export function Cardlist(
    {items}:CardListProps
){
    return(
        <div>
            {items.map((item)=>(

                <CricketCard key={item.id} id={item.id} name={item.name} team={item.team} isCaptain={item.isCaptain} />    
             
         
            ))}
            <h1>Card list</h1>
        </div>
    )
}