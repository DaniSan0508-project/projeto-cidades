import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';
import { PessoasService } from '../../shared/services/api/pessoas';

export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(()=>{
    return searchParams.get('busca') || '';
  },[searchParams]);

  useEffect(()=>{
    PessoasService.getAll(1, busca)
      .then((result) => {
        if(result instanceof Error) {
          alert(result.message);
          return;
        }
        return console.log(result);
      });
  },[busca]);


  return(
    <LayoutBase 
      titulo='Listagem de pessoas'
      barraDeFerramentas={(
        <FerramentasDaListagem 
          textoBotaoNovo='Nova' 
          mostrarInputBusca
          textoDaBusca={busca}
          aoMudarTextDeBusca={texto => setSearchParams({ busca: texto }, { replace: true })}
        />
      )}>

    </LayoutBase>
  );
};