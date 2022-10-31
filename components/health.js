import { CardMedia, Grid, Typography } from "@mui/material";
import Underscore from "./underscore";
function Health() {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Playfair Display",
          my: "10px",
        }}
      >
        HEALTH
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
            image="https://i.ibb.co/sP1Rb1z/i-Stock-1255565767-RBG-e1654005670187.webp"
            alt="Paella dish"
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display",
              my: "10px",
            }}
          >
            Banishing Burnout
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
            image="https://i.ibb.co/QJ1H91f/Field-Trip-Health-0417-RBG.webp"
            alt="Paella dish"
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display",
              my: "10px",
            }}
          >
            Psychedelic Healing
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
            image="https://i.ibb.co/TbqWbSH/i-Stock-1135931973.webp"
            alt="Paella dish"
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display",
              my: "10px",
            }}
          >
            The Power of Purpose
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

export default Health;
