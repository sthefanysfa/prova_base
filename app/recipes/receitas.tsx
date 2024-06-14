
import React from "react"
import {useRouter} from 'next/navigation'
import Link from "@nodes_modules/next/link";
import dados from "../..recipes.json"


export default function Home(){
    const router = useRouter();
    let dados ={dados}
    console.log(dados)

    return(
        {dados.map((receitas) => (
            <div>
             key={receitas.id}

              <img>
              src={receitas.image}
              width ={200}
              heigth={200}
              </img>

              <div className=''>
                 <Link href="/recipes/detalhes"> {receitas.name} </Link>
              </div>
            </div>
        ))}
    )

        
       
}