import { Button, Card, CardContent, CardMedia, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import { useEffect, useState } from "react";

function Product() {
  const [user, setUser] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ marginTop: " 50px" }}>
      <div>
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {products.map((product) => {
              return (
                <Grid key={product.id} item xs={4} sm={4} md={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="300"
                      image={product.img}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        sx={{ fontFamily: "Lato" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.desc.slice(1, 130) + "[...]"}
                      </Typography>

                      <Link href={`/product/${product.id}`}>
                        <Button sx={{ mt: "10px" }} color="secondary">
                          Buy Now
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Product;
