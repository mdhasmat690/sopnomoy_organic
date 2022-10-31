import { CardMedia, Grid, Typography } from "@mui/material";
import Underscore from "./underscore";

function Beauty() {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Playfair Display",
        }}
      >
        BEAUTY
      </Typography>
      <Underscore></Underscore>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ mt: "1px" }}
      >
        <Grid item xs={4} sm={4} md={6}>
          <CardMedia
            sx={{ width: "100%", mx: "auto" }}
            component="img"
            image="https://i.ibb.co/w6YPfXr/i-Stock-1329186621-e1654635363154.webp"
            alt="Paella dish"
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display",
              my: "10px",
            }}
          >
            Brilliant Body Oils
          </Typography>
          <Typography variant="caption">
            <span style={{ color: "gray" }}>by</span> Md Hasmat
            <span style={{ color: "gray" }}> | June 9, 2022</span>
          </Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
          <CardMedia
            sx={{ width: "100%", height: "300px", mx: "auto" }}
            component="img"
            image="https://i.ibb.co/r7KrWkp/i-Stock-928877854-RBG-scaled-e1653574607382.webp"
            alt="Paella dish"
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display",
              my: "10px",
            }}
          >
            Flowers in Your Hair
          </Typography>
          <Typography variant="caption">
            <span style={{ color: "gray" }}>by</span> Md Hasmat
            <span style={{ color: "gray" }}> | June 9, 2022</span>
          </Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
          <CardMedia
            sx={{ width: "100%", height: "244px", mx: "auto" }}
            component="img"
            image="https://i.ibb.co/dfVXG9p/Welcome-Tend1008-1-scaled.webp"
            alt="Paella dish"
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display",
              my: "10px",
            }}
          >
            Something to Smile About
          </Typography>
          <Typography variant="caption">
            <span style={{ color: "gray" }}>by</span> Md Hasmat
            <span style={{ color: "gray" }}> | June 9, 2022</span>
          </Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
          <CardMedia
            sx={{ width: "100%", mx: "auto" }}
            component="img"
            image="https://i.ibb.co/Kbxs1G7/Helina-01-1.webp"
            alt="Paella dish"
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display",
              my: "10px",
            }}
          >
            The Benefits of Facial Acupuncture
          </Typography>
          <Typography variant="caption">
            <span style={{ color: "gray" }}>by</span> Md Hasmat
            <span style={{ color: "gray" }}> | June 9, 2022</span>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Beauty;
