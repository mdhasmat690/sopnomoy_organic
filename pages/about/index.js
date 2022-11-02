import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

function About() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    width: "200px",
    fontSize: "18px",
    backgroundColor: "white",
    color: "black",
    fontWeight: "700",
    border: "2px solid #f6870a",
    "&:hover": {
      backgroundColor: "#f6870a",
    },
  }));
  return (
    <>
      <Box>
        <Container>
          <Box sx={{ mx: "auto", mt: "40px", width: "80%" }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={4} sm={4} md={6}>
                <Box>
                  {" "}
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="h3"
                    gutterBottom
                    component="div"
                  >
                    About Us
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      lineHeight: 2,
                      fontSize: "1rem",
                      color: "#111111",
                      letterSpacing: "0.5px",
                      effectScale: 1.1,
                    }}
                    gutterBottom
                    component="div"
                  >
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim.
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "18px",
                      lineHeight: 2,
                      fontSize: "1rem",
                      color: "#111111",
                      letterSpacing: "0px",
                      effectScale: 1.1,
                      mt: "15px",
                    }}
                    variant="h3"
                    gutterBottom
                    component="div"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </Typography>
                  <Typography sx={{ mt: "30px", fontSize: "1.125rem" }}>
                    Image from Other site
                  </Typography>
                  <ColorButton sx={{ my: "40px", padding: "10px" }}>
                    Book a Call
                  </ColorButton>
                </Box>
              </Grid>

              <Grid item xs={4} sm={4} md={6}>
                {" "}
                <CardMedia
                  sx={{ width: "100%", height: "100%", mx: "auto" }}
                  component="img"
                  image="https://i.ibb.co/z8S8RST/about.jpg"
                  alt="Paella dish"
                />
              </Grid>
            </Grid>

            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid sx={{ textAlign: "left" }} item xs={4} sm={4} md={6}>
                <Box>
                  <Typography
                    sx={{ color: "#f6870a", fontSize: "50px", fontWeight: 700 }}
                  >
                    01
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontStyle: "italic",
                      fontSize: "17px",
                      color: "#111111",
                    }}
                  >
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} sm={4} md={6}>
                <Box>
                  <Typography
                    sx={{ color: "#f6870a", fontSize: "50px", fontWeight: 700 }}
                  >
                    02
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontStyle: "italic",
                      fontSize: "17px",
                      color: "#111111",
                    }}
                  >
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default About;
