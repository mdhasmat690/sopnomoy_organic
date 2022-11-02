import { Button, CardMedia, TextField, Typography } from "@mui/material";
import Beauty from "./beauty";
import Health from "./health";
import LetestSection from "./letestSecton";
import Travel from "./travel";
import Underscore from "./underscore";

function Test() {
  return (
    <>
      <Beauty></Beauty>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Playfair Display",
          my: "10px",
          mt: "40px",
        }}
      >
        EXPLORE ASHEVILLE
      </Typography>

      <Underscore />

      <iframe
        style={{ marginTop: "1px", marginBottom: "45px" }}
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/7WHBkm7R8Y4"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <Health />
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Playfair Display",
          my: "10px",
          mt: "45px",
        }}
      >
        WOOLROOM
      </Typography>

      <Underscore />

      <iframe
        style={{ marginTop: "1px", marginBottom: "45px" }}
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/i4iHTGZavwk"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <Travel />

      <Typography
        variant="h6"
        sx={{
          fontFamily: "Playfair Display",
          my: "10px",
          mt: "40px",
        }}
      >
        NATUREPEDIC | DO NOT JUDGE A BED BY ITS COVERS
      </Typography>
      <Underscore />

      <iframe
        style={{ marginTop: "30px", marginBottom: "45px" }}
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/7WHBkm7R8Y4"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />

      <LetestSection />
    </>
  );
}

export default Test;
