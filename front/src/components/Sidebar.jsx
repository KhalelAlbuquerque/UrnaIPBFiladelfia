import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoExitSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { FaVoteYea } from "react-icons/fa";

const styles = {
    sidebar:{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '350px',
        backgroundColor: 'gray',
        gap: '20px',
        paddingTop: '100px',
        paddingLeft: '30px',
        boxSizing: 'border-box'
    },
    link:{
        color: 'white',
        textDecoration: 'none',
        fontSize: 20,
        display: 'flex',
        alignItems: 'center',
        transition: 'color 0.3s'
    }
}

export default function Sidebar(){
    return(
        <div style={styles.sidebar}>
            <Link style={styles.link} to={'/'}><FaHome style={{marginRight: 10}}/>Página inicial</Link>
            <Link style={styles.link} to={'/'}><FaVoteYea style={{marginRight: 10}}/>Votação Diáconos/Presbíteros</Link>
            <Link style={styles.link} to={'/'}><FaVoteYea style={{marginRight: 10}}/>Votação Pastor</Link>
            <Link style={styles.link} to={'/'}><MdManageAccounts style={{marginRight: 10}}/>Gerenciar Candidatos</Link>
            <Link style={styles.link} to={'/'}><IoExitSharp style={{marginRight: 10}}/>Sair da conta</Link>
        </div>
    )
}