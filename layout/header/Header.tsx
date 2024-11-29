
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
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import styles from '@/styles/header.module.css';
import Image from 'next/image';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Reveal from '@/components/reveal/Reveal';
import Link from 'next/link';
import { useSelector } from 'react-redux';



const pages = [
  { page: 'Home', path: '/' },
  { page: 'Doctors', path: '/doctors' },
  { page: 'Blogs', path: '/blogs' },
  { page: 'Departments', path: '/departments' },
  { page: 'Contact Us', path: '/contact' },
  { page: 'Take an Appointment', path: '/appointment' },
];
const settings = [
  { page: 'Profile', path: '/profile' },
  { page: 'Dashboard', path: '/dashboard' },
  { page: 'Log Out', path: '/logout' },
];
const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const [isClient, setIsClient] = React.useState(false);

  const { isLoggedIn, userImage } = useSelector((state: any) => state.auth || { isLoggedIn: false, userImage: '' });

  
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List
      sx={{bgcolor:'#355e3b', height:'100vh', color:'inherit'}}
      >
        {pages.map((page) => (
          <ListItem key={page.page} disablePadding>
            <Link href={page.path} style={{ textDecoration: "none", color: "black", width: "100%" }}>
            <ListItemButton divider sx={{color:'white', bgcolor:'rgba(0,0,0,0.1)', mb:0.3}}>
              <ListItemText primary={page.page} sx={{color:'white'}} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    
      <AppBar position="static" sx={{bgcolor:"rgba(60, 107, 12, 0.5)"}}>
        <Reveal width="100%">
      <Container maxWidth="xl">
        
        <Toolbar disableGutters>
          <Link href='/' style={{display:'flex'}}>
          <Image height={30} width={30} src={"/images/logo.png"} alt='logo' className={styles.laptop}/>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            
          >
            MEDICARE
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
          </Box>
          <Image height={30} width={30} src={"/images/logo.png"} alt='logo' className={styles.mobile} />

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MEDICARE
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml:50 }}>
            {pages.map((page) => (
              <Link key={page.page} href={page.path}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                {page.page}
              </Button>
            </Link>
            ))}
          </Box>
          {isClient && isLoggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User" src={userImage || "/static/images/avatar/2.jpg"} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem onClick={handleCloseUserMenu} key={setting.page}>
                    <Link href={setting.path}>
                      <Button sx={{ textAlign: 'center' }}>{setting.page}</Button>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
              <Box sx={{display:{xs:'none',lg:'inline-block'}, ml:3, px:1}}>   
              <IconButton >
                <FacebookIcon/>
              </IconButton>
              <IconButton>
                <TwitterIcon/>
              </IconButton>
              <IconButton>
                <InstagramIcon/>
              </IconButton>
              </Box>
            </Box>
          ) || (
            <Box sx={{ flexGrow: 0, display:'flex' }}>
              <Link  href='/auth/signin' style={{ margin:'auto'}}>
                <Button sx={{  color: 'white', display: 'block'}}>
                  Log In
                </Button>
              </Link>
              <Link  href='/auth/signup' style={{ margin:'auto'}}>
                <Button sx={{ color: 'white', display: {xs:'none', md:'inline-block'} }}>
                  Sign Up
                </Button>
              </Link>
              
              <IconButton sx={{display:{xs:'none',md:'block'}}}>
                <FacebookIcon/>
              </IconButton>
              <IconButton sx={{display:{xs:'none',md:'block'}}}>
                <TwitterIcon/>
              </IconButton>
              <IconButton sx={{display:{xs:'none',md:'block'}}}>
                <InstagramIcon/>
              </IconButton>
             
            </Box>
          )}
          
        </Toolbar>
      </Container>
      </Reveal>
    </AppBar>
    
  )
}

export default Header
