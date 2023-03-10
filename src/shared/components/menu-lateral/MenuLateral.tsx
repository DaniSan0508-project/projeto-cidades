import { ThemeContext } from '@emotion/react';
import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useAppThemeContext, useDrawerContext } from '../../contexts';

interface IListItemLinkProps {
  label: string;
  icon: string;
  to: string;
  onClick: (() => void) | undefined;
}


const ListItemLink: React.FC<IListItemLinkProps> = ({to, icon, label, onClick}) =>{
  const navigate = useNavigate();
  
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end:false });

  const handleClick = () => {
    navigate(to);
    onClick && onClick();
  };
  return(
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label}/>
    </ListItemButton>
  );
};

type IAppRoutes = {
    children: React.ReactNode
  };

export const MenuLateral: React.FC<IAppRoutes> = ({children}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const {isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();

  const {toggleTheme, themeName} = useAppThemeContext();

  return(
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
          <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
            <Avatar sx={{height:theme.spacing(12), width: theme.spacing(12)}} src='https://www.google.com/search?q=foto+avatar&oq=foto+avatar&aqs=chrome..69i57j0i512l8j0i390.2162j0j15&sourceid=chrome&ie=UTF-8#imgrc=K_O4u7nXnK63MM'/>
          </Box>
          <Divider />
          <Box flex={1}>
            <List component={'nav'}>
              {drawerOptions.map(drawerOption => (
                <ListItemLink 
                  key={drawerOption.path}
                  icon={drawerOption.icon}
                  to={drawerOption.path}
                  label={drawerOption.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
          <Box>
            <List component={'nav'}>
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon>{themeName === 'light' ? 'dark_mode' : 'light_mode'}</Icon>
                </ListItemIcon>
                <ListItemText primary={themeName === 'light' ? 'Tema Escuro' : 'Tema Claro'}/>
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