import React, { useState, useEffect } from 'react';
import Notification from '../Notifier/Notification';
import { IoMdCloseCircle } from "react-icons/io";
import swalAlert from '../../helpers/swalAlert'
import api from '../../helpers/api';

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
    nonSelectableText: {
        userSelect: 'none',
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

    const password = 123

    function getPassword(){
      swalAlert.fire({
        title: 'Coloque a senha de instrutor para continuar',
        icon: 'info',
        input: 'text',
        confirmButtonText: 'Confirmar',
        confirmButtonColor: 'green',
        allowOutsideClick: false,
        allowEscapeKey: false
      }).then(result=>{
        if(result.value == password){
          swalAlert.fire({
            title: "Senha aprovada",
            icon: 'success',
            text: 'Carregando...',
            timer: 1000,
            showConfirmButton: false,
            timerProgressBar: true,
          })
        }else{
          swalAlert.fire({
            title: 'Senha errada, digite novamente',
            icon: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: 'green',
            allowOutsideClick: false,
            allowEscapeKey: false
          }).then((result)=>{
            if(result.isConfirmed) getPassword()
          })
        }
      })
    }


    async function handlePositive(event){
      event.preventDefault();
      swalAlert.fire({
        title: 'Deseja confirmar o voto "SIM"?',
        text: "Essa ação não poderá ser desfeita",
        icon: 'warning',
        showConfirmButton : true,
        showCancelButton : true,
        confirmButtonText: "Confirmo",
        cancelButtonText: "Não confirmo",
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
        reverseButtons: true
      }).then((result)=>{
        if(result.isConfirmed){
          api.post('minister/computePositive').then(()=>{
            swalAlert.fire({
              title: 'Voto computado!',
              text: "Chame um instrutor",
              icon: 'success',
              confirmButtonColor: 'green',
              allowOutsideClick: false,
              allowEscapeKey: false
            }).then(()=>{
              getPassword()
            })
          })
        }
      })
    }
  
    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'CapsLock') {
            setPermittedToClose(true);
          }
        };
    
        const handleKeyUp = (event) => {
          if (event.key === 'CapsLock') {
            setPermittedToClose(false);
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
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
        <div style={styles.nonSelectableText}>{minister.name}</div>
  
        <button
          onClick={handlePositive}
        >
          Sim
        </button>
        <button onClick={(e) => { e.preventDefault(); console.log('Não'); }}>Não</button>
      </div>
    );
  }