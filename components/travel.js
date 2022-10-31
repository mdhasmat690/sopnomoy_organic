import { CardMedia, Grid, Typography } from "@mui/material";
import Underscore from "./underscore";

function Travel() {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Playfair Display",
          my: "10px",
        }}
      >
        TRAVEL
      </Typography>
      <Underscore />

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={6}>
          <CardMedia
            sx={{ width: "100%", height: "300px", mx: "auto" }}
            component="img"
            image="https://i.ibb.co/VmLH1zh/Terrasse-4-RBG.webp"
            alt="Paella dish"
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display",
              my: "10px",
            }}
          >
            An Elevated Experience
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
            image="https://i.ibb.co/0r50tFr/5-Slow-Pour-Set-Up-to-Main-Corridor-by-Nicole-Franzen-RBG-scaled.webp"
            alt="Paella dish"
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display",
              my: "10px",
            }}
          >
            Texas Cool
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
            image="https://i.ibb.co/kBfWXm7/Eleven-Taylor-River-Lodge-0002236.webp"
            alt="Paella dish"
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display",
              my: "10px",
            }}
          >
            Where The Wild Flowers Are
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
            image="https://i.ibb.co/5Ww5MLP/Sanctuary.webp"
            alt="Paella dish"
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display",
              my: "10px",
            }}
          >
            Where to Go Next? Sanctuary Camelback
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

export default Travel;
