import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';

export const Dashboard = () => {
  return(
    <LayoutBase 
      titulo='Página Incial'
      barraDeFerramentas={(
        < FerramentasDaListagem 
          mostrarInputBusca 
          mostrarBotaoNovo/>
      )}
    >
        Testando
    </LayoutBase>
  );
};