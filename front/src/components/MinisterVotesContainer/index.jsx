import React, { useState, useEffect } from 'react';
import Notification from '../Notifier/Notification';
import { IoMdCloseCircle } from "react-icons/io";
import swalAlert from '../../helpers/swalAlert'
import api from '../../helpers/api';
import handleMinisterVote from '../../helpers/handleMinisterVote';
import handlePresskey from '../../helpers/handlePresskey';

const styles = {
    votationContainer: {
        width: '60%',
        height: '100%',
        margin: 'auto',
    },
    candidateCard: {
        width: '20%',
        height: '30%',
        border: '2px solid red',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        cursor: 'pointer',
        position: 'relative',
    },
    candidateImage:{
        width: '80%',
        height: '50%'
    },
    checkbox: {
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0,
    },
    form: {
        width: '100%',
        height: '80%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    closeButton:{
        position: 'absolute',
        top: 20,
        right: 20,
        height: 100,
        width: 100,
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        fontSize: '4em',
    }
}

export default function MinisterVotesContainer({ minister, setCloseModel }) {
    const [permittedToClose, setPermittedToClose] = useState(false);

    async function handleVote(event){
      event.preventDefault();
      handleMinisterVote(event.target.value)
    }
  
    useEffect(() => {
      handlePresskey(setPermittedToClose)
    }, []);
  
    return (
      <div style={styles.votationContainer}>
        {permittedToClose && (
          <div 
            onClick={()=>setCloseModel(false)} 
            style={{...styles.closeButton, ...(permittedToClose ? { display: 'flex' } : { display: 'none' })}}
          >
                <IoMdCloseCircle />
          </div>
        )}
        <h1>Votação para pastor</h1>
        <h2>Selecione sim ou não</h2>
  
        {/* <img src={minister.image} style={styles.candidateImage} height={80} width={80} alt={minister.name} /> */}
        <div style={{userSelect: 'none'}}>{minister.name}</div>
  
        <button
          value={'Positive'}
          onClick={()=>handleVote(event)}
        >
          Sim
        </button>
        <button
          value={'Negative'}
          onClick={()=>handleVote(event)}
        >
          Não
        </button>
      </div>
    );
  }