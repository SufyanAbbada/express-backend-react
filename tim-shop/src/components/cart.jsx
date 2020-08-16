import React from "react";
import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
} from "@material-ui/core";

const Cart = (props) => {
  const [titems, setitems] = React.useState(1);
  const [tprice, setprice] = React.useState(9500);

  return (
    <div>
      <h1>My Shopping Cart</h1>
      <Table>
        <TableHead />
        <TableRow>
          <TableCell>Name of Poduct</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
        <TableHead />
        <TableBody>
          <TableRow>
            <TableCell>Samsung Galaxy A15</TableCell>
            <TableCell>{tprice}</TableCell>
            <TableCell>
              <Button variant="contained" color="secondary" onClick={(e) => {}}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total Items : {titems}</TableCell>
            <TableCell>Total Price: {tprice}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default Cart;
