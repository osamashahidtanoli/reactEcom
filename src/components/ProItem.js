import classes from "./ProItem.module.css";
import {
  Card,
  CardContent,
  IconButton,
  TextField,
  Snackbar,
  Button,
} from "@material-ui/core";
import CartIcon from "@material-ui/icons/ShoppingCart";
import CloseIcon from "@material-ui/icons/Close";
import { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { productAction } from "../store/product-cart";

const ProItem = ({ item }) => {
  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const { id, name, img, price } = item;
  const onAddToCart = () => {
    dispatch(
      productAction.addToCart({
        id,
        qty,
      })
    );
    // console.log(cart);

    setOpen(true);
  };
  const qtyChangeHandler = (event) => {
    setQty(event.target.value);
  };

  // useEffect(() => {
  //   const newArray = [...cart];
  //  const cl = newArray.map(c => c.qty)
  //  const totalCl = cl.reduce((sum , current) =>  sum + current , 0)
  //  console.log(totalCl);
  // }, [cart]);

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const action = (
    <Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.cardcontent}>
          <div className={classes.cardImg}>
            <img alt="img" src={`../img/${img}.jpg`} />
          </div>
          <div className={classes.price}>
            <span>$ {price}</span>
          </div>
          <div className={classes.content}>
            <div className={classes.heading}>
              <span>{name}</span>
            </div>
            <div>
              <TextField
                className={classes.qty}
                type="number"
                variant="outlined"
                label="QTY"
                value={qty}
                onChange={qtyChangeHandler}
              />
            </div>
          </div>
          <div className={classes.action}>
            <div>
              <IconButton
                onClick={onAddToCart}
                className={classes.roundBtn}
                variant="contained"
              >
                <CartIcon />
              </IconButton>
            </div>
          </div>
        </CardContent>
      </Card>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Product Added"
        action={action}
      />
    </div>
  );
};

export default ProItem;
