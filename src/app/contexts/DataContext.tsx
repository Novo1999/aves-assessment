'use client'

import { dashboardData } from '@/data/data';
import React, { createContext, useContext, useState } from 'react';

type DashboardDataType = typeof dashboardData;

const DataContext = createContext<{
  data: DashboardDataType;
  setData: React.Dispatch<React.SetStateAction<DashboardDataType>>;
} | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<DashboardDataType>(dashboardData);
  console.log("🚀 ~ data:", data)

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
