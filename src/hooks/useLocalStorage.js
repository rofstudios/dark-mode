import { useState } from 'react';

let useLocalStorage = (key, initialValue) => {
    let [storedValue, setStoredValue] = useState(() => {
        let item = window.localStorage.getItem(key);
        return item ? JSON.parse(item): initialValue;
    });
    let setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
};

export default useLocalStorage;