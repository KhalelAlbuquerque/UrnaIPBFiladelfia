import { useState } from "react";
import FullScreenModel from "../../components/FullScreenModel";

export default function DeaconVotation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen ? (
        <FullScreenModel bgColor="white" setVisibility={'kk'}>
          <button onClick={() => { setIsModalOpen(!isModalOpen) }}>abrir/fechar</button>
          <div>kkk</div>
        </FullScreenModel>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
          <h1>Clique no botão abaixo para abrir a tela de votação!</h1>
          <button onClick={() => { setIsModalOpen(!isModalOpen) }}>abrir/fechar</button>
        </div>
      )}
    </>
  );
}
