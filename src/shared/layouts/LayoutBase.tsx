import { Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useDrawerContext } from '../contexts';

interface ILayoutBaseProps {
    titulo:string;
    children: React.ReactNode;
    barraDeFerramentas?: React.ReactNode;
}

export const LayoutBase: React.FC<ILayoutBaseProps> = ({children, titulo, barraDeFerramentas}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const {toggleDrawerOpen} = useDrawerContext();
  return(
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box padding={1} display="flex" alignItems="center" height={theme.spacing(12)} gap={1} >
        {smDown &&(
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>)}
        <Typography variant='h5'>
          {titulo}
        </Typography>
      </Box>
      
      <Box>
        {barraDeFerramentas}
      </Box>
      <Box>
        {children}
      </Box>
    </Box>
  );
};