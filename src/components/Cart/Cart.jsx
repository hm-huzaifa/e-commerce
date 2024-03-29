import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  const classes = useStyles();

  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        You have no items in your shopping cart..!
        <Link to="/" className={classes.link}>
          Add Some..!!!
        </Link>
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem item={item} />
            </Grid>
          ))}
        </Grid>

        <div className={classes.cartDetails}>
          <Typography variant="h4">
            Subtotal: {cart.subtotal.formated_with_symbol}
          </Typography>

          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
            >
              Empty Cart
            </Button>

            <Button
              className={classes.checkoutButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          </div>
        </div>
      </>
    );
  };

  if (!cart.line_items) return "Loading...";

  return (
    <div>
      <Container>
        <div className={classes.toolbar}>
          <Typography className={classes.title} variant="h4" gutterBottom>
            Your Shopping Cart
          </Typography>
          {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </div>
      </Container>
    </div>
  );
};

export default Cart;
