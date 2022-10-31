import { Button, CardMedia, Grid, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import LeftUncerScore from "./leftUnderscore";

function NewsLater() {
  return (
    <>
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Playfair Display",
            mt: "25px",
          }}
        >
          JYANO HAIRCARE
        </Typography>
      </Box>
      <LeftUncerScore />
      <CardMedia
        sx={{ width: "100%", height: "500px", mx: "auto", mt: "25px" }}
        component="img"
        image="https://i.ibb.co/YLvQTFY/340-600-Web-Banner-Organic-Spa-Magazine-2021-JYano.webp"
        alt="Paella dish"
      />
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Playfair Display",
            mt: "25px",
          }}
        >
          EWELLNESS NEWSLETTER
        </Typography>
      </Box>
      <LeftUncerScore />

      <Box>
        <Typography
          sx={{
            color: "gray",
            mt: "25px",
            fontFamily: "Playfair Display",
          }}
        >
          Name
        </Typography>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />

        <Typography
          sx={{
            color: "gray",
            mt: "25px",
            fontFamily: "Playfair Display",
          }}
        >
          Email
        </Typography>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <br />
        <Button
          sx={{ width: "50%", mt: "15px", mx: "auto", color: "black" }}
          variant="outlined"
        >
          Already Member
        </Button>
      </Box>
    </>
  );
}

export default NewsLater;
