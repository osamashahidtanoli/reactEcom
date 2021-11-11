import {
  AppBar, Typography, IconButton
 
} from "@material-ui/core";
import {Link} from "react-router-dom";
import classes from './Navigation.module.css';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const Navigation = () => {
  return (
    <AppBar position="static">
      <div className={classes.navGrid}>
            <div className={classes.centerHeading}>
                <Typography className={classes.fontBold} variant='h5'>EcommercePanel</Typography>
            </div>
            <div className={classes.flexNav}>
                <Link className={classes.links} to='/'>Home</Link>
                <Link className={classes.links} to='/products'>Products</Link>
                <Link className={classes.links} to='/contact'>Contact Us</Link>
                <Link className={classes.links} to='/cart'><IconButton className={classes.cartButton}><ShoppingCartIcon/></IconButton></Link>
                
            </div>
      </div>
    </AppBar>
  );
};

export default Navigation;
