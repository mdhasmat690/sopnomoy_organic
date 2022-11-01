import { Button, CardMedia, Grid, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Sticky from "wil-react-sticky";
import Banner from "../components/banner";
import Left from "../components/Left/left";
import Test from "../components/test";
import StickyBox from "react-sticky-box";

export default function Home() {
  return (
    <>
      {/*  <Banner />
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
            // style={{
            //   overflowY: "scroll",
            // }}
          >
            <Sticky bottomOffset={80}>
              <Left />
            </Sticky>
          </Grid>
        </Grid>
      </Container> */}
      <Banner />
      <br />
      <br />
      <div className="row">
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={8}>
              <div>
                <Test />
              </div>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <StickyBox offsetTop={20} offsetBottom={20}>
                <div>
                  <Left />
                </div>
              </StickyBox>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
