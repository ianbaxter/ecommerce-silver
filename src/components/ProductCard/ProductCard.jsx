import React from "react"
import Img from "gatsby-image"
import { useShoppingCart } from "use-shopping-cart"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const ProductCard = ({ node, imgSrc }) => {
  const classes = useStyles()

  const { addItem } = useShoppingCart()

  const productData = {
    name: node.product.name,
    sku: node.id,
    price: node.unit_amount_decimal,
    image: imgSrc,
    currency: node.currency,
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Img fluid={imgSrc} />
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {node.product.name}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {`£${node.unit_amount_decimal / 100}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          onClick={() => addItem(productData)}
          aria-label={`Add ${node.product.name} to your cart`}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
