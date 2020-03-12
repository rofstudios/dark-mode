import { useLocalStorage } from './useLocalStorage';

let useDarkMode = (key, initialValue) => {
    let [values, setValues] = useLocalStorage(key, initialValue);
    
}