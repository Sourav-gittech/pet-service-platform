import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Badge, badgeClasses, Button, styled } from '@mui/material';

const pages = [{ id: 1, linkName: 'Home', linkUrl: '/' }, { id: 2, linkName: 'About Us', linkUrl: '/about-us' }, { id: 3, linkName: 'Service', linkUrl: '/service' }, { id: 4, linkName: 'Product', linkUrl: '/product' }, { id: 5, linkName: 'Contact', linkUrl: '/contact' }];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavbarSection = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {top: -12px; right: -6px;}`;

  useEffect(() => {
    const nav = document.querySelector(".navigation-wrap");

    const handleScroll = () => {
      if (document.documentElement.scrollTop > 20) {
        nav?.classList.add("scroll-on");
      } else {
        nav?.classList.remove("scroll-on");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <AppBar position="fixed" sx={{ background: "transparent", fontSize: "18px", fontWeight: '400', boxShadow: "none", color: '#2f0a4d' }} className="py-2 navigation-wrap">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Avatar src='/logo/paws-logo-transparent.png' alt='#' sx={{ width: '65px', height: '70px', mr: '25px' }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left' }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' } }}>
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }} as={Link} to={page.linkUrl}>{page.linkName}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page.linkUrl} component='button' key={page.id} onClick={handleCloseNavMenu} sx={{ my: 2, color: '#2f0a4d', display: 'block' }} className='mx-2'>
                {page.linkName}
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Link component='button' to='/user-register-login' className='bg-[#d6b4f9] hover:bg-[#9631e9] text-black hover:text-white py-2 px-3 rounded-2xl'>
              Join Paws
            </Link>
            <Link component='button' to='/cart'>
              <ShoppingBagIcon className='text-[#180A32] shop-bag ml-3' />
              <CartBadge badgeContent={0} color="primary" overlap="circular" />
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavbarSection