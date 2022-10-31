import { Button, CardMedia, Grid, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import LeftUncerScore from "./leftUnderscore";

function Subscribe() {
  return (
    <>
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Playfair Display",
          }}
        >
          SUBSCRIBE
        </Typography>
      </Box>
      <LeftUncerScore />
      <Grid container sx={{ mt: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
        <Grid xs={12} sm={4} md={4}>
          <CardMedia
            sx={{ width: "100%", height: "100%", mx: "auto" }}
            component="img"
            image="https://i.ibb.co/FB956qF/JF22-Cover-Final-1-scaled.webp"
            alt="Paella dish"
          />
        </Grid>
        <Grid xs={6} sm={4} md={4}>
          <CardMedia
            sx={{ width: "100%", height: "100%", mx: "auto" }}
            component="img"
            image="https://i.ibb.co/9HWRdJJ/MA22-Cover-final-1.webp"
            alt="Paella dish"
          />
        </Grid>
        <Grid xs={6} sm={4} md={4}>
          <CardMedia
            sx={{ width: "100%", height: "100%", mx: "auto" }}
            component="img"
            image="https://i.ibb.co/L0g6kZj/cover.jpg"
            alt="Paella dish"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Subscribe;
