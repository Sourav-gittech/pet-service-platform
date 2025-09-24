import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { RiAdminFill } from "react-icons/ri";
import { FaUserDoctor, FaUserGear } from 'react-icons/fa6';
import { AiOutlineProduct } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { Button, Stack } from '@mui/material';
import Dashboard from '../../components/admin/dashboard/Dashboard';
import ManageVeterinarian from '../../components/admin/ManageVeterinarian';
import ManageAdmin from '../../components/admin/ManageAdmin';
import ManageUser from '../../components/admin/ManageUser';
import ManageProduct from '../../components/admin/ManageProduct';
import { FaRegChartBar } from 'react-icons/fa';
import ChartSection from '../../components/admin/ChartSection';

const drawerWidth = 240;

const AdminDashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false),
    [activeMenu, setActiveMenu] = React.useState("Dashboard");

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div className='!bg-[#b87bf6] h-screen'>
      <Toolbar className='mx-5'>
        <img src="/logo/paws-logo-removebg.png" alt="#logo" />
      </Toolbar>
      <Divider className='bg-white' />
      <List>
        {["Dashboard", "Manage Admin", "Manage Veterinarian", "Manage User", "Manage Product", "Chart"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => setActiveMenu(text)}>
              <ListItemIcon>
                {text === "Dashboard" ? <LuLayoutDashboard className='ml-5 text-black text-[18px]' /> :
                  text === "Manage Admin" ? <RiAdminFill className='ml-5 text-black text-[20px]' /> :
                    text === "Manage Veterinarian" ? <FaUserDoctor className='ml-5 text-black text-[20px]' /> :
                      text === "Manage User" ? <FaUserGear className='ml-5 text-black text-[20px]' /> :
                        text === "Manage Product" ? <AiOutlineProduct className='ml-5 text-black text-[20px]' /> :
                          <FaRegChartBar className='ml-5 text-black text-[20px]' />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }} className='!bg-[#8e32ea]'>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start"
            onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Stack spacing={2} direction="row">
            <Button variant="contained" className='!text-black !bg-blue-300 hover:!bg-blue-400 hover:!text-white'>Profile</Button>
            <Button variant="contained" className='!text-black !bg-red-500 hover:!bg-red-800 hover:!text-white'>Log out</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        <Drawer container={container} variant="temporary" open={mobileOpen} onTransitionEnd={handleDrawerTransitionEnd} onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true,
            },
          }}>
          {drawer}
        </Drawer>
        <Drawer variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }} open>
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} className='bg-gradient-to-b from-[#EFFFFF] to-[#d6b4f9] h-screen relative'>
        <img src="/logo/paws-logo-transparent.png" alt="" className="absolute opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <Toolbar />
        {activeMenu === "Dashboard" && <Dashboard />}
        {activeMenu === "Manage Admin" && <ManageAdmin />}
        {activeMenu === "Manage Veterinarian" && <ManageVeterinarian />}
        {activeMenu === "Manage User" && <ManageUser />}
        {activeMenu === "Manage Product" && <ManageProduct />}
        {activeMenu === "Chart" && <ChartSection />}

      </Box>

    </Box>
  )
}

AdminDashboard.propTypes = {
  window: PropTypes.func,
}

export default AdminDashboard