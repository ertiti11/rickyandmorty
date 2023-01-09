import { useEffect, useState } from "react"
import Video_card from "../videocard/Video_card"

export default function Video_list(){

    const [personaje, setPersonaje] = useState(null)

    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character/")
        .then(res=>res.json())
        .then((data) =>{
            setPersonaje(data.results)
        },)
        
    },[])

    if (personaje){
        console.log(personaje);
            
            return(

                {personaje.map((user) => (
                    <div className="user">{user}</div>
                  ))}
               
            )
        


        

    }
    
    
   



}