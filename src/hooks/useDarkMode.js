import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export let useDarkMode = () => {
    let [useDM, setUseDM] = useLocalStorage('darkMode', false);//initial value of page on load
    let body = document.body;

    useEffect(() => {
        if (useDM === true){
            body.classList.add('dark-mode')
        }
        else {
            body.classList.remove('dark-mode')
        }
    }, [useDM, body.classList])

    return [ useDM, setUseDM ]
    //must return these values /setter notetoself*****************************************

}