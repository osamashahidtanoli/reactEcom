import classes from './Banner.module.css';
import {Typography , Button} from '@material-ui/core';

const Banner = () => {
return(
    <div className={classes.banner}>
        <div className={classes.bannerImage}></div>
        <div className={classes.bannerText}>
            <div className={classes.bannerInner}>
                <Typography variant='h5' className={classes.typoColor}>We Have The Best Cars</Typography>
                <Button variant='contained' color='primary'>Shop Now</Button>
            </div>
        </div>
    </div>
)
}

export default Banner;