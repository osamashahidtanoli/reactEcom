import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardContent,
  Container,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete'
import { useSelector } from "react-redux";
import classes from './Cart.module.css';

const Cart = () => {
  const cart = useSelector((state) => state.product.cart);
  let content;
  if (cart.length > 0) {
    content = cart.map((row) => (
      <TableRow
        key={row.name}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">{row.qty}</TableCell>
        <TableCell align="right">{row.totalPrice}</TableCell>
        <TableCell align="right"><IconButton><DeleteIcon></DeleteIcon></IconButton></TableCell>
      </TableRow>
    ));
  } else {
    content = <p className={classes.noItems}>No Items</p>;
  }
  // const product = useSelector(state => state.product.products);
  // const {name, qty, price,} = cart;
  return (
    <Container>
      <Card className={classes.table}>
        <CardContent>
          <TableContainer>
            <Table  sx={{ minWidth: 650}} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Total Price</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{content}</TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Cart;
