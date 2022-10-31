import { CardMedia, Grid } from "@mui/material";
import { Box } from "@mui/system";

function Banner() {
  return (
    <Box>
      <Grid container columns={{ xs: 12, sm: 8, md: 12 }}>
        <Grid xs={12} sm={4} md={6}>
          <CardMedia
            sx={{ width: "100%", height: "100%", mx: "auto" }}
            component="img"
            image="https://i.ibb.co/THyXJxt/i-Stock-1302873408-RBG-e1654637581834.webp"
            alt="Paella dish"
          />
        </Grid>
        <Grid xs={6} sm={4} md={3}>
          <CardMedia
            sx={{ width: "100%", height: "100%", mx: "auto" }}
            component="img"
            image="https://i.ibb.co/R3gM3GT/MAT-9887-RBG-scaled.webp"
            alt="Paella dish"
          />
        </Grid>
        <Grid xs={6} sm={4} md={3}>
          <CardMedia
            sx={{ width: "100%", height: "100%", mx: "auto" }}
            component="img"
            image="https://i.ibb.co/f4wTXbf/i-Stock-1329186621-e1654635363154.webp"
            alt="Paella dish"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Banner;
