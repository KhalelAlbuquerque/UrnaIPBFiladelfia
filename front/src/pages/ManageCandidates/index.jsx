import CandidatesContainer from "../../components/CandidatesContainer";
import { useState, useEffect } from "react";
import api from "../../helpers/api";

const styles = {
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    candContainer: {
        width: '95%',
        margin: 'auto',
        height: '90%',
        backgroundColor: '#ccc',
        borderRadius:20,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
  };
  
  export default function ManageCandidates() {

    const [minister, setMinister] = useState([])
    const [presbyters, setPresbyters] = useState([])
    const [deacons, setDeacons] = useState([])

    useEffect(()=>{
        api.get('minister').then(response => setMinister(response.data))
        api.get('presbyter').then(response => setPresbyters(response.data))
        api.get('deacon').then(response => setDeacons(response.data))
    }, [])

    return (
      minister && presbyters && deacons &&
        (<div style={styles.container}>
            <h1 style={{ backgroundColor: 'red', display: 'block' }}>Gerenciar os candidatos</h1>
            <div style={styles.candContainer}>
                <CandidatesContainer items={minister} label={'Pastor'}/>
                <CandidatesContainer items={presbyters} label={'Presbíteros'}/>
                <CandidatesContainer items={deacons} label={'Diáconos'}/>
            </div>
        </div>)
      
    );
  }
  