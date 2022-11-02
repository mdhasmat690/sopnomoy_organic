import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { checkout } from "../../checkout";

function SingleProduct() {
  const [single, setSingle] = useState({});
  const { id } = useRouter().query;
  console.log(id);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingle(data);
      });
  }, []);
  return (
    <>
      <Container sx={{ mt: "50px" }}>
        <Box sx={{ width: "80%", mx: "auto" }}>
          <Typography
            sx={{ width: "25%", mx: "auto", fontFamily: "Playfair Display" }}
            variant="h5"
          >
            {single?.name}
          </Typography>
          <hr style={{ color: "#dedede" }} />

          <Container sx={{ mt: "70px" }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={12} sm={12} md={6}>
                <CardMedia
                  sx={{ width: "100%", mx: "auto" }}
                  component="img"
                  image={single?.img}
                  alt="Paella dish"
                />
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
                item
                xs={12}
                sm={12}
                md={6}
              >
                <Box>
                  <Typography
                    sx={{
                      mx: "auto",
                      fontFamily: "Playfair Display",
                      mb: "5px",
                      fontSize: "20px",
                    }}
                    variant="subtitle1"
                  >
                    {single?.nike}
                  </Typography>
                  <Typography
                    sx={{
                      mx: "auto",
                      fontFamily: "Playfair Display",
                      fontSize: "15px",
                      lineHeight: "2",
                      mt: "25px",
                    }}
                    variant="h5"
                  >
                    {single?.desc}
                  </Typography>

                  <Button
                    onClick={() => {
                      checkout({
                        lineItems: [
                          {
                            price: "price_1LzcAHJ5yIiCfaq0SYixsp23",
                            quantity: 1,
                          },
                        ],
                      });
                    }}
                    sx={{ width: "200px", mt: "25px" }}
                    variant="outlined"
                    color="error"
                  >
                    Shop
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </>
  );
}

export default SingleProduct;
