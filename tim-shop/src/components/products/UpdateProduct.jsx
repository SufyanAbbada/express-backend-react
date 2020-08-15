import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import productService from "../../services/ProductsService";
import Admin from "../auth/Admin";
import { toast } from 'react-toastify';

const UpdateProduct = (props) => {
  const [name, setName] = React.useState("");
  const [body, setBody] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const id = props.match.params.id;
  React.useEffect(() => {
    productService.getSingleProduct(id).then((data) => {
      setName(data.name);
      setBody(data.body);
      setPrice(data.price);
    });
  }, []);
  return (
    <Admin>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Update Product</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            label="Product Name"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            label="Description"
            fullWidth
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <TextField
            label="Model Price"
            fullWidth
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              productService
                .updateProduct(id, { name, body, price })
                .then((data) => {
                  console.log(data);
                  props.history.push("/products");
                })
                .catch((err) => {
                  console.log(err);
                  toast.error(err.response.data, {
                    position: toast.POSITION.TOP_LEFT,
                  });
                });
            }}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Admin>
  );
};

export default UpdateProduct;
