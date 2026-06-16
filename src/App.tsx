
import './App.css'
import { Cardlist } from './component/CardList'
import { CardComponent } from './component/Cart'
import { FormComponent } from './component/formcomponent.tsx'
import type { item } from './types'


function App() {

const menu: item[] = [
  { id: 1, name: "padidar", team: "India", isCaptain: true },
  { id: 2, name: "bhuvi", team: "india", isCaptain: false },
  { id: 3, name: "hazelgod", team: "austrailia", isCaptain: true },
]
  

  return (
    <>
      
      
      <Cardlist
        items={menu}/>

        <FormComponent
        onSubmit={(order) => (
          console.log(order.name, order.phone)
  )}
        
        />
        <CardComponent

        name = "satyarth"
        footer ={
          <div>
            <h1>Footer</h1>
          </div>
        }
        
        />

     
    </>
  )
}

export default App
