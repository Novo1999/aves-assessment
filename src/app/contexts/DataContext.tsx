'use client'

import { DashboardData, dashboardData } from '@/data/data';
import React, { createContext, useContext, useState } from 'react';


const DataContext = createContext<{
  data: DashboardData;
  setData: React.Dispatch<React.SetStateAction<DashboardData>>;
} | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<DashboardData>(dashboardData);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};
