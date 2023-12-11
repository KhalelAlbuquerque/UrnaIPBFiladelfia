import { useEffect, useState } from "react"
import FullScreenModel from "../../components/FullScreenModel/";
import MinisterVotesContainer from "../../components/MinisterVotesContainer";
import { FaExpandArrowsAlt } from "react-icons/fa";
import api from '../../helpers/api.js'

const styles = {
    expandButton:{
        cursor: 'pointer',
        display: 'flex',
        gap: 10,
        fontSize: 24,
        fontWeight: 'bold',
        alignItems: 'center',
    }
}

export default function MinisterVotation(){

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [minister, setMinister] = useState(null)
    
    useEffect(()=>{
      api.get("minister").then((e)=>setMinister(e.data))
    }, [])
    

    return (
        <>
          {isModalOpen && minister ? (
            <FullScreenModel bgColor="white">
                <MinisterVotesContainer minister={minister} setCloseModel={setIsModalOpen}/>
            </FullScreenModel>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
              <h1>Clique no botão abaixo para abrir a tela de votação!</h1>
              <span style={styles.expandButton} onClick={() => { setIsModalOpen(!isModalOpen)}}><FaExpandArrowsAlt />Expandir tela</span>
            </div>
          )}
        </>
      );
}