import React from "react";
import { Grid, Button } from "@material-ui/core";
import productService from "./../../services/ProductsService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const SingleProduct = (props) => {
  const { product, onDelete, history } = props;
  console.log(props);

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      paddingLeft: "2%",
      marginTop: "5%",
      marginBottom: "5%",
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.propakistani.pk/wp-content/uploads/2019/07/mobile-phones-1024x652-e1569933597589.jpg"
          title={"Brand Of " + product.name.split(" ")[0]}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.body}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Price :</b> {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {userService.isAdmin() && (
          <>
            <Button
              size="small"
              color="primary"
              onClick={(e) => {
                console.log("navigate to update");
                history.push("/products/update/" + product._id);
              }}
            >
              Edit
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={(e) => {
                productService
                  .deleteProduct(product._id)
                  .then((data) => {
                    console.log(data);
                    onDelete();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Delete
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default withRouter(SingleProduct);
