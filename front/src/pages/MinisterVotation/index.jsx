import { useEffect, useState } from "react"

export default function MinisterVotation(){

    const [isModalOpen, setIsModalOpen] = useState(false)

    return(
        <>
            {isModalOpen ? (
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
                    <button onClick={()=>{setIsModalOpen(!isModalOpen)}}>abrir/fechar</button>
                    abriu
                </div>
            ):(
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
                    <h1>Clique no botão abaixo para abrir a tela de votação!</h1>
                    <button onClick={()=>{setIsModalOpen(!isModalOpen)}}>abrir/fechar</button>
                </div>
            )}

            
        </>
    )
}