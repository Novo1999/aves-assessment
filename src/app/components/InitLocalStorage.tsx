'use client'

import { useEffect } from 'react';
import { useDataContext } from '../contexts/DataContext';

const InitLocalStorage = () => {
    const { data, setData } = useDataContext();
  
    useEffect(() => {
        const existingData = localStorage.getItem('dashboard-data-novo');
        if (existingData) {
            const storedData = JSON.parse(existingData);
            setData({ ...storedData });
        }
    }, [setData]);
  
    useEffect(() => {
        if (data && Object.keys(data).length > 0) {
            localStorage.setItem('dashboard-data-novo', JSON.stringify(data));
        }
    }, [data]);
  
    return null;
};

export default InitLocalStorage;
