import { useSelector } from "react-redux";
import { Container, Grid } from "@material-ui/core";
import ProItem from "../components/ProItem";
const Product = () => {
  const productItem = useSelector((state) => state.product.products);
  return (
    <Container>
      <Grid container spacing={2}>
        {productItem.map((product) => {
          return (
            <Grid key={product.id} item xs={4}>
              <ProItem  item={product}></ProItem>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Product;
