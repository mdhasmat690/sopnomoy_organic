import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
function Footer() {
  const st = {
    color: "#999",
    lineHeight: 1.4,
    fontSize: "14px",
  };
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <Box sx={{ textAlign: "center", mt: "80px" }}>
          <Typography
            sx={{ color: "white", textAlign: "center", mt: "80px", pt: "60px" }}
            variant="h2"
            gutterBottom
          >
            Sopnomoy Orgainc
          </Typography>

          <Box>
            <Box
              sx={{
                width: "35%",
                mx: "auto",
                mb: "10px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                justifyContent: "space-around",
              }}
            >
              <Typography sx={st}>Home</Typography>
              <Typography sx={st}>Product</Typography>
              <Typography sx={st}>About</Typography>
              <Typography sx={st}>News</Typography>
              <Typography sx={st}>Carer</Typography>
              <Typography sx={st}>Location</Typography>
              <Typography sx={st}>Privacy Policy</Typography>
            </Box>

            <Typography
              sx={{
                color: "#999",
                mt: "3px",

                pb: "70px",
                lineHeight: 1.4,
                fontSize: "13px",
              }}
            >
              2022 Sopnomoy Media Company, LTD. All Rights Reserved.
            </Typography>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Footer;
