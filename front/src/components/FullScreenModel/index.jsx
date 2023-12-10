const styles = {
    container:{
        height: '100%', 
        width: '100%', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
    }
}

export default function FullScreenModel({children, bgColor}){

    return(
        <div style={{...styles.container, backgroundColor: bgColor}}>
            {children}
        </div>
    )
}