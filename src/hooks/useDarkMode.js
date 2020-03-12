import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

let useDarkMode = (key, initialValue) => {
    let [useDM, setUseDM] = useLocalStorage('darkMode', false);//initial value of page on load
    let body = document.getElementsByTagName('body');

    useEffect(() => {
        if ( useDM = true){
            body.classList.add('dark-mode')
        }else {
            body.classList.remove('dark-mode')
        }
    }, [useDM])

    return [ useDM, setUseDM ]
    //must return these values /setter notetoself*****************************************

}

export default useDarkMode;