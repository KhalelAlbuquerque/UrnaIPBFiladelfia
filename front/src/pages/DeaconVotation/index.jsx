import { useState } from "react";
import FullScreenModel from "../../components/FullScreenModel";
import GeneralVotation from "../../components/GeneralVotation";
import { FaExpandArrowsAlt } from "react-icons/fa";

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

    const lista = [
        {name: "Candidato 1", image: 'https://www.politize.com.br/wp-content/uploads/2022/03/paulo-candidato-eleicoes-politize-e1470154748570.png'},
        {name: "Candidato 2", image: 'https://www.politize.com.br/wp-content/uploads/2022/03/paulo-candidato-eleicoes-politize-e1470154748570.png'},
        {name: "Candidato 3", image: 'https://www.politize.com.br/wp-content/uploads/2022/03/paulo-candidato-eleicoes-politize-e1470154748570.png'},
        {name: "Candidato 3", image: 'https://www.politize.com.br/wp-content/uploads/2022/03/paulo-candidato-eleicoes-politize-e1470154748570.png'},
        {name: "Candidato 3", image: 'https://www.politize.com.br/wp-content/uploads/2022/03/paulo-candidato-eleicoes-politize-e1470154748570.png'},
        {name: "Candidato 3", image: 'https://www.politize.com.br/wp-content/uploads/2022/03/paulo-candidato-eleicoes-politize-e1470154748570.png'},
        {name: "Candidato 3", image: 'https://www.politize.com.br/wp-content/uploads/2022/03/paulo-candidato-eleicoes-politize-e1470154748570.png'},
        {name: "Candidato 3", image: 'https://www.politize.com.br/wp-content/uploads/2022/03/paulo-candidato-eleicoes-politize-e1470154748570.png'},
        {name: "Candidato 3", image: 'https://www.politize.com.br/wp-content/uploads/2022/03/paulo-candidato-eleicoes-politize-e1470154748570.png'},
        {name: "Candidato 3", image: 'https://www.politize.com.br/wp-content/uploads/2022/03/paulo-candidato-eleicoes-politize-e1470154748570.png'},
        {name: "Candidato 3", image: 'https://www.politize.com.br/wp-content/uploads/2022/03/paulo-candidato-eleicoes-politize-e1470154748570.png'},
        {name: "Candidato 3", image: 'https://www.politize.com.br/wp-content/uploads/2022/03/paulo-candidato-eleicoes-politize-e1470154748570.png'},
    ]

    return (
        <>
          {isModalOpen ? (
            <FullScreenModel bgColor="white">
                <GeneralVotation items={lista} label={"Pastor"} maxItems={5}/>
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
