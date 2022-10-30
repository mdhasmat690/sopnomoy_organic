import React from "react";
import { Button, CardMedia, Grid, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Sticky from "wil-react-sticky";

const LeftProduct = () => {
  return (
    <>
      <Grid item xs={4} sm={4} md={8}>
        <br />
        <br />
        <br />
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Playfair Display",
            my: "10px",
          }}
        >
          BEAUTY
        </Typography>
        <div>
          <div
            style={{
              borderTop: "1px solid #dedede",

              backgroundColor: "dedede",
              marginBottom: "-3px",
            }}
          ></div>
          <div
            style={{
              borderTop: "5px solid #b0b478",
              backgroundColor: "#b0b478",
              marginRight: "700px",
            }}
          ></div>
        </div>
        <br />
        <br />
        {/* BEAUTY section start */}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
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
        {/* BEAUTY section end */}
        <br />
        {/* youtube video add */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Playfair Display",
            my: "10px",
          }}
        >
          EXPLORE ASHEVILLE
        </Typography>

        <div>
          <div
            style={{
              borderTop: "1px solid #dedede",

              backgroundColor: "dedede",
              marginBottom: "-3px",
            }}
          ></div>
          <div
            style={{
              borderTop: "5px solid #b0b478",
              backgroundColor: "#b0b478",
              marginRight: "700px",
            }}
          ></div>
        </div>

        <iframe
          style={{ marginTop: "30px" }}
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/f2vz7HyBZWg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />

        {/* -------------Health Section Start---------------- */}
        <br />
        <br />
        <br />
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Playfair Display",
            my: "10px",
          }}
        >
          HEALTH
        </Typography>
        <div>
          <div
            style={{
              borderTop: "1px solid #dedede",

              backgroundColor: "dedede",
              marginBottom: "-3px",
            }}
          ></div>
          <div
            style={{
              borderTop: "5px solid #b0b478",
              backgroundColor: "#b0b478",
              marginRight: "700px",
            }}
          ></div>
        </div>
        <br />
        <br />

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

        {/* youtube video add */}
        <br />
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Playfair Display",
            my: "10px",
          }}
        >
          WOOLROOM
        </Typography>
        <div>
          <div
            style={{
              borderTop: "1px solid #dedede",

              backgroundColor: "dedede",
              marginBottom: "-3px",
            }}
          ></div>
          <div
            style={{
              borderTop: "5px solid #b0b478",
              backgroundColor: "#b0b478",
              marginRight: "700px",
            }}
          ></div>
        </div>

        <iframe
          style={{ marginTop: "30px" }}
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/i4iHTGZavwk"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />

        {/* -------------Health Section end---------------- */}

        {/* -------------TRAVEL Section start---------------- */}
        <br />
        <br />
        <br />
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Playfair Display",
            my: "10px",
          }}
        >
          TRAVEL
        </Typography>
        <div>
          <div
            style={{
              borderTop: "1px solid #dedede",

              backgroundColor: "dedede",
              marginBottom: "-3px",
            }}
          ></div>
          <div
            style={{
              borderTop: "5px solid #b0b478",
              backgroundColor: "#b0b478",
              marginRight: "700px",
            }}
          ></div>
        </div>
        <br />
        <br />

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

        {/* youtube video add */}
        <br />
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Playfair Display",
            my: "10px",
          }}
        >
          NATUREPEDIC | DO NOT JUDGE A BED BY ITS COVERS
        </Typography>
        <div>
          <div
            style={{
              borderTop: "1px solid #dedede",

              backgroundColor: "dedede",
              marginBottom: "-3px",
            }}
          ></div>
          <div
            style={{
              borderTop: "5px solid #b0b478",
              backgroundColor: "#b0b478",
              marginRight: "700px",
            }}
          ></div>
        </div>

        <iframe
          style={{ marginTop: "30px" }}
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/7WHBkm7R8Y4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        {/* -------------TRAVEL Section end---------------- */}

        {/* -------------THE LATEST Section start---------------- */}
        <br />
        <br />
        <br />
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Playfair Display",
            my: "10px",
          }}
        >
          THE LATEST
        </Typography>
        <div>
          <div
            style={{
              borderTop: "1px solid #dedede",

              backgroundColor: "dedede",
              marginBottom: "-3px",
            }}
          ></div>
          <div
            style={{
              borderTop: "5px solid #b0b478",
              backgroundColor: "#b0b478",
              marginRight: "700px",
            }}
          ></div>
        </div>
        <br />
        <br />

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={6}>
            <CardMedia
              sx={{ width: "100%", height: "300px", mx: "auto" }}
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
              image="https://i.ibb.co/R3gM3GT/MAT-9887-RBG-scaled.webp"
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
              image="https://i.ibb.co/T0WNCNC/i-Stock-1302873408-RBG-e1654637581834.webp"
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
        {/* -------------THE LATEST Section end---------------- */}
      </Grid>
    </>
  );
};

export default LeftProduct;
