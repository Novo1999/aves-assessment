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
      const existingData = localStorage.getItem('dashboard-data-novo');
      if (!existingData) {
        localStorage.setItem('dashboard-data-novo', JSON.stringify(data));
      }
    }, [data]);
  
    return null;
  };
export default InitLocalStorage
