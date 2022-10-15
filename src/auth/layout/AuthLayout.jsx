import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

// import girasol from '../../assets/girasol.jpg'

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(http://localhost:3000/src/assets/flowers.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{
          background: "linear-gradient(111deg, #FE6B8B 45%, #FF8E53 85%)",
          // background: 'linear-gradient(274deg, rgba(194,37,87,1) 20%, rgba(237,88,135,1) 39%, rgba(255,255,255,1) 100%)'
          // background: "linear-gradient(45deg, #FE6B8B 45%, #FF8E53 85%, #f54e00 38%)",
        }}
      >
        <Box
          sx={{
            my: 25,
            mx: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#f0f0f0",
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h4"
            textAlign={"center"}
            sx={{ mb: 4, mt: 4 }}
            className="typ-text"
          >
            <b> {title} </b>
          </Typography>

          {children}
        </Box>
      </Grid>
    </Grid>
  );
};
