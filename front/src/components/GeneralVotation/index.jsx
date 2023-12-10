import React, { useState } from 'react';

const styles = {
    votationContainer: {
        width: '60%',
        height: '100%',
        margin: 'auto'
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
        userSelect: 'none',  // Impede a seleção do texto
    }
}

export default function GeneralVotation({ label, maxItems, items }) {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (index) => {
        if (selectedItems.includes(index)) {
            setSelectedItems(selectedItems.filter(item => item !== index));
        } else {
            if (selectedItems.length < maxItems) {
                setSelectedItems([...selectedItems, index]);
            }
        }
    };

    return (
        <div style={styles.votationContainer}>
            <h1>Votação para {label}</h1>
            <h2>Selecione até {maxItems} opções</h2>
            <form style={styles.form} action="#">
                {items.map((element, index) => (
                    <label
                        key={index + 1}
                        style={{
                            ...styles.candidateCard,
                            backgroundColor: selectedItems.includes(index) ? 'darkgray' : 'white',
                        }}
                    >
                        <input
                            type="checkbox"
                            style={styles.checkbox}
                            checked={selectedItems.includes(index)}
                            onChange={() => handleCheckboxChange(index)}
                        />
                        <img src={element.image} height={40} width={40} alt={element.name} />
                        <div style={styles.nonSelectableText}>{element.name}</div>
                    </label>
                ))}
            </form>
        </div>
    )
}
