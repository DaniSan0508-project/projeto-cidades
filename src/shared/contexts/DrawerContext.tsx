import { createContext, useCallback, useContext, useState } from 'react';




interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

interface IDrawerProvider {
  children?: React.ReactNode;
}

const DrawerContext = createContext({} as  IDrawerContextData);

//função para pegar de qualquer local do app o tema selecionado
export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<IDrawerProvider> = ({children}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawerOpen = useCallback(()=> {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  },[]);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};