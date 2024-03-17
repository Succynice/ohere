import React from 'react';
import { styled } from '@mui/system';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import { useNavigate, useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { format } from 'date-fns';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)({
 width: drawerWidth,
 flexShrink: 0,
});

const StyledAppBar = styled(AppBar)({
 width: `calc(100% - ${drawerWidth}px)`,
 marginLeft: drawerWidth,
});

const StyledListItem = styled(ListItem)({
 background: (props) => (props.active ? '#f4f4f4' : 'inherit'),
});

export default function Layout({ children }) {
 const navigate = useNavigate();
 const location = useLocation();

 const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlinedIcon color="secondary" />,
      path: '/',
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlinedIcon color="secondary" />,
      path: '/user',
    },
 ];

 return (
    <div>
      {/* app bar */}
      <StyledAppBar position="fixed" elevation={0} color="primary">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            Today is the {format(new Date(), 'do MMMM y')}
          </Typography>
          <Typography>Mario</Typography>
          <Avatar src="/mario-av.png" />
        </Toolbar>
      </StyledAppBar>

      {/* side drawer */}
      <StyledDrawer variant="permanent" anchor="left">
        <div>
          <Typography variant="h5" sx={{ padding: 2 }}>
            Ninja Notes
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <StyledListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              active={location.pathname === item.path}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </StyledListItem>
          ))}
        </List>
      </StyledDrawer>

      {/* main content */}
      <div sx={{ background: '#f9f9f9', width: '100%', padding: 3 }}>
        {/* Corrected: Directly use theme values within the sx prop */}
        <div sx={{ marginTop: (theme) => theme.mixins.toolbar }}></div>
        {children}
      </div>
    </div>
 );
}
