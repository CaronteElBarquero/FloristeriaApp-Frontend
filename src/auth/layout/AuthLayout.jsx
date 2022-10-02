import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

// import girasol from '../../assets/girasol.jpg'

export const AuthLayout = ({ children, title = "" }) => {


  return (

    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(http://localhost:3000/src/assets/girasol5.jpg)",
          backgroundRepeat: 'no-repeat',

          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
            backgroundColor: 'primary.main'
            
          }}
        >
          <Box
            sx={{
              my: 30,
              mx: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 5,
              }}
          >
            <Typography variant="h4" textAlign={"center"} sx={{ mb: 3 }}>
              <strong> {title} </strong>
            </Typography>

            {children}

          </Box>
        </Grid>

      </Grid>




    

  );
};
