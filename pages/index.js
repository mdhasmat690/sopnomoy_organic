import { Button, CardMedia, Grid, TextField, Typography } from "@mui/material";
/* import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper"; */
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Sticky from "wil-react-sticky";

export default function Home() {
  return (
    <>
      {/* ----------------------Bannar style start------------------ */}
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
      {/* ----------------------Bannar style end------------------ */}
      <br />
      <br />

      {/* ---------------------Product style display show start--------------------  */}
      <Container>
        {/*---------------Parens Grid start------------  */}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* ---------Right side start */}
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
          {/* --------------------Right side end--------- */}
          {/* ---------------------------Left side style start---------------------------- */}
          <Grid item xs={4} sm={4} md={4}>
            <Sticky>
              {/* ---------------SUBSCRIBE start---------------- */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Playfair Display",
                  }}
                >
                  SUBSCRIBE
                </Typography>
              </Box>
              <div>
                <div
                  style={{
                    borderTop: "1px solid #dedede",

                    backgroundColor: "#dedede",
                    marginBottom: "-3px",
                  }}
                ></div>
                <div
                  style={{
                    borderTop: "5px solid #b0b478",
                    backgroundColor: "#b0b478",
                    marginRight: "319px",
                  }}
                ></div>
              </div>
              <Grid
                container
                sx={{ mt: 3 }}
                columns={{ xs: 12, sm: 8, md: 12 }}
              >
                <Grid xs={12} sm={4} md={4}>
                  <CardMedia
                    sx={{ width: "100%", height: "100%", mx: "auto" }}
                    component="img"
                    image="https://i.ibb.co/FB956qF/JF22-Cover-Final-1-scaled.webp"
                    alt="Paella dish"
                  />
                </Grid>
                <Grid xs={6} sm={4} md={4}>
                  <CardMedia
                    sx={{ width: "100%", height: "100%", mx: "auto" }}
                    component="img"
                    image="https://i.ibb.co/9HWRdJJ/MA22-Cover-final-1.webp"
                    alt="Paella dish"
                  />
                </Grid>
                <Grid xs={6} sm={4} md={4}>
                  <CardMedia
                    sx={{ width: "100%", height: "100%", mx: "auto" }}
                    component="img"
                    image="https://i.ibb.co/L0g6kZj/cover.jpg"
                    alt="Paella dish"
                  />
                </Grid>
              </Grid>
              {/* ---------------SUBSCRIBE end---------------- */}

              {/* -------------LIVEWELL MEMBERSHIP------------------- */}
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
              <div>
                <div
                  style={{
                    borderTop: "1px solid #dedede",

                    backgroundColor: "#dedede",
                    marginBottom: "-3px",
                  }}
                ></div>
                <div
                  style={{
                    borderTop: "5px solid #b0b478",
                    backgroundColor: "#b0b478",
                    marginRight: "319px",
                  }}
                ></div>
              </div>
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
              {/* -------------LIVEWELL end------------------- */}

              {/* -----------JYANO HAIRCARE start------------------- */}
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
              <div>
                <div
                  style={{
                    borderTop: "1px solid #dedede",

                    backgroundColor: "#dedede",
                    marginBottom: "-3px",
                  }}
                ></div>
                <div
                  style={{
                    borderTop: "5px solid #b0b478",
                    backgroundColor: "#b0b478",
                    marginRight: "319px",
                  }}
                ></div>
              </div>
              <CardMedia
                sx={{ width: "100%", height: "500px", mx: "auto", mt: "25px" }}
                component="img"
                image="https://i.ibb.co/YLvQTFY/340-600-Web-Banner-Organic-Spa-Magazine-2021-JYano.webp"
                alt="Paella dish"
              />
              {/* -----------JYANO HAIRCARE end------------------- */}
              {/* -----------EWELLNESS NEWSLETTER start----------- */}
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
              <div>
                <div
                  style={{
                    borderTop: "1px solid #dedede",

                    backgroundColor: "#dedede",
                    marginBottom: "-3px",
                  }}
                ></div>
                <div
                  style={{
                    borderTop: "5px solid #b0b478",
                    backgroundColor: "#b0b478",
                    marginRight: "319px",
                  }}
                ></div>
              </div>

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

              {/* -----------EWELLNESS NEWSLETTER end----------- */}

              {/* -----------OIL-DIVINE start----------- */}

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
              <div>
                <div
                  style={{
                    borderTop: "1px solid #dedede",

                    backgroundColor: "#dedede",
                    marginBottom: "-3px",
                  }}
                ></div>
                <div
                  style={{
                    borderTop: "5px solid #b0b478",
                    backgroundColor: "#b0b478",
                    marginRight: "319px",
                  }}
                ></div>
              </div>
              <CardMedia
                sx={{ width: "100%", height: "500px", mx: "auto", mt: "25px" }}
                component="img"
                image="https://i.ibb.co/54qYYqy/Hair-Growth-Oil-Organic-Spa-Banner1.png"
                alt="Paella dish"
              />

              {/* -----------OIL-DIVINE end----------- */}
              {/* -----------EDEN FOODS start----------- */}

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
              <div>
                <div
                  style={{
                    borderTop: "1px solid #dedede",

                    backgroundColor: "#dedede",
                    marginBottom: "-3px",
                  }}
                ></div>
                <div
                  style={{
                    borderTop: "5px solid #b0b478",
                    backgroundColor: "#b0b478",
                    marginRight: "319px",
                  }}
                ></div>
              </div>
              <Box>
                <CardMedia
                  sx={{ width: "100%", mx: "auto", mt: "25px" }}
                  component="img"
                  image="https://i.ibb.co/0M7wJcm/teaa.png"
                  alt="Paella dish"
                />
              </Box>

              {/* -----------EDEN FOODS end----------- */}
              {/* -----------JOLIE MAROC start----------- */}

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
              <div>
                <div
                  style={{
                    borderTop: "1px solid #dedede",

                    backgroundColor: "#dedede",
                    marginBottom: "-3px",
                  }}
                ></div>
                <div
                  style={{
                    borderTop: "5px solid #b0b478",
                    backgroundColor: "#b0b478",
                    marginRight: "319px",
                  }}
                ></div>
              </div>
              <Box>
                <CardMedia
                  sx={{ width: "100%", mx: "auto", mt: "25px" }}
                  component="img"
                  image="https://i.ibb.co/bmvw1JX/Argan-Oil-Sitewide-Sidebar-Banner-Ad-2.png"
                  alt="Paella dish"
                />
              </Box>

              {/* -----------JOLIE MAROC end----------- */}

              {/* -----------VIEW LATEST DIGITAL EDITIONS start----------- */}

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
              <div>
                <div
                  style={{
                    borderTop: "1px solid #dedede",

                    backgroundColor: "#dedede",
                    marginBottom: "-3px",
                  }}
                ></div>
                <div
                  style={{
                    borderTop: "5px solid #b0b478",
                    backgroundColor: "#b0b478",
                    marginRight: "319px",
                  }}
                ></div>
              </div>
              <Box>
                <CardMedia
                  sx={{ width: "70%", mt: "25px" }}
                  component="img"
                  image="https://i.ibb.co/L0g6kZj/cover.jpg"
                  alt="Paella dish"
                />
              </Box>

              {/* -----------VIEW LATEST DIGITAL EDITIONS end----------- */}

              {/* -----------THE WELLNESS MOONSHOT CALENDAR start----------- */}

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
              <div>
                <div
                  style={{
                    borderTop: "1px solid #dedede",

                    backgroundColor: "#dedede",
                    marginBottom: "-3px",
                  }}
                ></div>
                <div
                  style={{
                    borderTop: "5px solid #b0b478",
                    backgroundColor: "#b0b478",
                    marginRight: "319px",
                  }}
                ></div>
              </div>
              <Box>
                <CardMedia
                  sx={{ width: "100%", mt: "25px" }}
                  component="img"
                  image="https://i.ibb.co/TWPjyCw/warth.jpg"
                  alt="Paella dish"
                />
              </Box>

              {/* -----------THE WELLNESS MOONSHOT CALENDAR end----------- */}

              {/* -----------THE WELLNESS MOONSHOT CALENDAR start----------- */}

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
              <div>
                <div
                  style={{
                    borderTop: "1px solid #dedede",

                    backgroundColor: "#dedede",
                    marginBottom: "-3px",
                  }}
                ></div>
                <div
                  style={{
                    borderTop: "5px solid #b0b478",
                    backgroundColor: "#b0b478",
                    marginRight: "319px",
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

              {/* -----------THE WELLNESS MOONSHOT CALENDAR end----------- */}
            </Sticky>
          </Grid>
          {/* --------------------------Left side style end---------------------------- */}
        </Grid>
        {/*---------------Parens Grid end------------  */}
      </Container>
      {/* ---------------------Product style display show end--------------------  */}
    </>
  );
}

/* 

 */
