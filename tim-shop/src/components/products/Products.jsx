import React from "react";
import SingleProduct from "./SingleProduct";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import productService from "./../../services/ProductsService";
import userService from "../../services/UserService";
import { toast } from 'react-toastify';
const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Products = (props) => {
  const [products, setProducts] = React.useState([]);
  const classes = useStyles();
  const page = props.match.params.page ? props.match.params.page : 1;
  const [total, setTotal] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const getData = () => {
    productService
      .getProducts(page, perPage)
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,
        });
      });
  };
  // getData();
  React.useEffect(getData, [page, perPage]);
  // console.log("Inside Products Component");
  const handleNewProductClick = () => {
    console.log(props);
    props.history.push("/products/new");
  };
  return (
    <div>
      <h1>Products</h1>
      Records Per Page:{" "}
      <select
        value={perPage}
        onChange={(e) => setPerPage(e.target.value)}
        style={{ width: "100px", height: "30px" }}
      >
        <option value="2">Two</option>
        <option value="10">Ten</option>
      </select>
      {userService.isLoggedIn() && (
        <Fab
          color="primary"
          aria-label="add"
          className={classes.addBtn}
          onClick={handleNewProductClick}
        >
          <AddIcon />
        </Fab>
      )}
      {products.length === 0 ? (
        <p>There are no products</p>
      ) : (
        <Grid
          container
          spacing={3}
          alignItems="center"
          justify="center"
        >
          {products.map((product, index) => (
            <SingleProduct key={index} product={product} onDelete={getData} />
          ))}
        </Grid>
      )}
      <Grid item xs={12}>
        <Pagination
          count={Math.ceil(total / perPage)}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => {
            props.history.push("/products/" + value);
          }}
        />
      </Grid>
    </div>
  );
};

export default Products;
