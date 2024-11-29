import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Stack,
  Grid2,
  Skeleton,
} from "@mui/material";
import Link from "next/link";
import { useAllDoctorList } from "@/customHooks/cms.query.hooks";
import DoctorDetails from "@/components/doctorDetails/DoctorDetails";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const { data: allDoctors, isLoading: isDoctorsLoading } = useAllDoctorList();

  const handleOpen = (doctor: any) => {
    setSelectedDoctor(doctor);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  function replaceBackslashes(input: string): string {
    return input.replace(/\\/g, "//");
  }
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url('/images/doctors1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "400px", lg: "400px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
         <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 255, 0, 0.4)', // Bluish background with transparency
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'center',
              textAlign: 'center',
              p: 6,
            }}
          >
            <Stack alignItems='start'>
              <Typography variant="h4" sx={{color:'white'}} gutterBottom>Our Doctors</Typography>
              <Typography variant="h6" sx={{color:'white'}}>Home / Doctors</Typography>
            </Stack>
          </Box>
      </Box>
      {isDoctorsLoading? (
      <Grid2 container spacing={2} p={2}>
        <Grid2 size={{ xs: 6, md: 3 }}>
          <Skeleton height="40vh" />
        </Grid2>
        <Grid2 size={{ xs: 6, md: 3 }}>
          <Skeleton height="40vh" />
        </Grid2>
        <Grid2 size={{ xs: 6, md: 3 }}>
          <Skeleton height="40vh" />
        </Grid2>
        <Grid2 size={{ xs: 6, md: 3 }}>
          <Skeleton height="40vh" />
        </Grid2>
      </Grid2>
      ):(
      <Box sx={{ backgroundColor: "#94DEA5", p: { xs: 1, md: 3 } }}>
        <Stack direction="row" spacing={1} m={4}>
          <Typography variant="h4">Our</Typography>
          <Typography variant="h4" sx={{ color: "blue" }}>
            Doctors
          </Typography>
        </Stack>
        <Grid container width="100%" p={{ xs: 0, md: 2 }} spacing={2}>
          {allDoctors?.data.map((item) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={item._id}>
              <Card sx={{ height: "100%", width: "100%" }}>
                <CardMedia
                  sx={{
                    height: 250,
                    width:"100%",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                  }}
                  image={`https://doctor-app-bp0m.onrender.com/${replaceBackslashes(
                    item.image
                  )}`}
                  title={item.name}
                />
                <CardContent>
                  <Typography  variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#3d5a80" }}>
                    {item.department_details[0].departmentName}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Aperture time: {item.aperture_time}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Departure time: {item.departure_time}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                  >
                    <Button
                      size="small"
                      fullWidth
                      variant="contained"
                      sx={{ mb: 2, p: 1 }}
                      onClick={() => handleOpen(item._id)}
                    >
                      see details
                    </Button>
                    <Link
                      href={`/appointment/${item._id}`}
                      style={{ width: "100%" }}
                    >
                      <Button
                        size="small"
                        fullWidth
                        variant="contained"
                        sx={{ p: 1 }}
                        color="secondary"
                      >
                        take an appointment
                      </Button>
                    </Link>
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        {selectedDoctor && (
          <DoctorDetails
            open={open}
            handleClose={handleClose}
            doctor={selectedDoctor}
          />
        )}
      </Box>
      )}
    </Box>
  );
};

export default Index;
