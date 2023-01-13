import { createContext, useCallback, useContext, useState } from 'react';

interface IDrawerOptions {
  label:string;
  path:string;
  icon:string;
}


interface IDrawerContextData {
    isDrawerOpen: boolean;
    drawerOptions: IDrawerOptions[];
    toggleDrawerOpen: () => void;
    setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void;
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
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);
  const toggleDrawerOpen = useCallback(()=> {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  },[]);
  const handleSetDrawerOptions = useCallback((newDrawerOptions:IDrawerOptions[])=> {
    setDrawerOptions(newDrawerOptions);
  },[]);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen, drawerOptions, setDrawerOptions: handleSetDrawerOptions}}>
      {children}
    </DrawerContext.Provider>
  );
};