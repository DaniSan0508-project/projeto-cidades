import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDrawerContext } from '../../contexts';

type IAppRoutes = {
    children: React.ReactNode
  };

export const MenuLateral: React.FC<IAppRoutes> = ({children}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const {isDrawerOpen, toggleDrawerOpen} = useDrawerContext();

  return(
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
          <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
            <Avatar sx={{height:theme.spacing(12), width: theme.spacing(12)}} src='https://www.google.com/search?q=foto+avatar&oq=foto+avatar&aqs=chrome..69i57j0i512l8j0i390.2162j0j15&sourceid=chrome&ie=UTF-8#imgrc=K_O4u7nXnK63MM'/>
          </Box>
          <Divider />
          <Box flex={1}>
            <List>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary='Página incial'/>
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};