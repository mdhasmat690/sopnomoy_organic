import { Button, CardMedia, Grid, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Sticky from "wil-react-sticky";
import Banner from "../components/banner";
import Left from "../components/Left/left";
import Test from "../components/test";

export default function Home() {
  return (
    <>
      <Banner />
      <br />
      <br />

      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={8}>
            <Test />
          </Grid>

          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            style={{
              overflowY: "scroll",
            }}
            sx={{ position: "relative", marginBottom: "200px" }}
          >
            <Sticky bottom={"150px"}>
              <div>
                <Left />
              </div>
            </Sticky>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
