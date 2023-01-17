import { Button, Icon, Paper, TextField, useTheme } from '@mui/material';
import { Box } from '@mui/system';

interface IFerramentasDaListagem {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextDeBusca?: (novoTexto:string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagem> = ({
  textoDaBusca = '',
  mostrarInputBusca = false,
  aoMudarTextDeBusca,
  mostrarBotaoNovo,
  textoBotaoNovo = 'Novo',
  aoClicarEmNovo,
}) => {
  const theme = useTheme();
  return(
    <Box 
      height={theme.spacing(5)} 
      marginX={1} 
      padding={1} 
      paddingX={2}
      display="flex" 
      gap={1} 
      alignItems="center"
      component={Paper}>
      {mostrarInputBusca &&(
        <TextField 
          size='small'
          value={textoDaBusca}
          onChange={(e)=> aoMudarTextDeBusca?.(e.target.value)}
          placeholder='Pesquisar...'
        />
      )}
     
      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotaoNovo && (
          <Button 
            color='primary' 
            disableElevation 
            variant='contained' 
            onClick={aoClicarEmNovo}
            endIcon={<Icon>add</Icon>}>{textoBotaoNovo}</Button>
        )}
      </Box>
    </Box>
  );
};