import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoExitSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const styles = {
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '350px',
    backgroundColor: 'gray',
    gap: '20px',
    paddingTop: '100px',
    paddingLeft: '30px',
    boxSizing: 'border-box',
    position: 'sticky',
    top: 0,
    left: 0
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    transition: 'color 0.3s',
    cursor: 'pointer',
    userSelect: 'none'
  },
  collapse: {
    cursor: 'pointer',
    display: 'flex',
    gap:10,
    flexDirection: 'column',
    paddingLeft: '30px',
  }
};

export default function Sidebar({children}) {
  const [isVotationsExpanded, setVotationsExpanded] = useState(false);

  const handleVotationsClick = () => {
    setVotationsExpanded(!isVotationsExpanded);
  };

  return (
    <>
        <div style={styles.sidebar}>
            <Link className="link" style={styles.link} to={'/'}>
                <FaHome style={{ marginRight: 10 }} />Página inicial
            </Link>
            <div style={styles.link} onClick={handleVotationsClick}>
                {isVotationsExpanded ? <FaChevronUp style={{ marginRight: 10 }} /> : <FaChevronDown style={{ marginRight: 10 }} />}
                Votações
            </div>
            {isVotationsExpanded && (
                <div style={styles.collapse}>
                  <Link className="link" style={styles.link} to={'/ministerVotation'}>
                      Votação Pastor
                  </Link>
                  <Link className="link" style={styles.link} to={'/presbyterVotation'}>
                      Votação Presbíteros
                  </Link>
                  <Link className="link" style={styles.link} to={'/deaconVotation'}>
                      Votação Diáconos
                  </Link>
                </div>
            )}
            <Link className="link" style={styles.link} to={'/manageCandidates'}>
                <MdManageAccounts style={{ marginRight: 10 }} />
                Gerenciar Candidatos
            </Link>
            <Link className="link" style={styles.link} to={'/'}>
                <IoExitSharp style={{ marginRight: 10 }} />
                Sair da conta
            </Link>
        </div>
        <div style={{ width: '100%', overflow: 'scroll'}}>
            {children}
        </div>

    </>
  );
}
