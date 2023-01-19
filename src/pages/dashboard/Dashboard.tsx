import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';

export const Dashboard = () => {
  return(
    <LayoutBase 
      titulo='Página Incial'
      barraDeFerramentas={(
        <FerramentasDeDetalhe />
      )}
    >
        Testando
    </LayoutBase>
  );
};