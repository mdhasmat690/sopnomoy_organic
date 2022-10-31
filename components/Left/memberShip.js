import { Button, CardMedia, Grid, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import LeftUncerScore from "./leftUnderscore";

function MemberShip() {
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
          LIVEWELL MEMBERSHIP
        </Typography>
      </Box>
      <LeftUncerScore />
      <Box>
        <CardMedia
          sx={{ width: "100%", mx: "auto", mt: "25px" }}
          component="img"
          image="https://i.ibb.co/Cmkjm3P/membership.jpg"
          alt="Paella dish"
        />

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

export default MemberShip;
