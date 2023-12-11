import { FaTrash } from "react-icons/fa";

const styles = {
  container: {
    width: "31%",
    borderRadius: 20,
    backgroundColor: "white",
    height: '700px',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    overflowY: 'scroll',
  },
  label: {
    padding: '20px 0',
    fontSize: "20px",
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    fontWeight: "bold",
  },
  card: {
    display: "flex",
    alignItems: "center",
    width: "95%",
    margin: '0 auto',
    minHeight: "100px",
    height: '100px',
    backgroundColor: 'gray',
  },
  profPic: {
    height: '70%',
    width: '20%',
    borderRadius: '50%',
    marginRight: '5%',
    position: 'relative',
  }
}

export default function CandidatesContainer({ items, label, route }) {
  return (
    <div style={styles.container}>
      <span style={styles.label}>{label}</span>
      <div style={{ overflow: 'scroll', width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((element, index) => (
          <div key={index + 1} style={styles.card}>
            <div style={{ width: '90%', display: 'flex', alignItems: 'center'}}>
              <img style={styles.profPic} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNkGCqCQMBoFHlAJKzuibiTyO4Kcvl29trA&usqp=CAU"} height={50} width={50}></img>
              <span>{element.name}</span>
            </div>
            <span style={{ width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 25 }}><FaTrash /></span>
          </div>
        ))}
      </div>
    </div>
  )
}
