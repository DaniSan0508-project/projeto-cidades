import { BarraDeFerramentas } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';

export const Dashboard = () => {
  return(
    <LayoutBase 
      titulo='Página Incial'
      barraDeFerramentas={(
        < BarraDeFerramentas 
          mostrarInputBusca 
          mostrarBotaoNovo/>
      )}
    >
        Testando
    </LayoutBase>
  );
};