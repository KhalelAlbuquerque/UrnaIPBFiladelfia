export default function handlePresskey(setState){
    const handleKeyDown = (event) => {
        if (event.key === 'CapsLock') {
            setState(true);
        }
    };

    const handleKeyUp = (event) => {
        if (event.key === 'CapsLock') {
            setState(false);
        }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
}