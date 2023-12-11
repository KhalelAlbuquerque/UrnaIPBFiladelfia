import { useState, useEffect } from "react";
import FullScreenModel from "../../components/FullScreenModel";
import GeneralVotation from "../../components/GeneralVotation";
import { FaExpandArrowsAlt } from "react-icons/fa";
import api from '../../helpers/api'

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

export default function DeaconVotation() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [deacons, setDeacons] = useState(null)
  
  useEffect(()=>{
    api.get('deacon').then(deacons => setDeacons(deacons.data))
  }, [])

    return (
        <>
          {isModalOpen && deacons ? (
            <FullScreenModel bgColor="white">
                <GeneralVotation items={deacons} label={"Pastor"} maxItems={5} setCloseModel={setIsModalOpen}/>
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
