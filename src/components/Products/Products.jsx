import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Product/Product";
import useStyles from "./styles";
const products = [
  {
    id: 1,
    name: "shoes",
    description: "running shoes.",
    price: "$5",
    image: "https://loremflickr.com/320/240",
  },
  {
    id: 2,
    name: "macbook",
    description: "Apple macbook.",
    price: "$10",
    image: "https://loremflickr.com/320/240",
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
