import { Button, CardMedia, Grid, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import LeftUncerScore from "./leftUnderscore";
import MemberShip from "./memberShip";
import NewsLater from "./newsLater";
import Subscribe from "./subscribe";

function Left() {
  return (
    <>
      <Subscribe />

      <MemberShip />
      <NewsLater />

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
        image="https://i.ibb.co/54qYYqy/Hair-Growth-Oil-Organic-Spa-Banner1.png"
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
          EDEN FOODS
        </Typography>
      </Box>
      <LeftUncerScore />
      <Box>
        <CardMedia
          sx={{ width: "100%", mx: "auto", mt: "25px" }}
          component="img"
          image="https://i.ibb.co/0M7wJcm/teaa.png"
          alt="Paella dish"
        />
      </Box>
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Playfair Display",
            mt: "25px",
          }}
        >
          JOLIE MAROC
        </Typography>
      </Box>
      <LeftUncerScore />
      <Box>
        <CardMedia
          sx={{ width: "100%", mx: "auto", mt: "25px" }}
          component="img"
          image="https://i.ibb.co/bmvw1JX/Argan-Oil-Sitewide-Sidebar-Banner-Ad-2.png"
          alt="Paella dish"
        />
      </Box>
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Playfair Display",
            mt: "25px",
          }}
        >
          VIEW LATEST DIGITAL EDITIONS
        </Typography>
      </Box>
      <LeftUncerScore />
      <Box>
        <CardMedia
          sx={{ width: "70%", mt: "25px" }}
          component="img"
          image="https://i.ibb.co/L0g6kZj/cover.jpg"
          alt="Paella dish"
        />
      </Box>

      <Box>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Playfair Display",
            mt: "25px",
          }}
        >
          THE WELLNESS MOONSHOT CALENDAR
        </Typography>
      </Box>
      <LeftUncerScore />
      <Box>
        <CardMedia
          sx={{ width: "100%", mt: "25px" }}
          component="img"
          image="https://i.ibb.co/TWPjyCw/warth.jpg"
          alt="Paella dish"
        />
      </Box>

      <br />
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Playfair Display",
          my: "10px",
        }}
      >
        SUBSCRIBE Now
      </Typography>
      <LeftUncerScore />
      <iframe
        style={{ marginTop: "30px" }}
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/7WHBkm7R8Y4"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </>
  );
}

export default Left;
